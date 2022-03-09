//packet
import { Link } from "react-router-dom";

//icon
import logo from "../../assets/img/logo.png";

export default function Sidebar(props) {

    const { activeSidebar } = props;
    /**
     * render template
     */
    return (
        <div id="sidebar" className={`${activeSidebar ? 'active' : ''}`}>
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-center">
                        <div className="logo">
                            <Link to="/">
                                <img src={logo} alt="Logo" srcSet="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-item  ">
                            <Link to="#" className="sidebar-link">
                                <span>会員管理</span>
                            </Link>
                        </li>
                        <li className="sidebar-item active">
                            <Link to="#" className="sidebar-link">
                                <span>会員登録</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}