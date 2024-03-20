import "./Contact.scss";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";
import { FaArrowRight } from "react-icons/fa";
import imgMapFake from "../../assets/mapfake.png"




const Contact = (props) => {
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
                                        rows={2}
                                    />
                                    <textarea
                                        placeholder="Email *"
                                        rows={2}
                                    />
                                    <textarea
                                        placeholder="Phone"
                                        rows={2}
                                    />


                                </div>
                                <div className="right-form">
                                    <textarea
                                        placeholder="Message"
                                        rows={9}
                                    />
                                </div>
                            </div>
                            <div className="btn-submit">
                                <button>
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

export default Contact;


