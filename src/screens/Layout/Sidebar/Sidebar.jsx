import logo from "../../assets/img/logo.png";
export default function Sidebar(props) {
    /**
     * render template
     */
    return (
        <div id="sidebar" className="active">
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