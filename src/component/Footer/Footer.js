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
                            onClick={() => navigate("about-us")}
                        >
                            <IoIosArrowForward />
                            AboutUs
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("service")}
                        >
                            <IoIosArrowForward />
                            Service
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("gallery")}
                        >
                            <IoIosArrowForward />
                            Gallery
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("new")}
                        >
                            <IoIosArrowForward />
                            News
                        </div>
                        <div
                            className="child"
                            onClick={() => navigate("contact")}
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
                            𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            𝐋𝐨𝐠𝐢𝐬𝐭𝐢𝐜𝐬 𝐥𝐚̀ 𝐠𝐢̀?
                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            𝑫𝒊̣𝒄𝒉 𝒗𝒖̣ 𝒗𝒂̣̂𝒏 𝒄𝒉𝒖𝒚𝒆̂̉𝒏 𝒅𝒐𝒐𝒓 𝒕𝒐 𝒅𝒐𝒐𝒓
                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            Lịch đóng hàng Tháng 4
                        </div>
                        <div className="child">
                            <IoIosArrowForward />
                            TIN TUYỂN DỤNG
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <hr />
                <div className="content">
                    <div className="copyright">
                        © 2018. All rights reserved. Designed by Danbo.
                    </div>
                    <div className="icon">
                        <FaFacebook />
                        <FaInstagram />
                        <FaGooglePlus />


                    </div>
                </div>


            </div>
        </div>
    )
}

export default Footer;