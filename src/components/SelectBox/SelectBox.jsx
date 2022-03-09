export default function SelectBoxComponent(props) {
    const { label, data, disabled, required, name } = props;
    return (
        <div className="form-group">
            <div className="form-label">
                <label>{label}:</label>
                {
                    required && <span className="required ml-3">
                        *
                    </span>
                }
            </div>
            <div className="form-group__control">
                <select
                    className="form-control"
                    name={name}
                    disabled={disabled}
                >
                    <option value="0">Tokyo:</option>
                    <option value="1">Yokohama:</option>
                    <option value="2">Osaka:</option>
                </select>
            </div>
        </div>
    )
}