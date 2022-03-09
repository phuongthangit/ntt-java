export default function InputComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, type } = props;
    /**
     * render template
     */
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
                <input
                    type={type}
                    className="form-control"
                    name={name}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    minLength={minLength}
                />
            </div>
        </div>
    )
}