import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
export default function Sidebar(props) {

    const [activeSidebar, setActiveSidebar] = useState(true);

    /**
     * handleResize
     */
    const handleResize = () => {
        if (window.innerWidth >= 1280) {
            setActiveSidebar(true);
        }else{
            setActiveSidebar(false);
        }
    }

    /**
     * init size
     */
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", () => {
            handleResize();
        });
        return () => {
            window.removeEventListener("resize", function () { });
        }
    }, []);
    /**
     * render template
     */
    return (
        <div id="sidebar" className={`${activeSidebar ? 'active' : ''}`}>
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-center">
                        <div className="logo">
                            <a href="#">
                                <img src={logo} alt="Logo" srcSet="" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">メニュー</li>
                        <li className="sidebar-item  ">
                            <a href="#" className="sidebar-link">
                                <span>トップページ</span>
                            </a>
                        </li>
                        <li className="sidebar-item  has-sub active">
                            <a href="#" className="sidebar-link">
                                <span>リストページ</span>
                            </a>
                            <ul className="submenu ">
                                <li className="submenu-item ">
                                    <a href="#">リストページ 1</a>
                                </li>
                                <li className="submenu-item ">
                                    <a href="#">リストページ 2</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="sidebar-toggler btn x">
                    <i data-feather="x" />
                </button>
            </div>
        </div>
    )
}