import React from "react";

export default function SelectionBox({
  onChange,
  name,
  label,
  value,
  error,
  children,
}: {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name: string;
  label: string;
  value: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={(e) => onChange(e)} value={value}>
        {children}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
