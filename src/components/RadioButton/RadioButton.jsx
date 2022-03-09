import { useForm } from 'react-hook-form';
import Message from '../../message/message';
import { replaceString } from '../../utils/helper';

export default function RadioButtonComponent(props) {

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
                type="radio"
                value={value}
                defaultChecked={defaultChecked}
                id={label}
                required = {required}
                {...register(
                    name,
                    {
                        required: {
                            value: required,
                            message: replaceString(Message.TEXT.REQUIRED, [label]),
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
RadioButtonComponent.defaultProps = {
    required: false,
    defaultChecked: false
};

