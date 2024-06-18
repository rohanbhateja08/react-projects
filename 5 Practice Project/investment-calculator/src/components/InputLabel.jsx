export default function InputLabel({ label, onSelect, attr, investmentValue }) {
    return (
        <label>
            {label}
            <input type="number" onChange={onSelect} attr={attr} value={investmentValue} />
        </label>
    );
}