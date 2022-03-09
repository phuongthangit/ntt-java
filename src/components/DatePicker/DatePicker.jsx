import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

export default function DatePickerComponent(props) {

    const { name } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { control } = methods;
    return (
        <Controller
            control={control}
            name={name}
            render={({ field: {
                onChange,
                onBlur,
                value
            } }) => (
                <DatePicker
                    dateFormat="dd/MM/yyyy"
                    className="form-control"
                    name={name}
                    autoComplete="off"
                    selected={value ? moment(value).toDate() : value}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            )}
        />
    )
}