// draggableNode.js

const TYPE_ACCENTS = {
  customInput: "var(--color-input)",
  llm: "var(--color-llm)",
  customOutput: "var(--color-output)",
  text: "var(--color-text)",
  knowledgeBase: "var(--color-api)",
  condition: "var(--color-conditional)",
  timer: "var(--color-transform)",
  uppercase: "var(--color-filter)",
  logger: "var(--color-merge)",
};

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      style={{
        cursor: "grab",
        minWidth: 80,
        height: 44,
        display: "flex",
        alignItems: "center",
        borderRadius: 8,
        background: "var(--bg-node-header)",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: 10,
        padding: "0 12px",
        border: `2px solid ${TYPE_ACCENTS[type] || "var(--color-text)"}`,
        color: TYPE_ACCENTS[type] || "var(--color-text)",
        fontWeight: 600,
        fontSize: 14,
        boxShadow: "0 2px 8px 0 rgba(0,0,0,0.10)",
        transition: "border 0.15s",
      }}
      draggable
    >
      <span
        style={{
          width: 12,
          height: 12,
          borderRadius: 6,
          background: TYPE_ACCENTS[type] || "var(--color-text)",
          display: "inline-block",
        }}
      />
      <span>{label}</span>
    </div>
  );
};
