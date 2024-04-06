import "./New.scss";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";
import imgNew1 from "../../../assets/new1.png";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer";
import NewDetail from "./NewDetail";


const New = (props) => {

    const navigate = useNavigate();

    const [isImgNew, setIsImgNew] = useState(true);
    const [isNewDetail, setIsNewDetail] = useState(false);

    const location = useLocation();

    const [hasExecutedEffect, setHasExecutedEffect] = useState(false);
    // const history = useHi

    useEffect(() => {
        setIsNewDetail(false);
    }, [location])


    const handleNavigateNewDetail = () => {
        setIsNewDetail(true);


    }

    return (
        <div className="new-container">
            <Breadcrumb className="breadcrumb">
                <NavLink
                    to="/"
                    className="breadcrumb-item"
                >
                    GATEWAY
                </NavLink>

                <NavLink
                    className="breadcrumb-item active"
                    exact activeClassName="active"
                >
                    New - Tin tức
                </NavLink>
            </Breadcrumb>

            <div className="main-container">

                {isNewDetail ?
                    <div className="left-container">
                        <NewDetail />
                    </div>
                    :
                    <div className="left-container">
                        <div
                            className="new-content"
                            onClick={() => handleNavigateNewDetail()}

                        >
                            {isImgNew ?
                                <div className="new-image-content">
                                    <img src={imgNew1} alt="img-new-1" />
                                    <div className="date-new">
                                        <div className="day">
                                            24
                                        </div>
                                        <div className="month">
                                            Apr
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                </>

                            }

                            <div className="main-content">
                                <div className="title">
                                    𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                </div>
                                <div className="category">
                                    Category :
                                    <div className="name">
                                        Ocean Freight
                                    </div>
                                </div>
                                <div className="content">
                                    Thuật ngữ gửi hàng chuyển tải (via) và gửi hàng trực tiếp (direct) có vẻ khá quen thuộc với người trong nghề nhưng còn xa lạ với quý khách hàng có nhu cầu…
                                </div>
                            </div>

                        </div>

                        <div className="new-content">
                            {isImgNew ?
                                <div className="new-image-content">
                                    <img src={imgNew1} alt="img-new-1" />
                                    <div className="date-new">
                                        <div className="day">
                                            24
                                        </div>
                                        <div className="month">
                                            Apr
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                </>

                            }
                            <div className="main-content">
                                <div className="title">
                                    𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                </div>
                                <div className="category">
                                    Category :
                                    <div className="name">
                                        Ocean Freight
                                    </div>
                                </div>
                                <div className="content">
                                    Thuật ngữ gửi hàng chuyển tải (via) và gửi hàng trực tiếp (direct) có vẻ khá quen thuộc với người trong nghề nhưng còn xa lạ với quý khách hàng có nhu cầu…
                                </div>
                            </div>

                        </div>

                        <div className="new-content">
                            {isImgNew ?
                                <div className="new-image-content">
                                    <img src={imgNew1} alt="img-new-1" />
                                    <div className="date-new">
                                        <div className="day">
                                            24
                                        </div>
                                        <div className="month">
                                            Apr
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                </>

                            }
                            <div className="main-content">
                                <div className="title">
                                    𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                </div>
                                <div className="category">
                                    Category :
                                    <div className="name">
                                        Ocean Freight
                                    </div>
                                </div>
                                <div className="content">
                                    Thuật ngữ gửi hàng chuyển tải (via) và gửi hàng trực tiếp (direct) có vẻ khá quen thuộc với người trong nghề nhưng còn xa lạ với quý khách hàng có nhu cầu…
                                </div>
                            </div>

                        </div>

                        <div className="new-content">
                            {isImgNew ?
                                <div className="new-image-content">
                                    <img src={imgNew1} alt="img-new-1" />
                                    <div className="date-new">
                                        <div className="day">
                                            24
                                        </div>
                                        <div className="month">
                                            Apr
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                </>

                            }
                            <div className="main-content">
                                <div className="title">
                                    𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                </div>
                                <div className="category">
                                    Category :
                                    <div className="name">
                                        Ocean Freight
                                    </div>
                                </div>
                                <div className="content">
                                    Thuật ngữ gửi hàng chuyển tải (via) và gửi hàng trực tiếp (direct) có vẻ khá quen thuộc với người trong nghề nhưng còn xa lạ với quý khách hàng có nhu cầu…
                                </div>
                            </div>

                        </div>

                        <div className="new-content">
                            {isImgNew ?
                                <div className="new-image-content">
                                    <img src={imgNew1} alt="img-new-1" />
                                    <div className="date-new">
                                        <div className="day">
                                            24
                                        </div>
                                        <div className="month">
                                            Apr
                                        </div>
                                    </div>
                                </div>
                                :
                                <>
                                </>

                            }
                            <div className="main-content">
                                <div className="title">
                                    𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                </div>
                                <div className="category">
                                    Category :
                                    <div className="name">
                                        Ocean Freight
                                    </div>
                                </div>
                                <div className="content">
                                    Thuật ngữ gửi hàng chuyển tải (via) và gửi hàng trực tiếp (direct) có vẻ khá quen thuộc với người trong nghề nhưng còn xa lạ với quý khách hàng có nhu cầu…
                                </div>
                            </div>

                        </div>
                    </div>
                }

                <div className="right-container">
                    <div className="filter-container">
                        <div className="search-container">
                            <input type="text" className="search-input" placeholder="Search..." />
                            <FaSearch className="search-icon" />
                        </div>
                    </div>
                    <div className="category-container">
                        <div className="category-title">
                            CATEGORIES
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            AIR FREIGHT
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            CONTRACT LOGISTICS
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            GROUND FREIGHT
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            NEWS
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            OCEAN FREIGHT
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            SCS MANAGEMENT
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            TIN TỨC CHUYÊN NGÀNH
                        </div>
                        <div className="category-child">
                            <IoIosArrowForward />
                            UNCATEGORIZED
                        </div>
                    </div>
                    <div className="recent-post">
                        <div className="title">
                            RECENT POSTS
                        </div>
                        <div className="main-recent-post">
                            <div className="date">
                                April 30, 2020
                            </div>
                            <div className="content">
                                𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                                <br />
                                <br />
                                <hr />
                            </div>

                        </div>

                        <div className="main-recent-post">
                            <div className="date">
                                April 30, 2020
                            </div>
                            <div className="content">
                                𝗣𝗵𝗮̂𝗻 𝗯𝗶𝗲̣̂𝘁 𝗵𝗮̀𝗻𝗴 𝗰𝗵𝘂𝘆𝗲̂̉𝗻 𝘁𝗮̉𝗶 (𝗩𝗜𝗔) 𝘃𝗮̀ 𝗵𝗮̀𝗻𝗴 𝘁𝗿𝘂̛̣𝗰 𝘁𝗶𝗲̂́𝗽 (𝗗𝗶𝗿𝗲𝗰𝘁)
                            </div>
                        </div>


                    </div>
                </div>
            </div>



            <div className="footer-container">
                <Footer />
            </div>


        </div>
    )
}

export default New;