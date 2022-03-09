export default function CheckBoxComponent(props) {

    const { label, required, name, value, defaultChecked } = props;
    /**
     * render template
     */
    return (
        <div className="form-group__radio">
            <input
                className="form-check-input"
                type="checkbox"
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                id={label}
                required = {required}
            />
            <label className="form-check-label" htmlFor={label}>
                {label}
            </label>
        </div>
    )
}