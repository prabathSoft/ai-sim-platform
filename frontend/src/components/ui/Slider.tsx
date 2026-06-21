type SliderProps = {
  label: string;
  min: number;
  max: number;
  step?: number;
  value: number;
  onChange: (v: number) => void;
};

export default function Slider({ label, min, max, step = 1, value, onChange }: SliderProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontWeight: 600 }}>{label}: {value}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "100%" }}
      />
    </div>
  );
}
