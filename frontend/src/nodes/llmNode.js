import { BaseNode } from "./baseNode";

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      label="LLM"
      type="llm"
      handles={[
        {
          type: "target",
          position: "left",
          id: `${id}-system`,
          style: { top: `${100 / 3}%` },
        },
        {
          type: "target",
          position: "left",
          id: `${id}-prompt`,
          style: { top: `${200 / 3}%` },
        },
        {
          type: "source",
          position: "right",
          id: `${id}-response`,
        },
      ]}
    >
      <div>
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
};
