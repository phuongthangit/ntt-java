import { useForm } from 'react-hook-form';

export default function SelectBoxComponent(props) {
    const { label, data, disabled, required, name } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register } = methods;

    /**
     * render template
     */
    return (
        <select
            className="form-control form-select"
            disabled={disabled}
            {...register(
                name,
                
            )}
        >
            <option value="0">2022</option>
            <option value="1">2021</option>
            <option value="2">2019</option>
            <option value="0">2022</option>
            <option value="1">2021</option>
            <option value="2">2019</option>
            <option value="0">2022</option>
            <option value="1">2021</option>
            <option value="2">2019</option>
        </select>
    )
}