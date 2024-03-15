import { Routes, Route } from 'react-router-dom';
import { Suspense } from 'react';
import App from './App';
import HomePage from './component/HomePage/HomePage';
import AboutUs from "./component/General/AboutUs";
import Service from "./component/General/Service";
import Gallery from "./component/General/Gallery";
import New from "./component/General/New";
import Contact from "./component/General/Contact";






const NotFound = () => {
    return (
        <div className="container mt-4 alert alert-danger">

            404. NOT FOUND

        </div>
    )
}

const Layout = () => {
    return (
        < Suspense fallback="...is loading" >
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path='about-us' element={<AboutUs />} />
                    <Route path='service' element={<Service />} />
                    <Route path='gallery' element={<Gallery />} />
                    <Route path='new' element={<New />} />
                    <Route path='contact' element={<Contact />} />
                </Route>

            </Routes>

        </Suspense>
    )

}

export default Layout;