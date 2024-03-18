import { Routes, Route, useLocation } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import ScrollToTop from "./ScrollToTop"
import App from './App';
import HomePage from './component/HomePage/HomePage';
import AboutUs from "./component/General/AboutUs";
import Service from "./component/General/Service";
import Gallery from "./component/General/Gallery";
import New from "./component/General/New/New";
import Contact from "./component/General/Contact";
import NewDetail from './component/General/New/NewDetail';
import Login from './component/Auth/Login';
import User from './component/User/User';







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

                <Route path='/user' element={<User />} />
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
        </Suspense>
    )

}

export default Layout;