import logo from "../../assets/img/beetech.png";
import { FaAlignJustify } from "react-icons/fa";

export default function Header(props) {

    const { setActiveSidebar, activeSidebar } = props;
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
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse flex justify-content-between">
                        <nav aria-label="breadcrumb mt-3">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <span className="breadcrumb-hover">
                                        メニュー
                                    </span>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    応募者登録
                                </li>
                            </ol>
                        </nav>
                        <div className="dropdown">
                            <div className="user-menu d-flex">
                                <div className="user-name text-end me-3 d-flex align-items-center">
                                    <h4 className="mb-0">Beetech Media Company</h4>
                                </div>
                                <div className="user-img d-flex align-items-center">
                                    <div className="avatar avatar-md">
                                        <img src={logo} />
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