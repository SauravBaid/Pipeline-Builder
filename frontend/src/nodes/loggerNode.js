import { useState } from "react";
import { BaseNode } from "./baseNode";

export const LoggerNode = ({ id, data }) => {
  const [log, setLog] = useState(data?.log || "");
  return (
    <BaseNode
      label="Logger"
      type="logger"
      handles={[{ type: "target", position: "left", id: `${id}-input` }]}
    >
      <div>
        <label>
          Log:
          <input
            type="text"
            value={log}
            onChange={(e) => setLog(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
