import { BaseNode } from "./baseNode";

export const UppercaseNode = ({ id, data }) => {
  return (
    <BaseNode
      label="Uppercase"
      type="uppercase"
      handles={[
        { type: "target", position: "left", id: `${id}-input` },
        { type: "source", position: "right", id: `${id}-output` },
      ]}
    >
      <div>
        <span>Converts input text to uppercase.</span>
      </div>
    </BaseNode>
  );
};
