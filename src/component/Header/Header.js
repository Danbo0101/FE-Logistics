import "./Header.scss";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import imgHomePage from "../../assets/homepage-1.jpg";
import imgHomePage1 from "../../assets/homepage-2.jpeg";
import imgHomePage2 from "../../assets/homepage-3.jpeg";
import imgHomePage3 from "../../assets/homepage-4.jpeg";
import logo from "../../assets/logo.png";



const Header = (props) => {

    const navigate = useNavigate();
    const location = useLocation();

    const { isHomePage, title } = props;
    const [isAuth, setIsAuth] = useState(false);



    // console.log(title);

    const [currentImage, setCurrentImage] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(0);


    const images = [
        imgHomePage,
        imgHomePage1,
        imgHomePage2,
        imgHomePage3
    ]

    useEffect(() => {
        setImageOpacity(0);
    }, [currentImage]);

    useEffect(() => {
        setTimeout(() => {
            setImageOpacity(1);
        }, 500);

        return () => clearTimeout();
    }, [imageOpacity]);

    useEffect(() => {
        if (location.pathname === "/user") setIsAuth(true);
    }, [])




    const handleClickBtnHomePage = (type) => {
        if (type === "ROAD") {
            setCurrentImage(0);
            return;
        }
        if (type === "AIR") {
            setCurrentImage(1);
            return;
        }
        if (type === "SEA") {
            setCurrentImage(2);
            return;
        }
        if (type === "WAREHOUSE") {
            setCurrentImage(3);
            return;
        }

    }

    return (
        <div className="header-container">
            <div className="top-bar">

                <div className="left-top-bar">
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

                {isAuth ?
                    <>
                    </>
                    :
                    <>

                        <div className="right-top-bar">
                            <button
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                            <button>
                                Sign In
                            </button>
                        </div>
                    </>
                }




            </div>

            {isHomePage ?
                <div className="overview">
                    <img
                        src={images[currentImage]}
                        style={{ opacity: imageOpacity, transition: 'opacity 1s' }}
                    />
                    <div className="header-home-container">
                        <div
                            className="logo"
                            onClick={() => navigate("/")}
                        >
                            <img src={logo} />
                        </div>
                        <div className="btn">
                            <span onClick={() => navigate("/")}>Home</span>
                            <span onClick={() => navigate("/about-us")}>About Us</span>
                            <span onClick={() => navigate("/service")}>Service</span>
                            <span onClick={() => navigate("/gallery")}>Gallery</span>
                            <span onClick={() => navigate("/new")}>News</span>
                            <span onClick={() => navigate("/contact")}>Contact</span>
                        </div>
                    </div>
                    <div className="title">
                        <hr className="custom-hr" />
                        <div className="title-main">
                            TRANSATLANTIC DELIVERY
                        </div>
                        <div className="title-sub">
                            Assuring the compliant handling of temperature sensitive healthcare products in today's complex supply chain is one of the foremost challenges facing
                        </div>

                    </div>
                    <div className="slide-nav">

                        <span
                            className="name"
                            onClick={() => handleClickBtnHomePage("ROAD")}
                        >
                            Road Freight
                        </span>
                        <span
                            className="name"
                            onClick={() => handleClickBtnHomePage("AIR")}
                        >
                            Air Freight
                        </span>
                        <span
                            className="name"
                            onClick={() => handleClickBtnHomePage("SEA")}
                        >
                            Sea Freight
                        </span>
                        <span
                            className="name"
                            onClick={() => handleClickBtnHomePage("WAREHOUSE")}
                        >
                            WareHousing
                        </span>
                    </div>
                </div>
                :
                <div className="header-sub-container">
                    <div className="nav-bar-sub">
                        <div
                            className="logo"
                            onClick={() => navigate("/")}
                        >
                            <img src={logo} />
                        </div>
                        <div className="btn">
                            <span onClick={() => navigate("/")}>Home</span>
                            <span onClick={() => navigate("/about-us")}>About Us</span>
                            <span onClick={() => navigate("/service")}>Service</span>
                            <span onClick={() => navigate("/gallery")}>Gallery</span>
                            <span onClick={() => navigate("/new")}>News</span>
                            <span onClick={() => navigate("/contact")}>Contact</span>
                        </div>
                    </div>
                    <div className="sub-title">
                        {title}
                    </div>


                </div>
            }




        </div>
    )
}

export default Header;