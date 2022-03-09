//packet
import { Link } from "react-router-dom";

//icon
import logo from "../../assets/img/logo.png";

//constant
import LinkName from './../../../constants/linkName';
import { useEffect } from 'react';

export default function Sidebar(props) {

    const { activeSidebar } = props;

    let currentPath = window.location.pathname;

    /**
     * render template
     */
    return (
        <div id="sidebar" className={`${activeSidebar ? 'active' : ''}`}>
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-center">
                        <div className="logo">
                            <Link to={LinkName.FORM_REGISTER}>
                                <img src={logo} alt="Logo" srcSet="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className={`sidebar-item ${currentPath === LinkName.LIST_USER ? 'active' : ''}`}>
                            <Link to={LinkName.LIST_USER} className="sidebar-link">
                                <span>会員管理</span>
                            </Link>
                        </li>
                        <li className={`sidebar-item ${currentPath === LinkName.FORM_REGISTER ? 'active' : ''}`}>
                            <Link to={LinkName.FORM_REGISTER} className="sidebar-link">
                                <span>会員登録</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}