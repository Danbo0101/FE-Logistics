import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';
import App from './App';
import HomePage from './component/HomePage/HomePage';
import AboutUs from "./component/GeneralDesktop/AboutUs";
import Service from "./component/GeneralDesktop/Service";
import Gallery from "./component/GeneralDesktop/Gallery";
import Contact from "./component/GeneralDesktop/Contact";
import Login from './component/Auth/Login';
import Register from './component/Auth/Register';
import ManageProduct from './component/Admin/Sale/ManageProduct';
import Admin from './component/Admin/Admin';
import DashBoard from './component/Admin/DashBoard';
import 'react-toastify/dist/ReactToastify.css';
import Product from './component/ProductsDestop/Product';
import ProductMobile from './component/ProductsMobile/ProductMobile';
import { useMediaQuery } from 'react-responsive';
import HomePageMobile from './component/HomePage/HomePageMobile';
import AboutUsMobile from './component/GeneralMobile/AboutUsMobile';
import ServiceMobile from './component/GeneralMobile/ServiceMobile';
import GalleryMobile from './component/GeneralMobile/GalleryMobile';
import ContactMobile from './component/GeneralMobile/ContactMobile';







const NotFound = () => {
    return (
        <div className="container mt-4 alert alert-danger">

            404. NOT FOUND

        </div>
    )
}

const Layout = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 700px)' });

    // console.log(useLocation().pathname);

    return (

        <Suspense fallback="...is loading">
            {/* <ScrollToTop /> */}
            <Routes>

                <Route path='/login' element={<Login />} />
                <Route path='/sign-up' element={<Register />} />

                <Route path='/admin' element={<Admin />}>
                    <Route index element={<DashBoard />} />
                    <Route path="manage-product" element={<ManageProduct />} />
                </Route>


                {/* <Route path='/product' element={<Product />} >
                    <Route index element={<Booking />} /> */}
                {/* <Route path="home-page" element={<HomePage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="service" element={<Service />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="new" element={<New />}>  */}
                {/* <Route path="new-detail" element={<NewDetail />} /> */}
                {/* </Route>
                    <Route path="contact" element={<Contact />} /> */}
                {/* </Route> */}

                {isMobile ?
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePageMobile />} />
                        <Route path="about-us" element={<AboutUsMobile />} />
                        <Route path="service" element={<ServiceMobile />} />
                        <Route path="gallery" element={<GalleryMobile />} />
                        <Route path="contact" element={<ContactMobile />} />
                        <Route path='product' element={<ProductMobile />} />
                    </Route>
                    :
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route path="about-us" element={<AboutUs />} />
                        <Route path="service" element={<Service />} />
                        <Route path="gallery" element={<Gallery />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path='product' element={<Product />} />
                    </Route>
                }
                {/* <Route index element={<HomePage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="service" element={<Service />} />
                    <Route path="gallery" element={<Gallery />} />
                    {/* <Route path="new" element={<New />} /> 
                    <Route path="contact" element={<Contact />} />*/}


                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
            <ToastContainer />
        </Suspense>
    )

}

export default Layout;