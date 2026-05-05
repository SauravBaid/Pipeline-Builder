import { Position, Handle } from "reactflow";
// To assign handle positions based on string
const POSITION_MAP = {
  left: Position.Left,
  right: Position.Right,
  top: Position.Top,
  bottom: Position.Bottom,
};

// To assign accent color based on node type
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

export const BaseNode = ({
  label,
  handles = [],
  children,
  className = "",
  accentColor,
  type,
  style = {},
}) => {
  const accent = accentColor || TYPE_ACCENTS[type] || "var(--color-text)";
  return (
    <div
      className={`base-node ${className}`}
      style={{ "--accent": accent, ...style }}
    >
      {/* Node header */}
      <div className="base-node__header">
        <span className="base-node__dot" style={{ background: accent }} />
        <span className="base-node__label">{label}</span>
      </div>
      {/* Node body */}
      <div className="base-node__body">{children}</div>

      {/* Node handles */}
      {handles.map((h, idx) => {
        // Warning for missing handle id to avoid React Flow issues
        if (!h.id)
          console.warn(
            `BaseNode "${label}": handle missing id at index ${idx}`,
          );
        return (
          <Handle
            key={h.id ?? idx}
            type={h.type}
            position={POSITION_MAP[h.position?.toLowerCase()] ?? Position.Left}
            id={h.id}
            style={h.style}
          />
        );
      })}
    </div>
  );
};
