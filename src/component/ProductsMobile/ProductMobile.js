

import "./ProductMobile.scss"
import BookingMobile from "./BookingMobile";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom";
import FooterMobile from "../Footer/FooterMoblie";





const ProductMobile = () => {
    return (
        <div className="products-container">
            <div className="main-container">
                <Breadcrumb className="breadcrumb">
                    <NavLink
                        to="/"
                        className="breadcrumb-item"
                    >
                        GATEWAY
                    </NavLink>

                    <NavLink
                        className="breadcrumb-item"
                        exact activeClassName="active"
                    >
                        Products - Sản phẩm
                    </NavLink>
                </Breadcrumb>
                <BookingMobile />
            </div>
            <div className="footer-container">
                <FooterMobile />
            </div>
        </div>
    )
}

export default ProductMobile;

