import { Line } from "react-chartjs-2";
import { useSimulationStore } from "../../stores/simulationStore";

export default function MetricsChart() {
  const loss = useSimulationStore((s) => s.loss);
  const accuracy = useSimulationStore((s) => s.accuracy);

  const data = {
    labels: loss.map((_, i) => i + 1),
    datasets: [
      {
        label: "Loss",
        data: loss,
        borderColor: "#dc2626",
        tension: 0.3
      },
      {
        label: "Accuracy",
        data: accuracy,
        borderColor: "#16a34a",
        tension: 0.3
      }
    ]
  };

  return (
    <div style={{ width: "500px", marginTop: "20px" }}>
      <h3>Training Metrics</h3>
      <Line data={data} />
    </div>
  );
}
