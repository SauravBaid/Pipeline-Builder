import { useState } from "react";
import { BaseNode } from "./baseNode";

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || "x > 0");
  return (
    <BaseNode
      label="Condition"
      type="condition"
      handles={[
        { type: "target", position: "left", id: `${id}-input` },
        {
          type: "source",
          position: "right",
          id: `${id}-true`,
          style: { top: "30%" },
        },
        {
          type: "source",
          position: "right",
          id: `${id}-false`,
          style: { top: "70%" },
        },
      ]}
    >
      <div>
        <label>
          Condition:
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
