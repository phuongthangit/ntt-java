import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';
import Message from '../../message/message';
import { replaceString } from '../../utils/helper';

export default function TextAreaFlexComponent(props) {

    const { label, placeholder, maxLength, minLength, required, name, rows } = props;

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
                <FormFeedback className="d-block" style={{ paddingLeft: '200px' }}>{errors[name].message}</FormFeedback>
            )}
        </>
    )
}

TextAreaFlexComponent.defaultProps = {
    required: false,
    maxLength: 9999999,
    minLength: 0,
    rows: 5
};