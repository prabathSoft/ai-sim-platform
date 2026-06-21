import { useSimulationStore } from "../../stores/simulationStore";

export default function FeatureMapViewer() {
  const featureMaps = useSimulationStore((s) => s.featureMaps);

  if (!featureMaps || featureMaps.length === 0) {
    return <div>No feature maps yet. Start training.</div>;
  }

  return (
    <div>
      <h3>Feature Maps</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {featureMaps.map((map, i) => (
          <canvas
            key={i}
            width={64}
            height={64}
            ref={(canvas) => {
              if (!canvas) return;
              const ctx = canvas.getContext("2d");
              if (!ctx) return;

              const img = ctx.createImageData(64, 64);
              let idx = 0;

              for (let y = 0; y < 64; y++) {
                for (let x = 0; x < 64; x++) {
                  const v = map[y][x] * 255;
                  img.data[idx++] = v;
                  img.data[idx++] = v;
                  img.data[idx++] = v;
                  img.data[idx++] = 255;
                }
              }

              ctx.putImageData(img, 0, 0);
            }}
            style={{ border: "1px solid #ccc" }}
          />
        ))}
      </div>
    </div>
  );
}
