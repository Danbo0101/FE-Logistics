import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { Bounce, ToastContainer } from 'react-toastify';

import App from './App';
import HomePage from './component/HomePage/HomePage';
import AboutUs from "./component/General/AboutUs";
import Service from "./component/General/Service";
import Gallery from "./component/General/Gallery";
import New from "./component/General/New/New";
import Contact from "./component/General/Contact";
import NewDetail from './component/General/New/NewDetail';
import Login from './component/Auth/Login';

import Register from './component/Auth/Register';
import ManageProduct from './component/Admin/Sale/ManageProduct';
import Admin from './component/Admin/Admin';
import DashBoard from './component/Admin/DashBoard';
import 'react-toastify/dist/ReactToastify.css';
import Booking from './component/Products/Booking';
import Product from './component/Products/Product';







const NotFound = () => {
    return (
        <div className="container mt-4 alert alert-danger">

            404. NOT FOUND

        </div>
    )
}

const Layout = () => {

    console.log(useLocation().pathname);

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

                <Route path='/product' element={<Product />} >
                    <Route index element={<Booking />} />
                    {/* <Route path="home-page" element={<HomePage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="service" element={<Service />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="new" element={<New />}>  */}
                    {/* <Route path="new-detail" element={<NewDetail />} /> */}
                    {/* </Route>
                    <Route path="contact" element={<Contact />} /> */}
                </Route>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="service" element={<Service />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="new" element={<New />}>
                        {/* <Route path="new-detail" element={<NewDetail />} /> */}
                    </Route>
                    <Route path="contact" element={<Contact />} />

                </Route>
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