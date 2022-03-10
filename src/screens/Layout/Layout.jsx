import { useEffect, useState } from 'react';

//packet
import { Outlet } from 'react-router-dom';

//component
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

export default function Layout() {

    /**
     * define state
     */
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