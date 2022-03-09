import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

export default function InputComponent(props) {

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register, setValue, formState: { errors } } = methods;

    const { label, placeholder, maxLength, minLength, required, name, type } = props;

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
                <div className="form-label">
                    <label>{label}</label>
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
                                message: "hihi",
                            },
                            maxLength: {
                                value: maxLength,
                                // message: replaceString(Message.TEXT.MAX_LENGTH, ["Tiêu đề", Validation.TEXT.MAX_LENGTH]),
                            },
                            minLength: {
                                value: minLength,
                                // message: replaceString(Message.TEXT.MIN_LENGTH, ["Tiêu đề", Validation.TEXT.MIN_LENGTH]),
                            },
                        }
                    )}
                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                />
            </div>
            {errors[name] && (
                <FormFeedback className="d-block" style={{paddingLeft:'45px'}}>{errors[name].message}</FormFeedback>
            )}
        </>
    )
}
InputComponent.defaultProps = {
    require: false,
    type: "text",
    maxLength: 9999999,
    minLength: 0
};
