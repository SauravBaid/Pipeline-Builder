// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <aside
      style={{
        background: "var(--bg-node)",
        borderRight: "1px solid var(--border-subtle)",
        minWidth: 180,
        padding: "24px 12px",
        height: "100vh",
        boxShadow: "2px 0 16px 0 rgba(0,0,0,0.12)",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 16,
          color: "var(--text-secondary)",
          marginBottom: 12,
          letterSpacing: 0.04,
        }}
      >
        Nodes
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="knowledgeBase" label="Knowledge Base" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="timer" label="Timer" />
        <DraggableNode type="uppercase" label="Uppercase" />
        <DraggableNode type="logger" label="Logger" />
      </div>
    </aside>
  );
};
