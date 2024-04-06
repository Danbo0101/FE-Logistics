import "./HeaderMobile.scss";
import "./Toggle.scss";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imgHomePage from "../../assets/homepage-1.jpg";
import imgHomePage1 from "../../assets/homepage-2.jpeg";
import imgHomePage2 from "../../assets/homepage-3.jpeg";
import imgHomePage3 from "../../assets/homepage-4.jpeg";
import logo from "../../assets/logo.png";


const HeaderMobile = (props) => {
    const navigate = useNavigate();
    const { isHomePage, title } = props;
    const [currentImage, setCurrentImage] = useState(0);
    const [changeImage, setChangeImage] = useState(0);
    const [changeImage2, setChangeImage2] = useState(0);
    const [imageOpacity, setImageOpacity] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


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


    return (
        <>
            {isHomePage ?
                (
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
                        </div>
                        <div className="overview">
                            <div className="header-home-container">
                                <div className="top-home">
                                    <div className="logo" onClick={() => navigate("/")}>
                                        <img src={logo} />
                                    </div>
                                    <div className="toggle">
                                        <a href="#menu" id="toggle" className={isMenuOpen ? 'on' : ''} onClick={toggleMenu}>
                                            <span></span>
                                        </a>

                                        <div id="menu" className={isMenuOpen ? 'show' : ''}>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="about-us">About</a></li>
                                                <li><a href="service">Service</a></li>
                                                <li><a href="gallery">Gallery</a></li>
                                                <li><a href="https://news.gatewayviet.com">News</a></li>
                                                <li><a href="contact">Contact</a></li>
                                                <li><a href="product">Products</a></li>
                                            </ul>
                                        </div>
                                        {/* toggle */}
                                    </div>
                                </div>

                                <div className="img-background">
                                    <img

                                        src={images[currentImage]}
                                        style={{ opacity: imageOpacity, transition: 'opacity 1s' }}
                                    />
                                </div>

                                <div className="title">
                                    {/* <hr className="custom-hr" /> */}
                                    <div className="title-main">
                                        TRANSATLANTIC DELIVERY
                                    </div>
                                    <div className="title-sub">
                                        Assuring the compliant handling of temperature sensitive healthcare products in today's complex supply chain is one of the foremost challenges facing
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
                : (
                    <div className="header-not-hp-container">
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
                        </div>
                        <div className="header-sub-container">
                            <div className="nav-bar-sub">
                                <div className="top-home">
                                    <div className="logo" onClick={() => navigate("/")}>
                                        <img src={logo} />
                                    </div>
                                    <div className="toggle">
                                        <a href="#menu" id="toggle" className={isMenuOpen ? 'on' : ''} onClick={toggleMenu}>
                                            <span></span>
                                        </a>

                                        <div id="menu" className={isMenuOpen ? 'show' : ''}>
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="about-us">About</a></li>
                                                <li><a href="service">Service</a></li>
                                                <li><a href="gallery">Gallery</a></li>
                                                <li><a href="https://news.gatewayviet.com">News</a></li>
                                                <li><a href="contact">Contact</a></li>
                                                <li><a href="product">Products</a></li>
                                            </ul>
                                        </div>
                                        {/* toggle */}
                                    </div>
                                </div>

                            </div>
                            <div className="sub-title">
                                {title}
                            </div>

                        </div>
                    </div>
                )
            }

        </>

    )
}

export default HeaderMobile;