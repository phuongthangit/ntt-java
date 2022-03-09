export default function SelectBoxComponent(props) {
    const { label, data, disabled, required, name } = props;
    return (
        <select
            className="form-control"
            name={name}
            disabled={disabled}
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