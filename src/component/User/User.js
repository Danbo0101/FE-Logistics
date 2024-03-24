import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./User.scss"




const User = () => {



    return (
        <div className="user-home-page">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <Outlet />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default User;

