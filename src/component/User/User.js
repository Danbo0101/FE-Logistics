import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Table from 'react-bootstrap/Table';
import logoLogistic1 from "../../assets/logo-logistics1.png";
import logoLogistic2 from "../../assets/logo-logistics2.png";
import logoLogistic3 from "../../assets/logo-logistics3.png";
import logoLogistic4 from "../../assets/logo-logistics4.png";
import logoLogistic5 from "../../assets/logo-logistics5.png";
import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./User.scss"
import ModalBookingFCL from "./Modal/ModalBookingFCL";
import { useState } from "react";

const User = () => {

    const [showModalBookingFCL, setShowModalBookingFCL] = useState(false);

    const handleBookingFCL = () => {
        setShowModalBookingFCL(true);
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
                                    <th>Phụ phí</th>
                                    <th>Cước vận chuyển</th>
                                    <th>Tổng chi phí</th>
                                    <th>Thời hạn giá</th>
                                    <th>Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            DNLSHIPPING CORPORATION CO.,LTD
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
                                    <td>9.582.650₫</td>
                                    <td>125.321.150₫</td>
                                    <td>134.903.800₫</td>
                                    <td>31-03-2024</td>
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
                                            src={logoLogistic4}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            CÔNG TY TNHH THƯƠNG MẠI VÀ DỊCH VỤ LƯU PHƯỚC LỘC
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
                                    <td>6.098.050₫ </td>
                                    <td>21.156.500₫	</td>
                                    <td>27.254.550₫	</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <button className="booking">
                                            Lấy booking
                                        </button>
                                        <button className="contact">
                                            <CiMail />
                                            Liên hệ
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logoLogistic5}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            DAHNAY LOGISTICS VIETNAM
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
                                    <td>7.218.100₫ </td>
                                    <td>547.580₫</td>
                                    <td>7.765.680₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <button className="booking">
                                            Lấy booking
                                        </button>
                                        <button className="contact">
                                            <CiMail />
                                            Liên hệ
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logoLogistic1}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            CÔNG TY CP INTERLINK
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
                                    <td>6.552.000₫</td>
                                    <td>67.410.000₫	</td>
                                    <td>73.962.000₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <button className="booking">
                                            Lấy booking
                                        </button>
                                        <button className="contact">
                                            <CiMail />
                                            Liên hệ
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logoLogistic3}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            CÔNG TY TNHH VẬN TẢI BÁCH VIỆT
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
                                    <td>6.720.300₫ </td>
                                    <td>1.991.200₫	</td>
                                    <td>1.991.200₫	</td>
                                    <td>23-03-2024
                                    </td>
                                    <td>
                                        <button className="booking">
                                            Lấy booking
                                        </button>
                                        <button className="contact">
                                            <CiMail />
                                            Liên hệ
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </div>
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
                                    <th>Cước vận chuyển</th>
                                    <th>Phụ phí cảng đi</th>
                                    <th>Phụ phí cảng đến</th>
                                    <th>Tổng chi phí</th>
                                    <th>Thời hạn giá</th>
                                    <th>Booking</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="company-name">
                                        <img
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            TTHQSaiGon
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Ho Chi Minh (Cat Lai)</div>
                                        -
                                        <div className="to">Tokyo</div>
                                    </td>
                                    <td>Thứ 3/ Thứ 4/ Thứ 6/ Chủ nhật</td>
                                    <td>
                                        <div className="day"> 9 Ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>24.890₫/cbm</td>
                                    <td>1.941.420₫</td>
                                    <td> - </td>
                                    <td>1.966.310₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <div className="button-container">
                                            <button className="booking">
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
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        CÔNG TY TNHH VẬN TẢI BÁCH VIỆT
                                    </td>
                                    <td>
                                        <div className="from">Qingdao</div>
                                        -
                                        <div className="to">Hai Phong</div>
                                    </td>
                                    <td>Thứ 3</td>
                                    <td>
                                        <div className="day"> 7 Ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>747.300₫/cbm</td>
                                    <td> - </td>
                                    <td>1.245.500₫</td>
                                    <td>498.200₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <div className="button-container">
                                            <button className="booking">
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
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            CÔNG TY TNHH THƯƠNG MẠI VÀ GIAO NHẬN AV
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Shanghai</div>
                                        -
                                        <div className="to">Hai Phong</div>
                                    </td>
                                    <td>Thứ 2/ Thứ 3</td>
                                    <td>
                                        <div className="day">5 Ngày</div>
                                        <div className="caries">Chuyển tải</div>
                                    </td>
                                    <td>2.233.800₫/cbm</td>
                                    <td>2.978.400₫</td>
                                    <td>1.563.660₫</td>
                                    <td>6.775.860₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <div className="button-container">
                                            <button className="booking">
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
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            TC SHIPPINGs
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Hoc Mon</div>
                                        -
                                        <div className="to">Singapore</div>
                                    </td>
                                    <td>Thứ 2</td>
                                    <td>
                                        <div className="day"> 2 Ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>2.283.440₫/cbm</td>
                                    <td>372.300₫</td>
                                    <td> - </td>
                                    <td>1.911.140₫</td>
                                    <td>31-03-2024</td>
                                    <td>
                                        <div className="button-container">
                                            <button className="booking">
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
                                            src={logoLogistic2}
                                            alt="logoLogistic"
                                        />
                                        <div className="name">
                                            SUN VN TRANSPORT CORPORATION
                                        </div>

                                    </td>
                                    <td>
                                        <div className="from">Ho Chi Minh (Cat Lai)</div>
                                        -
                                        <div className="to">New York</div>
                                    </td>
                                    <td>Thứ 6</td>
                                    <td>
                                        <div className="day"> 35 Ngày</div>
                                        <div className="caries"> Đi thẳng</div>
                                    </td>
                                    <td>995.200₫/cbm</td>
                                    <td>1.194.240₫</td>
                                    <td>5.635.320₫</td>
                                    <td>7.824.760₫	</td>
                                    <td>15-03-2024</td>
                                    <td>
                                        <div className="button-container">
                                            <button className="booking">
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
            </div>

            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default User;
