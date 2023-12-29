export default function SelectionBox(props) {
    const { onChange, name, label } = props;
    return (
        <div className="selection-box">
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={(e) => onChange(e)}>
                {props.children}
            </select>
        </div>
    )

}