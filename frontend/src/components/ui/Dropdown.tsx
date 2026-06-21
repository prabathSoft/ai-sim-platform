type DropdownProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
};

export default function Dropdown({ label, value, options, onChange }: DropdownProps) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <label style={{ fontWeight: 600 }}>{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          borderRadius: "6px",
          marginTop: "6px"
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}
