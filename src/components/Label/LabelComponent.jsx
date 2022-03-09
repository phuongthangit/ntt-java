export default function LabelComponent(props) {

    const { label, required } = props;
    /**
     * render template
     */
    return (
        <div className="form-label form-title">
            <label>{label}</label>
            {
                required &&
                <span className="required ml-3">
                    必須
                </span>
            }
        </div>
    )
}
LabelComponent.defaultProps = {
    required: false,
};