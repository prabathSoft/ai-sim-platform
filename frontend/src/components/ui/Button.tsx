type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export default function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${variant}`}
      style={{
        padding: "10px 16px",
        borderRadius: "6px",
        border: "none",
        cursor: "pointer",
        background: variant === "primary" ? "#4f46e5" : "#e5e7eb",
        color: variant === "primary" ? "white" : "black",
        fontWeight: 600
      }}
    >
      {children}
    </button>
  );
}

