import "./Gallery.scss";
import { useEffect } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import lgShare from 'lightgallery/plugins/share';
import lgHash from 'lightgallery/plugins/hash';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import Footer from "../Footer/Footer";
import imgGallery1 from "../../assets/gallery1.jpg";
import imgGallery2 from "../../assets/gallery2.jpg";
import imgGallery3 from "../../assets/gallery3.jpg";
import imgGallery4 from "../../assets/gallery4.jpg";
import imgGallery5 from "../../assets/gallery5.jpg";
import imgGallery6 from "../../assets/gallery6.jpg";
import imgGallery7 from "../../assets/gallery7.jpg";
import imgGallery8 from "../../assets/gallery8.jpg";
import imgGallery9 from "../../assets/gallery9.jpg";
import imgGallery10 from "../../assets/gallery10.jpg";
import imgGallery11 from "../../assets/gallery11.jpg";
import imgGallery12 from "../../assets/gallery12.jpg";



const Gallery = (props) => {
    useEffect(() => {

        const container = document.querySelector('.masonry-gallery-demo');
        if (container) {
            const msnry = new Masonry(container, {
                itemSelector: '.gallery-item',
                columnWidth: '.grid-sizer',
                percentPosition: true,
            });

            imagesLoaded(container).on('progress', function () {
                msnry.layout();
            });
        }
    }, []);
    return (
        <div className="gallery-contanier">
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
                    Gallery
                </NavLink>
            </Breadcrumb>
            <div className="gallery-main">
                <LightGallery
                    elementClassNames={'masonry-gallery-demo'}
                    plugins={[lgZoom, lgShare, lgHash]}
                    speed={500}
                >
                    <div className="grid-sizer"></div>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery1}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery1}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery2}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery2}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery3}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery3}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery4}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery4}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery5}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery5}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery6}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery6}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery7}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery7}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery8}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery8}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery9}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery9}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery10}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery10}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery11}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery11}
                        />
                    </a>
                    <a
                        data-lg-size="600-400"
                        className="gallery-item"
                        data-src={imgGallery12}
                    >
                        <img
                            className="img-responsive"
                            src={imgGallery12}
                        />
                    </a>
                </LightGallery>
            </div>


            <div className="footer-container">
                <Footer />
            </div>
        </div>
    )
}

export default Gallery;