import { useState } from "react";
import { useStore } from "./store";
import { ResultModal } from "./resultModal";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      setResult(data);
    } catch (err) {
      setResult({
        num_nodes: 0,
        num_edges: 0,
        is_dag: false,
        error: "Failed to connect to backend.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "32px 0",
        }}
      >
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={loading}
          style={{
            background:
              "linear-gradient(90deg, var(--color-llm), var(--color-input))",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            fontWeight: 700,
            fontSize: 16,
            padding: "12px 36px",
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.10)",
            cursor: loading ? "not-allowed" : "pointer",
            letterSpacing: 0.04,
            transition: "background 0.2s",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
      <ResultModal result={result} onClose={() => setResult(null)} />
    </>
  );
};
