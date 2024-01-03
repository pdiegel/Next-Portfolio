export default function SelectionBox({ onChange, name, label, value, error, children }) {
    return (
        <div className="selection-box">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={(e) => onChange(e)} value={value}>
                {children}
            </select>
            {error && <p className="error">{error}</p>}
        </div>
    )

}