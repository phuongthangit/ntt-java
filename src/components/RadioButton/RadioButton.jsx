export default function RadioButtonComponent(props) {

    const { label, required, name, value, defaultChecked } = props;
    /**
     * render template
     */
    return (
        <div className="form-group__radio">
            <input
                className="form-check-input"
                type="radio"
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