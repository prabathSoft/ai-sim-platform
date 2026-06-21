import { useEffect, useState } from "react";
import { fetchAlgorithms } from "../../services/api/algorithms";
import { useAlgorithmStore } from "../../stores/algorithmStore";

export default function AlgorithmSelector() {
  const [algorithms, setAlgorithms] = useState([]);
  const selected = useAlgorithmStore((s) => s.selected);
  const setSelected = useAlgorithmStore((s) => s.setSelected);

  useEffect(() => {
    fetchAlgorithms().then((res) => setAlgorithms(res.algorithms));
  }, []);

  return (
    <div>
      <h2>Select Algorithm</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {algorithms.map((algo: any) => (
          <li key={algo.id} style={{ marginBottom: "10px" }}>
            <button
              onClick={() => setSelected(algo.id)}
              style={{
                padding: "10px",
                width: "100%",
                borderRadius: "6px",
                border: selected === algo.id ? "2px solid #4f46e5" : "1px solid #ccc",
                background: selected === algo.id ? "#eef2ff" : "white",
                cursor: "pointer"
              }}
            >
              {algo.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
