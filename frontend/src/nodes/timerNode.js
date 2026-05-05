import { useState } from "react";
import { BaseNode } from "./baseNode";

export const TimerNode = ({ id, data }) => {
  const [duration, setDuration] = useState(data?.duration || 5);
  return (
    <BaseNode
      label="Timer"
      type="timer"
      handles={[{ type: "source", position: "right", id: `${id}-done` }]}
    >
      <div>
        <label>
          Duration (s):
          <input
            type="number"
            min={1}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
        </label>
      </div>
    </BaseNode>
  );
};
