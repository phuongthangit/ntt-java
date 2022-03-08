//packet
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

export default function Layout() {
    return (
        <div id="app">
            <Sidebar />
            <div id="main" className='layout-navbar'>
                <Header />
                <div id="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}