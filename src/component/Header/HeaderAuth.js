import "./HeaderAuth.scss";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import logo from "../../assets/logo.png";
import Language from "./Language";



const HeaderAuth = () => {
    return (
        <div className="header-auth-container">
            <div className="top-bar">

                <div className="left-top-bar">
                    <img
                        src={logo}
                        alt="logo"
                    />
                    <div className="phone-contact">
                        <IoMdPhonePortrait />
                        +84 28 38227818
                    </div>
                    <div className="email-contact">
                        <MdEmail />
                        sales@gatewayviet.com.vn
                    </div>
                    <div className="location">
                        <MdLocationOn />
                        40 Nguyen Van Giai Street, Da Kao Ward, District 1, HCMC, Vietnam
                    </div>
                </div>

                <div className="right-top-bar">
                    {/* <Language /> */}
                </div>



            </div>
        </div>
    )
}

export default HeaderAuth;