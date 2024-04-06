import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Product.scss"
import Booking from "./Booking"




const Product = () => {
    return (
        <div className="user-home-page">
            <div className="main-container">
                <Booking />
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Product;

