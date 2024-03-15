import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./AboutUs.scss";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink } from "react-router-dom";

const AboutUs = (props) => {
    return (
        <div className="about-us-contanier">
            <div className="about-us-main">
                <Breadcrumb className="breadcrumb">
                    <NavLink
                        to="/"
                        className="breadcrumb-item"
                    >
                        GATEWAY
                    </NavLink>
                    /
                    <NavLink
                        className="breadcrumb-item"
                        exact activeClassName="active"
                    >
                        About Us - Về chúng tôi
                    </NavLink>
                </Breadcrumb>

                <div className="content">
                    <div className="content-en">
                        Gateway Logistics Co., Ltd (Vietnam) is set up under Gateway Thailand on April 2006, Gateway Vietnam is an international full service freight transportation and logistics service company headquartered in Ho Chi Minh City. We provide our customers in Vietnam and around the World with intercontinental ocean and air freight transportation and logistics solutions for all general and specialized needs. Our experienced professional and dedicated staff work very hard to ensure the highest level of support, assistance and service available, and we take a great deal of pride in our work. Our mission at Gateway Vietnam is to set the global standard for excellence through total commitment to quality and customer service, and to be recognized as the industry leader in all of the markets we serve.
                    </div>
                    <div className="content-vi">
                        Gateway Logistics Co., Ltd (Việt Nam) được thành lập theo Gateway Thái Lan vào tháng 4 năm 2006, Gateway Vietnam là một công ty vận tải hàng hóa và dịch vụ hậu cần quốc tế có trụ sở chính đặt tại Thành phố Hồ Chí Minh. Chúng tôi cung cấp cho khách hàng của chúng tôi tại Việt Nam và trên toàn thế giới các giải pháp vận chuyển và vận chuyển hàng hóa đường biển và hàng không liên lục địa cho tất cả các nhu cầu chung và chuyên ngành. Đội ngũ nhân viên chuyên nghiệp và tận tâm giàu kinh nghiệm của chúng tôi làm việc rất chăm chỉ để đảm bảo mức độ hỗ trợ, hỗ trợ và dịch vụ cao nhất hiện có, và chúng tôi rất tự hào về công việc của mình. Nhiệm vụ của chúng tôi tại Gateway Vietnam là thiết lập tiêu chuẩn toàn cầu về sự xuất sắc thông qua toàn bộ cam kết về chất lượng và dịch vụ khách hàng, và được công nhận là công ty dẫn đầu ngành trong tất cả các thị trường chúng tôi phục vụ.
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <Footer />
            </div>
        </div >
    )
}

export default AboutUs;