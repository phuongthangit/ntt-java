export default function LabelComponent(props) {

    const { label, required } = props;
    /**
     * render template
     */
    return (
        <div className="form-label">
            <label>{label}:</label>
            {
                required &&
                <span className="required ml-3">
                    *
                </span>
            }
        </div>
    )
}