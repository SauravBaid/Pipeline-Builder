import { useState } from "react";
import { BaseNode } from "./baseNode";

export const KnowledgeBaseNode = ({ id, data }) => {
  const [file, setFile] = useState(data?.file || null);

  return (
    <BaseNode
      label="Knowledge Base"
      handles={[
        { type: "target", position: "left", id: `${id}-a` },
        {
          type: "target",
          position: "left",
          id: `${id}-b`,
          style: { top: "50%" },
        },
        { type: "source", position: "right", id: `${id}-result` },
      ]}
    >
      <div>
        <label>
          Upload a knowledge base
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            maxSize={5 * 1024 * 1024}
          />
        </label>
      </div>
    </BaseNode>
  );
};
