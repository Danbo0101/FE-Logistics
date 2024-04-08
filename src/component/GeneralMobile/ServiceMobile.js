import "./ServiceMobile.scss";
import Footer from "../Footer/Footer";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import imgTransport2 from "../../assets/transport1.png"
import imgTransport1 from "../../assets/transport2.png"
import imgTransport3 from "../../assets/transport3.png"
import imgEffective from "../../assets/effective.jpeg"

const ServiceMobile = (props) => {

    const navigate = useNavigate();

    return (
        <div className="service-container">
            <div className="service-main">
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
                        GATEWAY SERVICE
                    </NavLink>
                </Breadcrumb>
                <div className="about-service">
                    <div className="title">
                        <hr className="custom-hr" />
                        QUALITY AND PERFORMANCE AT THE RIGHT PRICE
                    </div>
                    <div className="content">
                        <div className="content-child">
                            <p>C&ocirc;ng ty Gateway l&agrave; Master Consol chuy&ecirc;n gửi h&agrave;ng đi&nbsp;<a href="https://www.facebook.com/hashtag/%C3%BAc?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">&Uacute;c</a>&nbsp;v&agrave; c&aacute;c cảng&nbsp;<a href="https://www.facebook.com/hashtag/ch%C3%A2u_%C3%A1?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Ch&acirc;u &Aacute;</a>&nbsp;như:&nbsp;<a href="https://www.facebook.com/hashtag/bangkok?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Bangkok</a>,&nbsp;<a href="https://www.facebook.com/hashtag/semarang?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Semarang</a>,&nbsp;<a href="https://www.facebook.com/hashtag/jakarta?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Jakarta</a>,&nbsp;<a href="https://www.facebook.com/hashtag/shanghai?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Shanghai</a>,&nbsp;<a href="https://www.facebook.com/hashtag/singapore?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Singapore</a>,&nbsp;<a href="https://www.facebook.com/hashtag/incheon?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Incheon</a>,&nbsp;<a href="https://www.facebook.com/hashtag/busan?__eep__=6&amp;__cft__%5B0%5D=AZWSiisV6nRcZ07cW44WXRbLW5H6xRZbkJZpwdk3oPf2gPpA7cPueKvrQrW5x9QpKJ8-oSnZ1hoCU-YHTz-Isvg09OxsXOV_o67Fl_d1uZB8dz7saMKzIJR7emkd_QftrvXVom4ZrDthBcPGL4qA-yz6&amp;__tn__=*NK-R" target="_blank">Busan</a>,... bằng đường t&agrave;u biển với c&aacute;c lợi thế:</p>

                            <p>+ Cước ph&iacute; rẻ.</p>

                            <p>+ Thời gian chuyển tải nhanh ch&oacute;ng.</p>

                            <p>+ Vận chuyển được c&aacute;c mặt h&agrave;ng si&ecirc;u trường, si&ecirc;u trọng,...</p>

                            <p>+ Xuất khẩu h&agrave;ng dệt may, h&agrave;ng thực phẩm, h&agrave;ng thủ c&ocirc;ng mỹ nghệ, h&agrave;ng gỗ &amp; đồ nội thất,...</p>

                            <p>+ Vận chuyển h&agrave;ng c&aacute; nh&acirc;n như: đồ d&ugrave;ng gia đ&igrave;nh, b&agrave;n ghế đ&atilde; qua sử dụng,...</p>
                        </div>
                        <div className="content-child">
                            Gateway. is one of the world’s leading providers of end-to-end supply chain solutions. We combine intercontinental Air and Ocean Freight with comprehensive Value-Added Logistics Services and Supply Chain Services. The range of Supply Chain Solutions can vary from simple transport or storage up to complex operations.
                        </div>
                        <div className="content-child">
                            We optimize all activities around information, material and financial flow. We provide globally integrated end-to-end solutions tailored to our customers’ supply chain management needs with a special commitment to industry specific requirements.
                        </div>
                    </div>
                </div>
                <div className="form-transport">
                    <div className="transport">
                        <img src={imgTransport1} alt="trans1" />
                        <div className="title">
                            AIR FREIGHT/VẬN TẢI HÀNG KHÔNG
                        </div>
                        <div className="content">
                            Gateway Logistics is constantly evolving and expanding agents network abroad with the motto "Fast - Accurate - Safe - Save", Gateway Logistics always provide various solutions for transport to fulfill each specific requirement of the transit time and mode of transport.
                        </div>
                    </div>
                    <div className="transport">
                        <img src={imgTransport2} alt="trans2" />
                        <div className="title">
                            SEA FREIGHT/VẬN TẢI ĐƯỜNG BIỂN                        </div>
                        <div className="content">
                            GATEWAY has signed service contracts with many reputable shipping lines such as APL, CMA-CGM, OOCL, ZIM, CK LINE, PIL, WAN HAI, YML, MSC…in order to offer our clients a full range of transit times and discounted rates options.
                        </div>
                    </div>
                    <div className="transport">
                        <img src={imgTransport3} alt="trans3" />
                        <div className="title">
                            MASTER CONSOLIDATOR
                        </div>
                        <div className="content">
                            From single less-than-container load shipments (LCL) to complete multi-country consolidation solutions, Master Consol box at GATEWAY is at hand to meet all your ocean transportation needs.
                        </div>
                    </div>
                </div>
                <div className="contact-service">
                    <div className="content">
                        Not sure which solution fits your business needs?
                    </div>
                    <div className="btn-contact">
                        <button
                            onClick={() => navigate("/contact")}
                        >
                            Contact Now
                            <FaArrowRight />
                        </button>

                    </div>

                </div>
                <div className="effective">
                    <div className="main">
                        <div className="title">
                            <hr className="custom-hr" />
                            EFFECTIVE SOLUTIONS
                        </div>
                        <div className="content">
                            You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations. You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing, or whether it requires a completely new integrated supply chain model.
                        </div>
                    </div>
                    <img src={imgEffective} alt="effective" />
                </div>
                <div className="term-service">
                    <div className="safe-secure">
                        <IoBagCheckSharp />
                        <div className="title">
                            SAFE & SECURE
                        </div>
                        <div className="content">
                            You benefit from our experience in delivering effective solutions to the complex global supply chains of some of the world’s biggest corporations.
                        </div>
                    </div>
                    <div className="delivery">
                        <AiOutlineFieldTime />
                        <div className="title">
                            FAST DELIVERY
                        </div>
                        <div className="content">
                            You benefit from every innovation, whether it involves a simple extension to our Air and Ocean Freight products, whether it means a development in warehousing.
                        </div>
                    </div>
                    <div className="support">
                        <FiPhoneCall />
                        <div className="title">
                            24/7 SUPPORT
                        </div>
                        <div className="content">
                            All of which explains why you’ll find the team of outstanding support at Gateway ready to apply their passion for solutions in support of your business.
                        </div>

                    </div>

                </div>

            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default ServiceMobile;