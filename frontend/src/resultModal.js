// src/components/ResultModal.jsx
export const ResultModal = ({ result, onClose }) => {
  if (!result) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Pipeline Analysis</h3>
        <div className="modal-stat">
          <span>Nodes</span>
          <strong>{result.num_nodes}</strong>
        </div>
        <div className="modal-stat">
          <span>Edges</span>
          <strong>{result.num_edges}</strong>
        </div>
        <div className="modal-stat">
          <span>Is there a cycle?</span>
          <strong
            style={{
              color: result.is_dag
                ? "var(--color-output)"
                : "var(--color-conditional)",
            }}
          >
            {result.is_dag ? "✓ Yes" : "✗ No"}
          </strong>
        </div>
        <button className="btn-submit" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};
