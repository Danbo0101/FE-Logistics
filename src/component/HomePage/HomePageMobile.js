import "./HomePageMobile.scss";
import { IoIosSend } from "react-icons/io";
import { FaArrowRight, FaSkype } from "react-icons/fa";
import imgService1 from "../../assets/service_1.jpeg";
import imgService2 from "../../assets/service_2.jpeg";
import imgService3 from "../../assets/service_3.jpeg";
import imgOperator from "../../assets/operator.jpeg"
import imgBrand1 from "../../assets/brand1.png";
import imgBrand2 from "../../assets/brand2.png";
import imgBrand3 from "../../assets/brand3.png";
import imgBrand4 from "../../assets/brand4.png";
import imgBrand5 from "../../assets/brand5.png";
import imgBrand6 from "../../assets/brand6.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useRef, useState } from "react";
import FooterMobile from "../Footer/FooterMoblie";


const HomePageMobile = () => {

    const navigate = useNavigate();


    return (

        <div className="homepage-container">
            <div className="about-us">
                <div className="left-content">
                    <div className="title-content">
                        <hr className="custom-hr" />
                        ABOUT US
                    </div>
                    <div className="main-content">
                        Gateway Logistics Co., Ltd (Vietnam) is set up under Gateway Thailand on April 2006, Gateway Vietnam is an international full service freight transportation and logistics service company headquartered in Ho Chi Minh City. We provide our customers in Vietnam and around the World with intercontinental ocean and air freight transportation and logistics solutions for all general and specialized needs. Our experienced professional and dedicated staff work very hard to ensure the highest level of support, assistance and service available, and we take a great deal of pride in our work. Our mission at Gateway Vietnam is to set the global standard for excellence through total commitment to quality and customer service, and to be recognized as the industry leader in all of the markets we serve.
                    </div>
                    <div className="btn-about-us">
                        <button

                            onClick={() => {
                                navigate("about-us")
                            }}
                        >
                            <IoIosSend />
                            Read More
                        </button>
                    </div>
                </div>
                {/* <div className="right-content">
                            <video autoPlay muted loop>
                                <source
                                    src={videoHomePage}
                                    type='video/mp4'
                                />
                            </video>
                        </div> */}
            </div>
            <div className="services">
                <div className="service-main">
                    <div className="service-main-title">
                        <hr className="custom-hr" />
                        GATEWAY SERVICES
                    </div>
                    <div className="service-main-content">
                        Globally known for our ability to handle every last detail of our customers’ particular logistics and forwarding needs, Gateway Services team takes care of all your logistics.
                    </div>
                </div>
                <div className="slide-services">
                    <div className="service-child">
                        <img src={imgService1} />
                        <div className="service-child-title">
                            Sea Freight – Vận tải đường biển
                        </div>
                        <div className="service-child-content">
                            Gateway Viet Logistics đã ký hợp đồng dịch vụ với nhiều hãng tàu có uy tín như APL, CMA-CGM, OOCL, ZIM, CK LINE, PIL, WAN HAI, YML, MSC, để cung cấp cho khách…
                        </div>
                        <div
                            className="read-more"
                            onClick={() => {
                                navigate("service")
                            }}
                        >
                            read more {String.fromCharCode(8594)}
                        </div>
                    </div>
                    <div className="service-child">
                        <img src={imgService2} />
                        <div className="service-child-title">
                            Master Consolidator – Vận tải tối ưu
                        </div>
                        <div className="service-child-content">
                            Từ các lô hàng tải nhỏ hơn container (LCL) đến các giải pháp hợp nhất đa quốc gia, GATEWAY luôn sẵn sàng đáp ứng mọi nhu cầu vận chuyển của bạn.                    </div>
                        <div
                            className="read-more"
                            onClick={() => navigate("service")}
                        >
                            read more {String.fromCharCode(8594)}
                        </div>
                    </div>
                    <div className="service-child">
                        <img src={imgService3} />
                        <div className="service-child-title">
                            Air Freight – Vận tải hàng không
                        </div>
                        <div className="service-child-content">
                            Kính gửi quý khách hàng thân yêu,
                            <br />

                            Hiện tại, Gateway Logistics đang phát triển mạnh trong hệ thống vận tải hàng không.
                        </div>
                        <div
                            className="read-more"
                            onClick={() => navigate("service")}
                        >
                            read more {String.fromCharCode(8594)}
                        </div>
                    </div>
                </div>




            </div>
            <div className="contact">
                <div className="left-content">
                    <div className="title-contact">
                        Reach your destination 100% sure and safe
                    </div>
                    <div className="main-contact">
                        We will take care of your cargo or your pasenger and deliver them safe and on time!
                    </div>
                    <div className="btn-contact">
                        <button
                            onClick={() => navigate("contact")}>
                            Contact Now
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

            </div>
            <div className="supports">
                <div className="left-content">
                    <div className="title-support">
                        <hr className="custom-hr" />
                        ONLINE SUPPORT
                    </div>
                    <div className="support">
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Airfreight:
                                </div>
                                <div className="name">
                                    Ms Hiep
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Export:
                                </div>
                                <div className="name">
                                    Ms Sally
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Import:
                                </div>
                                <div className="name">
                                    Ms Nancy
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Consol :
                                </div>
                                <div className="name">
                                    Ms Sally
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Consol :
                                </div>
                                <div className="name">
                                    Ms Lynh
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Operation :
                                </div>
                                <div className="name">
                                    Ms Thu
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                        <div className="support-child">
                            <div className="name-position">
                                <div className="position">
                                    Overseas :
                                </div>
                                <div className="name">
                                    Ms Hana
                                </div>
                            </div>
                            <div className="supporter-contact">
                                <FaSkype />
                                Chat
                            </div>
                        </div>
                        <hr />
                    </div>
                </div>
                <div className="right-content">
                    <div className="contact-us-title">
                        <hr className="custom-hr" />
                        CONTACT US
                    </div>
                    <div className="content">
                        <div className="left">
                            <input
                                type="text"
                                placeholder="Full Name"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div className="right">
                            <textarea
                                placeholder="Message"
                                rows={4}
                            />
                            <div className="btn-submit">
                                <button>
                                    Submit
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="associated-brand">
                <img src={imgBrand1} />
                <img src={imgBrand2} />
                <img src={imgBrand3} />
                <img src={imgBrand4} />
                <img src={imgBrand5} />
                <img src={imgBrand6} />
            </div>
            <div className='footer-contanier'>
                <FooterMobile />
            </div>
        </div >
    )
}

export default HomePageMobile;