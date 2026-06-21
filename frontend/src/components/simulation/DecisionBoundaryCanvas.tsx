import { useEffect, useRef } from "react";
import { useSimulationStore } from "../../stores/simulationStore";

export default function DecisionBoundaryCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const boundary = useSimulationStore((s) => s.boundary);

  useEffect(() => {
    if (!canvasRef.current || !boundary) return;

    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;

    const width = canvasRef.current.width;
    const height = canvasRef.current.height;

    const img = ctx.createImageData(width, height);
    let idx = 0;

    // boundary is a 2D grid of values between 0 and 1
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const v = boundary[y][x]; // prediction probability

        img.data[idx++] = v * 255;       // R
        img.data[idx++] = 100;           // G
        img.data[idx++] = (1 - v) * 255; // B
        img.data[idx++] = 255;           // A
      }
    }

    ctx.putImageData(img, 0, 0);
  }, [boundary]);

  return (
    <div>
      <h3>Decision Boundary</h3>
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        style={{ border: "1px solid #ccc", borderRadius: "6px" }}
      />
    </div>
  );
}
