import Table from 'react-bootstrap/Table';
import logo from "../../assets/logo.png";
import { FaFacebook, FaSkype } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import ModalBookingFCL from "./Modal/ModalBookingFCL";
import ModalBookingLCL from "./Modal/ModalBookingLCL";
import { useEffect, useState, useRef } from "react";
// import { getAllUser } from "../../services/adminServices";
import { getAllProduct } from "../../services/adminServices";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';


const Booking = () => {

    const linkSkype = "https://join.skype.com/invite/pyKiMVuGd0CO";
    const linkFb = "https://www.facebook.com/profile.php?id=100013753994447&mibextid=LQQJ4d";

    const [showModalBookingFCL, setShowModalBookingFCL] = useState(false);
    const [showModalBookingLCL, setShowModalBookingLCL] = useState(false);
    const target = useRef([]);
    const [listLCL, setListLCL] = useState([]);
    const [show, setShow] = useState(Array(listLCL.length).fill(false));
    const handleBookingFCL = () => {
        setShowModalBookingFCL(true);
    }

    const handleBookingLCL = () => {
        setShowModalBookingLCL(true);
    }

    const handleShowContact = (index) => {
        const newShow = [...show]; // Tạo một bản sao của mảng show
        newShow[index] = !newShow[index]; // Đảo ngược giá trị show cho chỉ mục tương ứng
        setShow(newShow); // Cập nhật trạng thái show
    }




    useEffect(() => {
        fetchListProduct();
        console.log(listLCL);
    }, []);

    const fetchListProduct = async () => {

        let res = await getAllProduct();
        setListLCL(res);

    }

    console.log(target)
    return (
        <>
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
                                                    <td>{item.etd === 8 ?
                                                        <>Chủ Nhật</>
                                                        :
                                                        <>Thứ {item.etd}</>
                                                    }</td>
                                                    <td>
                                                        <div className="day">{item.tgvc} days</div>
                                                        <div className="caries"> {item.loai === 1 ?
                                                            <>Trung Chuyển</> :
                                                            <>Đi Thẳng</>
                                                        }</div>
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
                                                            <button
                                                                ref={ref => target.current[index] = ref}
                                                                onClick={() => handleShowContact(index)}
                                                                className={`contact-${index}`}>
                                                                <CiMail />
                                                                Liên hệ
                                                                <Overlay target={target.current[index]} show={show[index]} placement="right">
                                                                    {(props) => (
                                                                        <Tooltip
                                                                            id={index} {...props}

                                                                        >

                                                                            <a href={linkFb}>
                                                                                <FaFacebook />
                                                                            </a>
                                                                            <a href={linkSkype}>
                                                                                <FaSkype />
                                                                            </a>

                                                                        </Tooltip>
                                                                    )}
                                                                </Overlay>
                                                            </button>
                                                            {/* </a> */}

                                                        </div>
                                                    </td>
                                                </tr>

                                            </>
                                        )
                                    }
                                )}
                            {/* <tr>
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
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        {showContact && activeRow === "0" ?
                                            <>
                                            </>
                                            :
                                            <button
                                                className="contact"
                                                onClick={() => handleShowContact("0")}
                                            >
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        }
                                        {showContact && activeRow === "0" ?
                                            <div className="contact-show">
                                                <a href={linkFb}>
                                                    <FaFacebook />
                                                </a>
                                                <a href={linkSkype}>
                                                    <FaSkype />
                                                </a>

                                            </div>
                                            :
                                            <></>
                                        }

                                    </div>
                                    <Button variant="danger" ref={target} onClick={() => setShowContact(!showContact)}>
                                        Click me to see
                                    </Button>
                                    <Overlay target={target.current} show={showContact} placement="right">
                                        {({
                                            placement: _placement,
                                            arrowProps: _arrowProps,
                                            show: _showContact,
                                            popper: _popper,
                                            hasDoneInitialMeasure: _hasDoneInitialMeasure,
                                            ...props
                                        }) => (
                                            <div
                                                {...props}
                                                style={{
                                                    position: 'absolute',
                                                    backgroundColor: 'rgba(255, 100, 100, 0.85)',
                                                    padding: '2px 10px',
                                                    color: 'white',
                                                    borderRadius: 3,
                                                    ...props.style,
                                                }}
                                            >
                                                Simple tooltip
                                            </div>
                                        )}
                                    </Overlay>
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
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        {showContact && activeRow === "1" ?
                                            <>
                                            </>
                                            :
                                            <button
                                                className="contact"
                                                onClick={() => handleShowContact("1")}
                                            >
                                                <CiMail />
                                                Liên hệ
                                            </button>
                                        }
                                        {showContact && activeRow === "1" ?
                                            <div className="contact-show">
                                                <a href={linkFb}>
                                                    <FaFacebook />
                                                </a>
                                                <a href={linkSkype}>
                                                    <FaSkype />
                                                </a>

                                            </div>
                                            :
                                            <></>
                                        }
                                    </div>
                                </td>
                            </tr> */}


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
        </>
    )
}

export default Booking;