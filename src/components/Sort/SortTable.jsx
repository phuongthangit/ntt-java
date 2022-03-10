import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { activeIcon } from "../../utils/helper";
export default function SortTable(props) {
    const { name, sort, parameter } = props;
    /**
     * render template
     */
    return (
        <>
            <AiFillCaretDown className={`down ${activeIcon(parameter, name, 'desc') ? 'active' : ''}`} onClick={() => sort(name, 'desc')} />
            <AiFillCaretUp className={`up ${activeIcon(parameter, name, 'asc') ? 'active' : ''}`} onClick={() => sort(name, 'asc')} />
        </>
    )
}