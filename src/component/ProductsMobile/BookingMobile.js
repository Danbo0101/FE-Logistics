import Table from 'react-bootstrap/Table';
import logo from "../../assets/logo.png";
import { FaFacebook, FaSkype } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
// import { getAllUser } from "../../services/adminServices";
import { getAllProduct } from "../../services/adminServices";
import Tooltip from 'react-bootstrap/Tooltip';
import Overlay from 'react-bootstrap/Overlay';
import Button from 'react-bootstrap/Button';
import ModalBookingFCLMobile from './Modal/ModalBookingFCLMobile';
import ModalBookingLCLMobile from './Modal/ModalBookingLCLMobile';


const BookingMobile = () => {

    const linkSkype = "skype:bellasteward_gw102?chat";
    const linkFb = "https://www.facebook.com/profile.php?id=100013753994447&mibextid=LQQJ4d";

    const [showModalBookingFCL, setShowModalBookingFCL] = useState(false);
    const [showModalBookingLCL, setShowModalBookingLCL] = useState(false);
    const [logisticsFcl, setLogisticsFcl] = useState({
        name: " Gateway Logistics",
        from: "Ho Chi Minh"
    })
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




    // useEffect(() => {
    //     fetchListProduct();
    //     console.log(listLCL);
    // }, []);

    // const fetchListProduct = async () => {

    //     let res = await getAllProduct();
    //     setListLCL(res);

    // }

    console.log(target)
    return (
        <>
            <div className="logistics-fcl">
                <div className="title-logistic">
                    <div className="name">
                        HÀNG LẺ (LCL)
                    </div>
                    {/*  <div className="other-function">
                        Xem tất cả
                        <MdKeyboardDoubleArrowRight /> 
                    </div>*/}
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
                            {/* {listLCL && listLCL.length > 0 &&
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
                                                            <img
                                                                src={logo}
                                                                alt="logoLogistic"
                                                            />
                                                        }

                                                        <div className="name">
                                                            {item.dvvc}
                                                            Gateway Logistics
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
                                                            </button> 
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
                                                            {/* </a> 

                                                        </div>
                                                    </td>
                                                </tr>

                                            </>
                                        )
                                    }
                                )} */}



                            {/*---------------------------------------------------------------------*/}

                            <tr>
                                <td className="company-name">
                                    <img
                                        src={logo}
                                        alt="logoLogistic"
                                    />
                                    <div className="name">
                                        {logisticsFcl.name}
                                    </div>

                                </td>
                                <td>

                                    <div className="from">Ho Chi Minh</div>

                                    -
                                    <div className="to">Bangkok</div>
                                </td>

                                <td>CN / Thứ 2</td>
                                <td>
                                    <div className="day"> 2 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[0] = ref}
                                            onClick={() => handleShowContact(0)}
                                            className={`contact-${0}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[0]} show={show[0]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={0} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*---------------------------------------------------------------------*/}


                            {/*---------------------------------------------------------------------*/}

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

                                    <div className="to">Bangkok</div>
                                </td>

                                <td>CN / Thứ 2</td>
                                <td>
                                    <div className="day"> 2 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[0] = ref}
                                            onClick={() => handleShowContact(0)}
                                            className={`contact-${0}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[0]} show={show[0]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={0} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*---------------------------------------------------------------------*/}


                            {/*---------------------------------------------------------------------*/}

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

                                    <div className="to">Jarkata</div>
                                </td>

                                <td>Thứ 2</td>
                                <td>
                                    <div className="day"> 5 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[1] = ref}
                                            onClick={() => handleShowContact(1)}
                                            className={`contact-${1}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[1]} show={show[1]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={1} {...props}

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


                                    </div>
                                </td>
                            </tr>




                            {/*---------------------------------------------------------------------*/}

                            {/*---------------------------------------------------------------------*/}


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
                                    <div className="to">Semarang</div>
                                </td>

                                <td>Thứ 2</td>
                                <td>
                                    <div className="day"> 9 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[2] = ref}
                                            onClick={() => handleShowContact(2)}
                                            className={`contact-${2}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[2]} show={show[2]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={2} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*---------------------------------------------------------------------*/}


                            {/*---------------------------------------------------------------------*/}


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
                                    <div className="to">Úc</div>
                                </td>

                                <td>CN / Thứ 2</td>
                                <td>
                                    <div className="day"> 19 - 20 ngày</div>
                                    <div className="caries"> Đi thẳng / Trung chuyển</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[3] = ref}
                                            onClick={() => handleShowContact(3)}
                                            className={`contact-${3}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[3]} show={show[3]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={3} {...props}

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


                                    </div>
                                </td>
                            </tr>




                            {/*---------------------------------------------------------------------*/}



                            {/*---------------------------------------------------------------------*/}


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
                                    <div className="to">Singapore</div>
                                </td>

                                <td>Thứ 2 / Thứ 4</td>
                                <td>
                                    <div className="day"> 3 - 4 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingLCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[4] = ref}
                                            onClick={() => handleShowContact(4)}
                                            className={`contact-${4}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[4]} show={show[4]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={4} {...props}

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


                                    </div>
                                </td>
                            </tr>




                            {/*---------------------------------------------------------------------*/}


                        </tbody>
                    </Table >
                </div >
            </div >

            <div className="logistics-fcl">
                <div className="title-logistic">
                    <div className="name">
                        HÀNG CONTAINER (FCL)
                    </div>
                    {/*  <div className="other-function">
                        Xem tất cả
                        <MdKeyboardDoubleArrowRight /> 
                    </div>*/}
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




                            {/*-------------------------------------------------------------------------------*/}

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
                                    <div className="to">Jarkata</div>
                                </td>
                                <td>40'HQ/20DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 5 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[6] = ref}
                                            onClick={() => handleShowContact(6)}
                                            className={`contact-${6}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[6]} show={show[6]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={6} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*-------------------------------------------------------------------------------*/}





                            {/*-------------------------------------------------------------------------------*/}

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
                                    <div className="to">Bangkok</div>
                                </td>
                                <td>40'HQ/20DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 2 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[6] = ref}
                                            onClick={() => handleShowContact(6)}
                                            className={`contact-${6}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[6]} show={show[6]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={6} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*-------------------------------------------------------------------------------*/}
                            {/*-------------------------------------------------------------------------------*/}

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
                                    <div className="to">Semarang</div>
                                </td>
                                <td>40'HQ/20'DC</td>
                                <td>Thứ 2</td>
                                <td>
                                    <div className="day"> 5 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[6] = ref}
                                            onClick={() => handleShowContact(6)}
                                            className={`contact-${6}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[6]} show={show[6]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={6} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*-------------------------------------------------------------------------------*/}
                            {/*-------------------------------------------------------------------------------*/}

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
                                    <div className="to">Úc</div>
                                </td>
                                <td>40'HQ/20DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 19 - 20 ngày</div>
                                    <div className="caries"> Đi thẳng / Trung chuyển</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[6] = ref}
                                            onClick={() => handleShowContact(6)}
                                            className={`contact-${6}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[6]} show={show[6]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={6} {...props}

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

                                    </div>
                                </td>
                            </tr>


                            {/*-------------------------------------------------------------------------------*/}

                            {/*-------------------------------------------------------------------------------*/}

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
                                    <div className="to">Singapore</div>
                                </td>
                                <td>40'HQ/20DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 3 - 4 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>GT sản phẩm</td>
                                <td>
                                    <div
                                        className="button-container">
                                        <button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button>
                                        <button
                                            ref={ref => target.current[6] = ref}
                                            onClick={() => handleShowContact(6)}
                                            className={`contact-${6}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[6]} show={show[6]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={6} {...props}

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


                                    </div>
                                </td>
                            </tr>



                            {/*-------------------------------------------------------------------------------*/}




                        </tbody >


                    </Table >
                </div >
            </div >
            <ModalBookingFCLMobile
                show={showModalBookingFCL}
                setShow={setShowModalBookingFCL}
                logisticsFcl={logisticsFcl}
            />
            <ModalBookingLCLMobile
                show={showModalBookingLCL}
                setShow={setShowModalBookingLCL}
            />
        </>
    )
}

export default BookingMobile;
