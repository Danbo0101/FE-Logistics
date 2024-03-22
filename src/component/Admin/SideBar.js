import { Link, NavLink } from 'react-router-dom';
import 'react-pro-sidebar/dist/css/styles.css';
import logo from "../../assets/logo.png"
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FaUser,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaTachometerAlt,
    FaGem,
    FaList,
    FaRegLaughWink,
    FaHeart
} from 'react-icons/fa';
import sidebarBg from '../../assets/sideBar.jpeg';

const SideBar = ({
    image,
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange
}) => {
    return (
        <ProSidebar
            image={sidebarBg}
            collapsed={collapsed}
            toggled={toggled}
            onToggle={handleToggleSidebar}
            breakPoint="md"
        >
            {/* Header */}
            <SidebarHeader>
                <Menu iconShape="circle">
                    {collapsed ? (
                        <MenuItem
                            icon={<img src={logo} alt="Logo" />}
                        // onClick={handleCollapsedChange}
                        ></MenuItem>
                    ) : (
                        <MenuItem
                            icon={<img src={logo} alt="Logo" />}
                        // onClick={handleCollapsedChange}
                        >
                            <div
                                style={{
                                    padding: '9px',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                    fontSize: 15,
                                    letterSpacing: '1px'
                                }}
                            >
                                GateWay
                            </div>
                        </MenuItem>
                    )}
                </Menu>
            </SidebarHeader>
            {/* Content */}
            <SidebarContent>
                <Menu iconShape="circle">
                    <MenuItem
                        icon={<FaTachometerAlt />}
                    // suffix={<span className="badge red">NEW</span>}
                    >
                        Dashboard
                        <NavLink to="/admin" />
                    </MenuItem>
                    {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
                    <MenuItem icon={<FaGem />}>
                        Manage Product <Link to="manage-product" />
                    </MenuItem>
                    {/* <SubMenu
                        // suffix={<span className="badge yellow">3</span>}
                        title={'With Suffix'}
                        icon={<FaRegLaughWink />}
                    >
                        <MenuItem>Submenu 1</MenuItem>
                        <MenuItem>Submenu 2</MenuItem>
                        <MenuItem>Submenu 3</MenuItem>
                    </SubMenu> */}
                    {/* <SubMenu
                        // prefix={<span className="badge gray">3</span>}
                        title={'With Prefix'}
                        icon={<FaHeart />}
                    >
                        <MenuItem>Submenu 1</MenuItem>
                        <MenuItem>Submenu 2</MenuItem>
                        <MenuItem>Submenu 3</MenuItem>
                    </SubMenu>
                    <SubMenu title={'Multi Level'} icon={<FaList />}>
                        <MenuItem>Submenu 1 </MenuItem>
                        <MenuItem>Submenu 2 </MenuItem>
                        <SubMenu title={'Submenu 3'}>
                            <MenuItem>Submenu 3.1 </MenuItem>
                            <MenuItem>Submenu 3.2 </MenuItem>
                        </SubMenu>
                    </SubMenu> */}
                </Menu>
            </SidebarContent>
            {/* Footer */}
            <SidebarFooter style={{ textAlign: 'center' }}>
                <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
                    <Link
                        className="sidebar-btn"
                        style={{ cursor: 'pointer' }}
                        to="/profile"
                    >
                        <FaUser />
                        <span>My Account</span>
                    </Link>
                </div>
            </SidebarFooter>
        </ProSidebar>
    );
};

export default SideBar;
