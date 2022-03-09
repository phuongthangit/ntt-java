//packet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import { useEffect, useState } from 'react';

export default function Layout() {

    const [activeSidebar, setActiveSidebar] = useState(true);

    /**
     * handleResize
     */
    const handleResize = () => {
        if (window.innerWidth >= 1280) {
            setActiveSidebar(true);
        } else {
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

    return (
        <div id="app">
            <Sidebar activeSidebar = {activeSidebar} />
            <div id="main" className='layout-navbar'>
                <Header setActiveSidebar ={setActiveSidebar}  activeSidebar = {activeSidebar}/>
                <div id="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}