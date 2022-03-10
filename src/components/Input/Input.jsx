import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import Message from '../../message/message';
import { replaceString } from '../../utils/helper';

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
                {
                    label &&
                    <div className="form-label">
                        <label>{label}</label>
                    </div>
                }
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
                                message: replaceString(Message.TEXT.REQUIRED, [label]),
                            },
                            maxLength: {
                                value: maxLength,
                                message: replaceString(Message.TEXT.MAX_LENGTH, [label, maxLength]),
                            },
                            minLength: {
                                value: minLength,
                                message: replaceString(Message.TEXT.MIN_LENGTH, [label, minLength]),
                            },
                        }
                    )}
                    onBlur={(e) => { _onBlur(e.currentTarget.name, e.currentTarget.value) }}
                />
            </div>
            {errors[name] && (
                <FormFeedback className="d-block" style={{ paddingLeft: '40px' }}>{errors[name].message}</FormFeedback>
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
