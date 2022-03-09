import { useForm } from 'react-hook-form';

export default function CheckBoxComponent(props) {

    const { label, required, name, value, defaultChecked } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register } = methods;

    /**
     * render template
     */
    return (
        <div className="form-group__radio">
            <input
                className="form-check-input"
                type="checkbox"
                value={value}
                defaultChecked={defaultChecked}
                id={label}
                required = {required}
                {...register(
                    name,
                    {
                        required: {
                            value: required,
                            message: "Bắt buộc",
                        }
                    }
                )}
            />
            <label className="form-check-label" htmlFor={label}>
                {label}
            </label>
        </div>
    )
}

CheckBoxComponent.defaultProps = {
    required: false,
    defaultChecked: false
};