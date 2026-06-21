import { useState } from "react";
import { generateDataset } from "../../services/api/dataset";
import { useDatasetStore } from "../../stores/datasetStore";
import Button from "../ui/Button";

export default function DatasetGenerator() {
  const [count, setCount] = useState(300);
  const [type, setType] = useState("blobs");
  const setPoints = useDatasetStore((s) => s.setPoints);

  async function handleGenerate() {
    const res = await generateDataset({ count, type });
    setPoints(res.points);
  }

  return (
    <div>
      <h2>Generate Dataset</h2>

      <label>Dataset Type</label>
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      >
        <option value="blobs">Blobs</option>
        <option value="circle">Circle</option>
      </select>

      <label>Number of Points</label>
      <input
        type="number"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <Button onClick={handleGenerate}>Generate</Button>
    </div>
  );
}
