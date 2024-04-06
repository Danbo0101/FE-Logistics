import "./NewDetail.scss"
import { FaRegComment, FaArrowRight } from "react-icons/fa";
import { CiMapPin } from "react-icons/ci";
import { MdOutlineContactPhone } from "react-icons/md";
import { IoMailUnreadOutline } from "react-icons/io5";





const NewDetail = (props) => {

    const text = `1/ Mô tả công việc như sau:

– Lên kế hoạch phát triển khách hàng, doanh thu và báo cáo tình hình thực hiện định kỳ;
– Tìm hiểu nhu cầu thị trường về dịch vụ logistics;
– Lên danh sách và tiếp cận khách hàng tiềm năng nhằm giới thiệu dịch vụ logistics của công ty;
– Tư vấn các gói dịch vụ xuất nhập khẩu, giải pháp vận chuyển & giao nhận, báo giá, thương thảo, ký kết hợp đồng dịch vụ với khách hàng;
– Phối hợp với các bộ phận trong công ty theo dõi cập nhật tình hình hàng hóa và thông tin tới khách hàng một cách thường xuyên và kịp thời;
– Tiếp tục chăm sóc hậu mãi, phối hợp với các bộ phận khác của công ty để giải quyết thắc mắc, khiếu nại, và đề xuất của khách hàng nếu có;
– Cập nhật các quy định mới về xuất nhập khẩu, thuế, hải quan,…
– Tìm kiếm khách hàng cho nhu cầu sử dụng dịch vận chuyển quốc tế bằng đường biển, đường hàng không, dịch vụ khai báo hải quan….
– Thực hiện các công việc liên quan đến kinh doanh: hỏi giá đại lý, báo giá, theo dõi lô hàng…
– Báo cáo công việc cho quản lý
– Các công việc khác theo yêu cầu của quản lý

2/ Yêu cầu:

– Sinh viên đã tốt nghiệp Đại học, Cao Đẳng

– Giao tiếp tiếng Anh khá tốt

– Thành thạo các ứng dụng văn phòng

– Nhanh nhẹn, trung thực, ham học hỏi

3/ Chế độ lương – thưởng:

– Trao đổi khi phỏng vấn`

    return (
        <div className="new-detail-container">
            <div className="title">
                TIN TUYỂN DỤNG
            </div>

            <div className="nav-sub">
                <div className="date">
                    <div className="day">
                        6
                    </div>
                    <div className="month">
                        Mar
                    </div>
                </div>
                <div className="nav-sub-child">
                    <div className="posted">
                        Posted by Cadmin
                    </div>
                    <div className="category-detail">
                        Category:
                        <div className="categories">
                            News, Tin tức chuyên ngành
                        </div>
                    </div>
                    <div className="comments">
                        <FaRegComment />
                        No comments
                    </div>
                </div>
            </div>

            <div className="main-content">
                text
            </div>
            <div className="content-contact">
                <div className="child">
                    <CiMapPin />
                    Liên hệ ngay để được hỗ trợ:
                </div>
                <div className="child">
                    <MdOutlineContactPhone />
                    Hotline: 0984817927 – Mrs. Hanh Hoang
                </div>
                <div className="child">
                    <IoMailUnreadOutline />
                    sales@gatewayviet.com.vn
                </div>
            </div>
            <div className="hashtag">
                <div className="hastag-child">
                    #vanchuyenhangdiUc
                </div>
                <div className="hastag-child">
                    #vanchuyenhangdiUcgiare
                </div>
                <div className="hastag-child">
                    #vanchuyenhangconsol
                </div>
                <div className="hastag-child">
                    #dichvuvanchuyen
                </div>
            </div>
            <div className="reply">
                <div className="title">
                    LEAVE A REPLY
                </div>
                <div className="form-reply">

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
                            rows={7}
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
    )
}

export default NewDetail;