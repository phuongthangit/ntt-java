export default function InputFlexComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, type } = props;
    /**
     * render template
     */
    return (
        <div className="form-group form-inline">
            <div className="form-label form-title">
                <label>{label}</label>
                {
                    required &&
                    <span className="required ml-3">
                        必須
                    </span>
                }
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