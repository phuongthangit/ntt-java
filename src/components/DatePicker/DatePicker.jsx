import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import { replaceString } from '../../utils/helper';
import Message from '../../message/message';

export default function DatePickerComponent(props) {

    const { label, name, placeholder, required } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { control } = methods;
    return (
        <>
            <Controller
                control={control}
                name={name}
                render={({ field: {
                    onChange,
                    onBlur,
                    value
                } }) => (
                    <DatePicker
                        required = {required}
                        dateFormat="dd/MM/yyyy"
                        className="form-control"
                        placeholderText={placeholder}
                        name={name}
                        autoComplete="off"
                        selected={value ? moment(value).toDate() : value}
                        onChange={onChange}
                        onBlur={onBlur}
                    />
                )}
                rules={{
                    validate: (value) => {
                        if (required && !value) {
                            return replaceString(Message.TEXT.REQUIRED, [label]);
                        }
                    },
                }}
            />
        </>
    )
}