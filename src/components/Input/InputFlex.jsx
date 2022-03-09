import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

export default function InputFlexComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, type } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, setValue, formState: { errors } } = methods;

    /**
     * trim string
     * @param {*} name 
     * @param {*} value 
     */
    const _onBlur = (name, value) => {
        setValue(name, value.trim(), { shouldValidate: true });
    }

    /**
     * render template
     */
    return (
        <>
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
                    placeholder={placeholder}
                    {...register(
                        name,
                        {
                            required: {
                                value: required,
                                message: "Bắt buộc",
                            },
                            maxLength: {
                                value: maxLength,
                                message: "Max",
                            },
                            minLength: {
                                value: minLength,
                                message: "min",
                            },
                        }
                    )}
                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                />
            </div>
            {errors[name] && (
                <FormFeedback style={{paddingLeft:'170px'}} className="d-block">{errors[name].message}</FormFeedback>
            )}
        </>
    )
}

InputFlexComponent.defaultProps = {
    required: false,
    type: "text",
    maxLength: 9999999,
    minLength: 0
};