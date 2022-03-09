import user from "../../assets/img/user.png";
import { FaAlignJustify } from "react-icons/fa";

export default function Header(props) {

    const { setActiveSidebar, activeSidebar } = props;

    /**
     * active sidebar
     */
    const _onClick = () => {
        setActiveSidebar(!activeSidebar)
    }
    /**
     * render template
     */
    return (
        <header className="mb-3">
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <FaAlignJustify className="icon-justify" onClick={_onClick} />
                    <div className="collapse navbar-collapse flex justify-content-end">
                        <div className="dropdown">
                            <div className="user-menu d-flex">
                                <div className="user-name text-end me-3 d-flex align-items-center">
                                    <h4 className="mb-0">山田　太郎</h4>
                                </div>
                                <div className="user-img d-flex align-items-center">
                                    <div className="avatar avatar-md">
                                        <img src={user} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}