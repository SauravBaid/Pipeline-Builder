import { PipelineToolbar } from "./toolbar";
import { PipelineUI } from "./ui";
import { SubmitButton } from "./submit";

function App() {
  return (
    <div
      style={{
        background: "var(--bg-canvas)",
        minHeight: "100vh",
        color: "var(--text-primary)",
        fontFamily: "Inter, system-ui, sans-serif",
        letterSpacing: 0.01,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          minHeight: "100vh",
        }}
      >
        <PipelineToolbar />
        <div style={{ flex: 1, minWidth: 0 }}>
          <PipelineUI />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

export default App;
