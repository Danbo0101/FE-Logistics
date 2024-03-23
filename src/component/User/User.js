import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Table from 'react-bootstrap/Table';
import logo from "../../assets/logo.png";

import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./User.scss"
import ModalBookingFCL from "./Modal/ModalBookingFCL";
import ModalBookingLCL from "./Modal/ModalBookingLCL";
import { useEffect, useState } from "react";
// import { getAllUser } from "../../services/adminServices";
import { getAllProduct } from "../../services/adminServices";

const User = () => {

    const linkSkype = "https://join.skype.com/invite/pyKiMVuGd0CO";

    const [showModalBookingFCL, setShowModalBookingFCL] = useState(false);
    const [showModalBookingLCL, setShowModalBookingLCL] = useState(false);

    const [listLCL, setListLCL] = useState([]);

    const handleBookingFCL = () => {
        setShowModalBookingFCL(true);
    }

    const handleBookingLCL = () => {
        setShowModalBookingLCL(true);
    }

    useEffect(() => {
        fetchListProduct();
        console.log(listLCL);
    }, []);

    const fetchListProduct = async () => {

        let res = await getAllProduct();
        setListLCL(res);

    }

    return (
        <div className="user-home-page">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">

                <div className="logistics-fcl">
                    <div className="title-logistic">
                        <div className="name">
                            HÀNG LẺ (LCL)
                        </div>
                        <div className="other-function">
                            Xem tất cả
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                    <div className="table-logistic">
                        <Table bordered hover>
                            <thead >
                                <tr>
                                    <th>Công ty Logistics</th>
                                    <th>Cảng đi / Cảng đến</th>
                                    <th>Ngày khởi hành</th>
                                    <th>Thời gian vận chuyển</th>
                                    <th>Giới thiệu sản phẩm</th>
                                    <th>Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listLCL && listLCL.length > 0 &&
                                    listLCL.map(
                                        (item, index) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td className="company-name">
                                                            {item.icon ?
                                                                <img
                                                                    src={item.icon}
                                                                    alt="logoLogistic"
                                                                />
                                                                :
                                                                <></>
                                                            }

                                                            <div className="name">
                                                                {item.dvvc}
                                                            </div>

                                                        </td>
                                                        <td>
                                                            <div className="from">{item.noiDi}</div>
                                                            -
                                                            <div className="to">{item.noiDen}</div>
                                                        </td>
                                                        <td>Thứ 3/ Thứ 4/ Thứ 6/ Chủ nhật</td>
                                                        <td>
                                                            <div className="day">{item.tgvc} days</div>
                                                            {/* <div className="caries"> Đi thẳng</div> */}
                                                        </td>
                                                        <td>GT sản phẩm</td>
                                                        <td>
                                                            <div
                                                                className="button-container">
                                                                {/* <button
                                                                    className="booking"
                                                                    onClick={() => handleBookingLCL()}
                                                                >
                                                                    Lấy booking
                                                                </button> */}
                                                                <a href={linkSkype}>
                                                                    <button

                                                                        className="contact">
                                                                        <CiMail />
                                                                        Liên hệ
                                                                    </button>
                                                                </a>

                                                            </div>
                                                        </td>
                                                    </tr>

                                                </>
                                            )
                                        }
                                    )}



                            </tbody>
                        </Table>
                    </div>
                </div>









                <div className="logistics-fcl">
                    <div className="title-logistic">
                        <div className="name">
                            HÀNG CONTAINER (FCL)
                        </div>
                        <div className="other-function">
                            Xem tất cả
                            <MdKeyboardDoubleArrowRight />
                        </div>
                    </div>
                    <div className="table-logistic">
                        <Table bordered hover>
                            <thead >
                                <tr>
                                    <th>Công ty Logistics</th>
                                    <th>Cảng đi / Cảng đến</th>
                                    <th>Loại container</th>
                                    <th>Ngày khởi hành</th>
                                    <th>Thời gian vận chuyển</th>
                                    {/* <th>Phụ phí</th>
                                    <th>Cước vận chuyển</th>
                                    <th>Tổng chi phí</th>
                                    <th>Thời hạn giá</th> */}
                                    <th>Giới thiệu sản phẩm</th>
                                    <th>Booking</th>
                                </tr>
                            </thead>


                            <tbody>





                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logo}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            Gateway Logistics
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Vung Tau</div>
                                        -
                                        <div className="to">Los Angeles</div>
                                    </td>
                                    <td>45'HQ</td>
                                    <td>Thứ 2</td>
                                    <td>
                                        <div className="day"> 18 ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>GT sản phẩm</td>

                                    <td>
                                        <div className="button-container">
                                            <button
                                                className="booking"
                                                onClick={() => handleBookingFCL()}
                                            >
                                                Lấy booking
                                            </button>
                                            <button className="contact">
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        </div>
                                    </td>
                                </tr>






                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logo}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            Gateway Logistics
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Ho Chi Minh</div>
                                        -
                                        <div className="to">Nhava Sheva</div>
                                    </td>
                                    <td>40'HQ</td>
                                    <td>Thứ 4</td>
                                    <td>
                                        <div className="day"> 18 ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>GT sản phẩm</td>
                                    <td>
                                        <div className="button-container">
                                            <button
                                                className="booking"
                                                onClick={() => handleBookingFCL()}
                                            >
                                                Lấy booking
                                            </button>
                                            <button className="contact">
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        </div>
                                    </td>
                                </tr>






                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logo}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            Gateway Logistics
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Ho Chi Minh</div>
                                        -
                                        <div className="to">Qingdao</div>
                                    </td>
                                    <td>40'GP</td>
                                    <td>Thứ 3</td>
                                    <td>
                                        <div className="day"> 18 ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>GT sản phẩm</td>
                                    <td>
                                        <div className="button-container">
                                            <button
                                                className="booking"
                                                onClick={() => handleBookingFCL()}
                                            >
                                                Lấy booking
                                            </button>
                                            <button className="contact">
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        </div>
                                    </td>
                                </tr>





                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logo}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            Gateway Logistics
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Hai Phong</div>
                                        -
                                        <div className="to">Oakland </div>
                                    </td>
                                    <td>20'GP</td>
                                    <td>Thứ 3/ Chủ nhật</td>
                                    <td>
                                        <div className="day"> 18 ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>GT sản phẩm</td>
                                    <td>
                                        <div className="button-container">
                                            <button
                                                className="booking"
                                                onClick={() => handleBookingFCL()}
                                            >
                                                Lấy booking
                                            </button>
                                            <button className="contact">
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        </div>
                                    </td>
                                </tr>



                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logo}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            Gateway Logistics
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Xiamen</div>
                                        -
                                        <div className="to">Ho Chi Minh</div>
                                    </td>
                                    <td>20'GP</td>
                                    <td>Thứ 7</td>
                                    <td>
                                        <div className="day"> 18 ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>GT sản phẩm</td>
                                    <td>
                                        <div className="button-container">
                                            <button
                                                className="booking"
                                                onClick={() => handleBookingFCL()}
                                            >
                                                Lấy booking
                                            </button>
                                            <button className="contact">
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        </div>
                                    </td>
                                </tr>



                            </tbody>


                        </Table>
                    </div>
                </div>
                <ModalBookingFCL
                    show={showModalBookingFCL}
                    setShow={setShowModalBookingFCL}
                />
                <ModalBookingLCL
                    show={showModalBookingLCL}
                    setShow={setShowModalBookingLCL}
                />
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default User;

