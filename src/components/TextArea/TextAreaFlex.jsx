export default function TextAreaFlexComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, rows } = props;
    /**
     * render template
     */
    return (
        <div className="form-group form-inline">
            <div className="form-label form-title">
                <label>{label}</label>
                {
                    required && <span className="required ml-3">
                        必須
                    </span>
                }
            </div>
            <textarea
                type="text"
                className="form-control"
                name={name}
                rows={rows}
                placeholder={placeholder}
                maxLength={maxLength}
                minLength={minLength}
            />
        </div>
    )
}