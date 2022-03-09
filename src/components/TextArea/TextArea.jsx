export default function TextAreaComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, rows } = props;
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
        </div>
    )
}