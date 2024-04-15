import "./Footer.scss";
import logo from "../../assets/logo.png";
import { IoIosArrowForward, IoMdPhonePortrait } from "react-icons/io";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaFax, FaFacebook, FaInstagram, FaGooglePlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const navigate = useNavigate();

    return (
        <div className="footer-contaniner">
            <div className="main-content">
                <div className="about">
                    <img src={logo} />
                    <div className="about-content">
                        Everyday is a new day for us and we work really hard to satisfy our customer everywhere.
                    </div>
                </div>
                <div className="menu-footer">
                    <div className="title">
                        MENU
                    </div>
                    <div className="content">
                        <div
                            className="child"
                            onClick={() => navigate("/")}
                        >
                            <IoIosArrowForward />
                            Home
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("/about-us")}
                        >
                            <IoIosArrowForward />
                            AboutUs
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("/service")}
                        >
                            <IoIosArrowForward />
                            Service
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("/gallery")}
                        >
                            <IoIosArrowForward />
                            Gallery
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("/new")}
                        >
                            <IoIosArrowForward />
                            News
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("/contact")}
                        >
                            <IoIosArrowForward />
                            Contact
                        </div>
                    </div>


                </div>
                <div className="contact-footer">
                    <div className="title">
                        CONTACT
                    </div>
                    <div className="content">
                        <div className="address">
                            <MdLocationOn />
                            40 Nguyen Van Giai Street, Da Kao Ward, District 1, HCMC, Vietnam
                        </div>
                        <div className="hotline">
                            <IoMdPhonePortrait />
                            HOTLINE: +84 28 3822 7818
                        </div>
                        <div className="fax">
                            <FaFax />
                            Fax: +84 28 3822 7801
                        </div>
                        <div className="email">
                            <MdEmail />
                            sales@gatewayviet.com.vn
                        </div>

                    </div>

                </div>
                <div className="recent-posts">
                    <div className="title">
                        RECENT POSTS
                    </div>
                    <div className="content">
                        <div className="child">
                            <IoIosArrowForward />
                            <a href="https://gatewayviet.com.vn/2020/04/30/%f0%9d%97%a3%f0%9d%97%b5%f0%9d%97%ae%cc%82%f0%9d%97%bb-%f0%9d%97%af%f0%9d%97%b6%f0%9d%97%b2%cc%a3%cc%82%f0%9d%98%81-%f0%9d%97%b5%f0%9d%97%ae%f0%9d%97%bb%f0%9d%97%b4-%f0%9d%97%b0%f0%9d%97%b5/">
                                Phân biệt hàng chuyển tải (VIA) và hàng trực tiếp (Direct)
                            </a>

                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            <a href="https://gatewayviet.com.vn/2020/04/30/%f0%9d%90%8b%f0%9d%90%a8%f0%9d%90%a0%f0%9d%90%a2%f0%9d%90%ac%f0%9d%90%ad%f0%9d%90%a2%f0%9d%90%9c%f0%9d%90%ac-%f0%9d%90%a5%f0%9d%90%9a-%f0%9d%90%a0%f0%9d%90%a2/">
                                Logistics là gì?
                            </a>

                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            <a href="https://gatewayviet.com.vn/2020/04/30/%f0%9d%91%ab%f0%9d%92%8a%cc%a3%f0%9d%92%84%f0%9d%92%89-%f0%9d%92%97%f0%9d%92%96%cc%a3-%f0%9d%92%97%f0%9d%92%82%cc%a3%cc%82%f0%9d%92%8f-%f0%9d%92%84%f0%9d%92%89%f0%9d%92%96%f0%9d%92%9a%f0%9d%92%86/">
                                Vận chuyển hàng hóa Door to Door
                            </a>
                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            <a href="https://gatewayviet.com.vn/2020/04/24/lich-dong-hang-thang-4/">
                                Lịch đóng hàng Tháng 4
                            </a>

                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            <a href="https://gatewayviet.com.vn/2020/03/06/tin-tuyen-dung/">
                                TIN TUYỂN DỤNG
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="content">
                    <div className="copyright">
                        © 2018. All rights reserved. Designed by Gateway Logistic Viet Nam.
                    </div>
                    <div className="icon">
                        <span onClick={() => window.location.href ="https://facebook.com/gatewayviet"}><FaFacebook /></span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer;
