import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import "./ModalBookingLCL.scss";
import { GoPlus, GoHorizontalRule } from "react-icons/go";


const ModalBookingLCL = (props) => {

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
                            TTHQSaiGon
                        </div>
                    </div>
                    <div className='sale-representative'>
                        <div className='title-sale'>
                            Đại diện bán hàng:
                        </div>
                        <div className='name-merchandiser'>
                            Mr. Khắc Võ
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
                            <div className='weight'>
                                <label>Trọng lượng (KG)</label>
                                <input
                                    type='text'
                                    value="1000"
                                />
                            </div>
                            <div className='number-CBM'>
                                <div className='title-number'>
                                    Khối lượng (CBM)
                                </div>
                                <div className='number'>
                                    <GoHorizontalRule />
                                    1
                                    <GoPlus />
                                </div>
                            </div>
                            <div className='freight'>
                                <div className='title'>
                                    Cước vận chuyển
                                </div>
                                <div className='price'>
                                    125.321.150₫
                                </div>
                            </div>
                            <div className='add-fee-from'>
                                <div className='title'>
                                    Phụ phí cảng đi
                                </div>
                                <div className='price'>
                                    9.582.650₫
                                </div>
                            </div>
                            <div className='add-fee-to'>
                                <div className='title'>
                                    Phụ phí cảng đến
                                </div>
                                <div className='price'>
                                    9.582.650₫
                                </div>
                            </div>

                            <div className='total-cost'>
                                <div className='title'>
                                    Tổng chi phí
                                </div>
                                <div className='price'>
                                    134.903.800₫
                                </div>
                            </div>

                            <div className='number-goods'>
                                <div className='title-number'>
                                    Số kiện
                                </div>
                                <div className='number'>
                                    <GoHorizontalRule />
                                    1
                                    <GoPlus />
                                </div>
                            </div>
                            <div className='packing'>
                                <label>Đóng hàng</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Pallets</option>
                                    <option value="1">Cartons</option>

                                </select>
                            </div>

                        </div>
                    </div>
                    <div className='quote'>
                        <div className='quote-main'>
                            <div className='quote-name'>
                                Chấp nhận báo giá
                            </div>
                            <div className='quote-content'>
                                <div className='quote-content-child'>
                                    <div className='quote-content-child-name'>
                                        Cước vận chuyển
                                    </div>
                                    <div className='quote-content-child-price'>
                                        24.890₫
                                    </div>
                                </div>
                                <div className='quote-content-child'>
                                    <div className='quote-content-child-name'>
                                        Phụ phí cảng đi
                                    </div>
                                    <div className='quote-content-child-price'>
                                        1.941.420₫
                                    </div>
                                </div>
                                <div className='quote-content-child'>
                                    <div className='quote-content-child-name'>
                                        Phụ phí cảng đến
                                    </div>
                                    <div className='quote-content-child-price'>
                                        0₫
                                    </div>
                                </div>
                                <div className='quote-content-child'>
                                    <div className='quote-content-child-name'>
                                        Tổng chi phí
                                    </div>
                                    <div className='quote-content-child-price'>
                                        1.966.310₫
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className='quote-note'>
                            <div className='quote-note-name'>
                                Ghi chú
                            </div>
                            <div className='quote-note-content'>
                                Note
                            </div>
                        </div>

                    </div>
                    <div className='goods'>
                        <div className='good-type'>
                            <label>Nhóm hàng</label>
                            <select class="form-select" aria-label="Default select example">
                                <option selected>Hàng thường</option>
                                <option value="1">Hàng nguy hiểm</option>
                                <option value="2">Hàng khác</option>
                            </select>
                        </div>
                        <div className='good-detail'>
                            <label>Mô tả hàng hoá</label>
                            <input
                                type='text'
                            />
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="check1" name="option1" value="something" />
                            <label class="form-check-label">Hàng nguy hiểm</label>
                        </div>
                    </div>
                    <div className='notes'>
                        <div className='time'>
                            <div className='title'>
                                Thời gian khởi hành dự kiến
                            </div>
                            <div className='from-time'>
                                <label>Từ ngày</label>
                                <input
                                    type='date'
                                />
                            </div>
                            <div className='to-time'>
                                <label>Tới ngày</label>
                                <input
                                    type='date'
                                />
                            </div>
                        </div>
                        <div className='note'>
                            <div className='name-note'>
                                Lưu ý quan trọng
                            </div>
                            <textarea
                                placeholder=""
                                rows={3}
                            />

                        </div>
                    </div>
                    <div className='contact-for-sale'>
                        <div className='title'>
                            Vui lòng để lại thông tin liên hệ
                        </div>
                        <div className='main-content'>
                            <div className='right-content'>
                                <div className='name-customer'>
                                    <label>Tên khách hàng</label>
                                    <input
                                        type='text'
                                        placeholder="Please Enter Your Name ..."
                                    />
                                </div>
                                <div className='email-customer'>
                                    <label>Email</label>
                                    <input
                                        type='email'
                                        placeholder="Please Enter Your Email ..."
                                    />
                                </div>
                            </div>

                            <div className='phone-number-customer'>
                                <label>Số điện thoại liên hệ</label>
                                <input
                                    type='text'
                                    placeholder="Please Enter Your Phone Number ..."
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary">Gửi yêu cầu Booking</Button>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>



            </Modal.Footer>
        </Modal>
    )
}

export default ModalBookingLCL;