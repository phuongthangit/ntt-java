import { useForm } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

export default function TextAreaComponent(props) {

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
            <div className="form-group">
                <div className="form-label">
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
                <FormFeedback className="d-block" style={{ paddingLeft: '170px' }}>{errors[name].message}</FormFeedback>
            )}
        </>
    )
}

TextAreaComponent.defaultProps = {
    required: false,
    maxLength: 9999999,
    minLength: 0,
    rows: 5
};