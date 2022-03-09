export default function InputComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, type } = props;
    /**
     * render template
     */
    return (
        <div className="form-group form-inline">
            <div className="form-label">
                <label>{label}</label>
            </div>
            <input
                required={required}
                type={type}
                className="form-control"
                name={name}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
            />
        </div>
    )
}