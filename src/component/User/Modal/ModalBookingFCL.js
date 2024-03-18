import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./ModalBookingFCL.scss";
import { GoPlus, GoHorizontalRule } from "react-icons/go";


const ModalBookingFCL = (props) => {

    const { show, setShow } = props;

    const handleClose = () => setShow(false);

    return (
        <Modal
            show={show}
            onHide={handleClose}
        // backdrop="static"
        // keyboard={false}
        >
            <Modal.Header >
                <div className='header-booking'>
                    <div className='name'>
                        YÊU CẦU BOOKING
                    </div>
                    <div className='company-logistic'>
                        <div className='title-company'>
                            Công ty Logistics:
                        </div>
                        <div className='name-company'>
                            DNLSHIPPING CORPORATION CO.,LTD
                        </div>
                    </div>
                    <div className='sale-representative'>
                        <div className='title-sale'>
                            Đại diện bán hàng:
                        </div>
                        <div className='name-merchandiser'>
                            Ms. Jenia Jenia_nguyen
                        </div>
                    </div>
                </div>


            </Modal.Header>
            <Modal.Body>
                <div className='booking-main'>
                    <div className='from-to'>
                        <div className='name-from'>
                            <label>Nơi đi</label>
                            <input
                                type='text'
                                value="Vung Tau, Ba Ria-Vung Tau, Vietnam"
                            />
                        </div>
                        <div className='delivery-conditions'>
                            <label>Điều kiện giao hàng</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>CY</option>
                                <option value="1">Door</option>
                                <option value="2">CFS</option>
                            </select>
                        </div>
                        <div className='name-to'>
                            <label>Nơi đến</label>
                            <input
                                type='text'
                                value="Vung Tau, Ba Ria-Vung Tau, Vietnam"
                            />
                        </div>
                        <div className='delivery-conditions'>
                            <label>Điều kiện nhận hàng</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>CY</option>
                                <option value="1">Door</option>
                                <option value="2">CFS</option>
                            </select>
                        </div>

                    </div>
                    <div className='container-goods'>
                        <div className='types-container'>
                            <div className='type-container'>
                                <label>Loại Container</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>45HQ</option>
                                    <option value="1">50HQ</option>
                                </select>
                            </div>
                            <div className='number-container'>
                                <div className=''>

                                </div>
                            </div>
                        </div>
                        <div className='charge'>
                            charge
                        </div>
                    </div>
                    <div className='goods'>
                        goods
                    </div>
                    <div className='notes'>
                        notes
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">Gửi yêu cầu Booking</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalBookingFCL;