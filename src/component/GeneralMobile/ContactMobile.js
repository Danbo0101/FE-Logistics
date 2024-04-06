import "./ContactMobile.scss";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import imgMapFake from "../../assets/mapfake.png"
import { useState } from "react";




const ContactMobile = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = async () => {
        console.log(name, email, phone, message)
    }

    return (
        <div className="contact-container">
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
                        Contact - Liên hệ với chúng tôi
                    </NavLink>
                </Breadcrumb>
                <div className="contact-main">
                    <div className="get-in-touch">
                        <div className="content">
                            <div className="title">
                                <hr className="custom-hr" />
                                GET IN TOUCH
                            </div>
                            <div className="main-content">
                                If you have any question about Gateway or how we can support your business, please contact us directly by selecting from one of the below categories that is the most relevant to your inquiry and fill our short feedback form.
                            </div>
                        </div>
                        <div className="form-contact">
                            <div className="form">
                                <div className="left-form">
                                    <textarea
                                        placeholder="Name *"
                                        onChange={(event) => setName(event.target.value)}
                                        rows={2}
                                    />
                                    <textarea
                                        placeholder="Email *"
                                        onChange={(event) => setEmail(event.target.value)}
                                        rows={2}
                                    />
                                    <textarea
                                        placeholder="Phone"
                                        onChange={(event) => setPhone(event.target.value)}
                                        rows={2}
                                    />


                                </div>
                                <div className="right-form">
                                    <textarea
                                        placeholder="Message"
                                        onChange={(event) => setMessage(event.target.value)}
                                        rows={5}
                                    />
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button
                                    onClick={() => handleSubmit()}
                                >
                                    Submit
                                    <FaArrowRight />
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="address">
                        <img
                            src={imgMapFake}
                            alt="map"
                        />
                    </div>
                </div>

            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default ContactMobile;


