import SideBar from "./SideBar";
import { FaBars } from 'react-icons/fa';
import { Outlet, useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import './Admin.scss';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useEffect, useState } from "react";



const Admin = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);
    const [titlePage, setTitlePage] = useState("");

    const location = useLocation();

    useEffect(() => {
        handleTitlePage();
    }, [location])

    const handleTitlePage = () => {
        if (location.pathname === "/admin") {
            setTitlePage("DashBoard");
        }
        if (location.pathname === "/admin/manage-product") {
            setTitlePage("Manage Product");
        }
    }



    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };
    return (
        <div className="admin-container">
            <div className="admin-sidebar">
                <SideBar
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                    handleCollapsedChange={handleCollapsedChange}
                />
            </div>
            <div className="admin-content">
                <div className="admin-header">
                    <div className="left-content" >
                        <span onClick={() => handleCollapsedChange()}>
                            <FaBars />
                        </span>
                        <div className="title-page">
                            {titlePage}
                        </div>

                    </div>
                    <div className="right-content">
                        <NavDropdown title="Setting" id="basic-nav-dropdown">
                            <NavDropdown.Item >Profile</NavDropdown.Item>
                            <NavDropdown.Item >Log out</NavDropdown.Item>
                        </NavDropdown>
                    </div>


                </div>

                <div className="admin-main">
                    <PerfectScrollbar>
                        <Outlet />
                    </PerfectScrollbar>
                </div>

            </div>
        </div>
    )
}

export default Admin;