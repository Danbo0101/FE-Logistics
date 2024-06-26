import "./Header.scss";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgHomePage from "../../assets/homepage-1.jpg";
import imgHomePage1 from "../../assets/homepage-2.jpeg";
import imgHomePage2 from "../../assets/homepage-3.jpeg";
import imgHomePage3 from "../../assets/homepage-4.jpeg";
import logo from "../../assets/logo.png";





const Header = (props) => {

    const navigate = useNavigate();

    const { isHomePage, title } = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [changeImage, setChangeImage] = useState(0);
    const [changeImage2, setChangeImage2] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    const images = [
        imgHomePage,
        imgHomePage1,
        imgHomePage2,
        imgHomePage3
    ];

    const startImageTransition = () => {
        const id = setInterval(() => {
            setChangeImage2((prevImage) => (prevImage + 1) % images.length);

        }, 5000);
        setIntervalId(id);
    };

    useEffect(() => {
        startImageTransition();

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    useEffect(() => {
        setImageOpacity(0); // Fade out the new image

        setTimeout(() => {
            setCurrentImage(changeImage2);
        }, 800);

        setTimeout(() => {
            setImageOpacity(1); // Fade in the new image
        }, 950);



    }, [changeImage2]);

    useEffect(() => {
        setImageOpacity(0); // Fade out the new image

        setTimeout(() => {
            setCurrentImage(changeImage);
        }, 800);

        setTimeout(() => {
            setImageOpacity(1); // Fade in the new image
        }, 1100);

        clearInterval(intervalId);

    }, [changeImage]);

    const handleClickBtnHomePage = (type) => {

        if (type === "ROAD") {
            setChangeImage(0);
            // clearTimeout(intervalId);
            //setImageOpacity(1);
            return;
        }
        if (type === "AIR") {
            setChangeImage(1);
            //setImageOpacity(1);
            return;
        }
        if (type === "SEA") {
            setChangeImage(2);
            //setImageOpacity(1);
            return;
        }
        if (type === "WAREHOUSE") {
            setChangeImage(3);
            //setImageOpacity(1);
            return;
        }

    }

    return (
        <div className="header-container">
            <div className="top-bar">
                <div className="phone-contact">
                    <IoMdPhonePortrait />
                    +84 2838227818
                </div>

                <div className="email-contact">
                    <MdEmail />
                    sales@gatewayviet.com.vn

                </div>
                <div className="location">
                    <MdLocationOn />
                    40 Nguyen Van Giai Street, Da Kao Ward, District 1, HCMC, Vietnam
                </div>

            </div >
            {
                isHomePage ?
                    (<div className="overview" >
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
                            <span onClick={() => navigate("/product")}>Products</span>
                            <span onClick={() => navigate("/about-us")}>About Us</span>
                            <span onClick={() => navigate("/service")}>Service</span>
                            <span onClick={() => navigate("/gallery")}>Gallery</span>
                            <span onClick={() => window.location.href ="https://news.gatewayviet.com"}>News</span>
                            {/*<span onClick={() => navigate("/new")}>News</span>*/}
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
                    )
                    : (
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
                            <span onClick={() => navigate("/product")}>Products</span>
                            <span onClick={() => navigate("/about-us")}>About Us</span>
                            <span onClick={() => navigate("/service")}>Service</span>
                            <span onClick={() => navigate("/gallery")}>Gallery</span>
                            <span onClick={() => window.location.href ="https://news.gatewayviet.com"}>News</span>
                            {/*<span onClick={() => navigate("/new")}>News</span>*/}
                            <span onClick={() => navigate("/contact")}>Contact</span>
                                </div>
                            </div>
                            <div className="sub-title">
                                {title}
                            </div>


                        </div>


                    )
            }
        </div>
    )
}









export default Header;
