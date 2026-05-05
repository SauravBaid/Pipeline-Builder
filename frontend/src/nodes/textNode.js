import { useState, useEffect } from "react";
import { BaseNode } from "./baseNode";
import {
  Handle,
  Position,
  useUpdateNodeInternals,
  useReactFlow,
} from "reactflow";

function extractVariables(text) {
  const matches = [...text.matchAll(/\{\{(\w+)\}\}/g)];
  return [...new Set(matches.map((m) => m[1]))];
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || "{{input}}");
  const [variables, setVariables] = useState(() =>
    extractVariables(data?.text || "{{input}}"),
  );
  const [dimensions, setDimensions] = useState({ width: 200, height: 80 });
  const updateNodeInternals = useUpdateNodeInternals();
  const { getEdges, setEdges } = useReactFlow();

  // Resize effect: adjust width/height based on text, with wrapping
  useEffect(() => {
    const minWidth = 200;
    const maxWidth = 400;
    const approxCharWidth = 8; // px
    const lines = currText.split("\n");
    const longestLine = Math.max(...lines.map((l) => l.length), 10);
    let width = Math.max(
      minWidth,
      Math.min(maxWidth, longestLine * approxCharWidth + 40),
    );
    // If any line is longer than maxWidth, wrap it and increase height
    let totalLines = 0;
    for (const line of lines) {
      totalLines +=
        Math.ceil((line.length * approxCharWidth) / (width - 40)) || 1;
    }
    const height = Math.max(80, totalLines * 24 + 40);
    setDimensions({ width, height });
    updateNodeInternals(id);
  }, [currText, id, updateNodeInternals]);

  // Dynamic handles effect: update variable handles on left
  useEffect(() => {
    const vars = extractVariables(currText);
    setVariables(vars);

    // Remove edges connected to deleted variable handles
    if (typeof getEdges === "function" && typeof setEdges === "function") {
      const edges = getEdges();
      setEdges(
        edges.filter(
          (e) =>
            !(
              e.target === id &&
              e.targetHandle &&
              e.targetHandle.startsWith(`${id}-var-`) &&
              !vars.includes(e.targetHandle.replace(`${id}-var-`, ""))
            ),
        ),
      );
    }
    updateNodeInternals(id);
  }, [currText, id, getEdges, setEdges, updateNodeInternals]);

  // Handles: left for variables, right for output
  const handles = [
    ...variables.map((v, i) => ({
      type: "target",
      position: "left",
      id: `${id}-var-${v}`,
      style: { top: `${(i + 1) * 30}px` },
    })),
    {
      type: "source",
      position: "right",
      id: `${id}-output`,
    },
  ];

  return (
    <BaseNode label="Text" handles={handles} style={dimensions} type="text">
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <label style={{ width: "100%" }}>
          Text:
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            style={{
              width: "100%",
              minWidth: 0,
              height: dimensions.height - 56,
              minHeight: 28,
              resize: "none",
              fontFamily: "inherit",
              fontSize: 14,
              color: "var(--text-primary)",
              background: "var(--bg-node)",
              border: "1px solid var(--border-subtle)",
              borderRadius: 6,
              padding: 8,
              outline: "none",
              overflow: "auto",
              boxSizing: "border-box",
              display: "block",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
};
