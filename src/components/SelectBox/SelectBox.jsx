import { useForm } from 'react-hook-form';

export default function SelectBoxComponent(props) {
    const { data, disabled, name, unit } = props;

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { register } = methods;

    /**
     * render template
     */
    return (
        <>
        <select
            className="form-control form-select"
            disabled={disabled}
            {...register(
                name,
                
            )}
        >
            {
                data?.length > 0 && data.map((item,idx) =>{
                    return(
                        <option key={idx} value={idx}>{item}</option>
                    )
                })
            }
        </select>
        {
            unit && <span className='unit' style={{fontWeight:'700'}}>{unit}</span>
        }
        </>
    )
}

SelectBoxComponent.defaultProps = {
    disabled: false
};