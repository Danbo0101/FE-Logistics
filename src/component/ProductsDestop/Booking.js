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

    const linkSkype = "skype:bellasteward_gw102?chat";
    const linkFb = "https://www.facebook.com/gatewayviet/";

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
                                <td>Gateway cung cấp dịch vụ vận chuyển hàng hóa đến Bangkok Thailand tiết kiệm và hiệu quả. Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết và nhận báo giá tốt nhất.</td>
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
                                <td>Gateway cung cấp dịch vụ vận chuyển hàng hóa đến Jarkata tiết kiệm và hiệu quả. Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết và nhận báo giá tốt nhất.</td>
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
                                <td>Gateway cung cấp dịch vụ vận chuyển hàng hóa đến Semarang tiết kiệm và hiệu quả. Hãy liên hệ với chúng tôi để biết thêm thông tin chi tiết và nhận báo giá tốt nhất.</td>
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
                                <td> Chúng tôi nhận vận chuyển đến các cảng: Sydney, Melbourne, Brisbane, Adelaide, Fremantle</td>
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
                                <td>Gateway nhận vận chuyển đi Singapore và các tuyến đi VIA SIN</td>
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
                                <td>40'HQ/20'DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 5 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>
                                    <div
                                        className="button-container">
                                        {/*<button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button> */}
                                        <button
                                            ref={ref => target.current[5] = ref}
                                            onClick={() => handleShowContact(5)}
                                            className={`contact-${5}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[5]} show={show[5]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={5} {...props}

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
                                <td>40'HQ/20'DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 2 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>
                                    <div
                                        className="button-container">
                                        {/*<button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button> */}
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
                                <td>
                                    <div
                                        className="button-container">
                                        {/*<button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button> */}
                                        <button
                                            ref={ref => target.current[7] = ref}
                                            onClick={() => handleShowContact(7)}
                                            className={`contact-${7}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[7]} show={show[7]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={7} {...props}

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
                                <td>40'HQ/20'DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 19 - 20 ngày</div>
                                    <div className="caries"> Đi thẳng / Trung chuyển</div>
                                </td>
                                <td>
                                    <div
                                        className="button-container">
                                        {/*<button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button> */}
                                        <button
                                            ref={ref => target.current[8] = ref}
                                            onClick={() => handleShowContact(8)}
                                            className={`contact-${8}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[8]} show={show[8]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={8} {...props}

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
                                <td>40'HQ/20'DC</td>
                                <td>Thứ 2 / CN</td>
                                <td>
                                    <div className="day"> 3 - 4 ngày</div>
                                    <div className="caries"> Đi thẳng</div>
                                </td>
                                <td>
                                    <div
                                        className="button-container">
                                        {/*<button
                                            className="booking"
                                            onClick={() => handleBookingFCL()}
                                        >
                                            Lấy booking
                                        </button> */}
                                        <button
                                            ref={ref => target.current[9] = ref}
                                            onClick={() => handleShowContact(9)}
                                            className={`contact-${9}`}>
                                            <CiMail />
                                            Liên hệ
                                            <Overlay target={target.current[9]} show={show[9]} placement="right">
                                                {(props) => (
                                                    <Tooltip
                                                        id={9} {...props}

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
            <ModalBookingFCL
                show={showModalBookingFCL}
                setShow={setShowModalBookingFCL}
                logisticsFcl={logisticsFcl}
            />
            <ModalBookingLCL
                show={showModalBookingLCL}
                setShow={setShowModalBookingLCL}
            />
        </>
    )
}

export default Booking;
