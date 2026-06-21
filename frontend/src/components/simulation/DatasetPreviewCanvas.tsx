import { useEffect, useRef } from "react";
import { useDatasetStore } from "../../stores/datasetStore";

export default function DatasetPreviewCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useDatasetStore((s) => s.points);

  useEffect(() => {
    if (!canvasRef.current || !points) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, 400, 400);

    points.forEach((p) => {
      ctx.fillStyle = p.label === 0 ? "#2563eb" : "#dc2626";
      ctx.beginPath();
      ctx.arc(p.x * 400, p.y * 400, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [points]);

  return (
    <div>
      <h3>Dataset Preview</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "1px solid #ccc", borderRadius: "6px" }}
      />
    </div>
  );
}
