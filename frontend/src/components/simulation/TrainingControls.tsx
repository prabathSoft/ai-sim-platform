import Button from "../ui/Button";
import { startSimulation, pauseSimulation, resumeSimulation, stepSimulation } from "../../services/api/simulation";
import { useSimulationStore } from "../../stores/simulationStore";
import { useAlgorithmStore } from "../../stores/algorithmStore";
import { useConfigStore } from "../../stores/configStore";
import { useDatasetStore } from "../../stores/datasetStore";

export default function TrainingControls() {
  const runId = useSimulationStore((s) => s.runId);
  const setRunId = useSimulationStore((s) => s.setRunId);
  const connectSocket = useSimulationStore((s) => s.connectSocket);

  const algorithm = useAlgorithmStore((s) => s.selected);
  const config = useConfigStore();
  const dataset = useDatasetStore((s) => s.points);

  async function handleStart() {
    if (!algorithm) return alert("Select an algorithm first");
    if (dataset.length === 0) return alert("Generate or upload a dataset first");

    const payload = {
      algorithm,
      config,
      dataset
    };

    const res = await startSimulation(payload);
    setRunId(res.run_id);
    connectSocket(res.run_id);
  }

  return (
    <div style={{ marginBottom: "20px" }}>
      {!runId && (
        <Button variant="primary" onClick={handleStart}>
          Start Simulation
        </Button>
      )}

      {runId && (
        <>
          <Button variant="secondary" onClick={() => pauseSimulation(runId)}>
            Pause
          </Button>
          <Button variant="secondary" onClick={() => resumeSimulation(runId)}>
            Resume
          </Button>
          <Button variant="secondary" onClick={() => stepSimulation(runId)}>
            Step
          </Button>
        </>
      )}
    </div>
  );
}
