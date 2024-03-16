import './App.scss';
import { Outlet, useLocation } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Header from './component/Header/Header';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomePage from './component/HomePage/HomePage';


const App = () => {

  const navigate = useNavigate();
  const location = useLocation();


  // console.log(location.pathname);
  const [isHomePage, setIsHomePage] = useState(true);
  const [title, setTitle] = useState("")


  useEffect(() => {
    handleHomePage()
  }, [location])

  const handleHomePage = () => {
    if (location.pathname === "/") {
      setIsHomePage(true);
    }
    if (location.pathname === "/about-us") {
      setTitle("ABOUT US – VỀ CHÚNG TÔI");
      setIsHomePage(false);
    }
    if (location.pathname === "/service") {
      setTitle("GATEWAY SERVICE – DỊCH VỤ VẬN CHUYỂN GATEWAY");
      setIsHomePage(false);
    }
    if (location.pathname === "/gallery") {
      setTitle("GALLERY");
      setIsHomePage(false);
    }
    if (location.pathname === "/new") {
      setTitle("NEWS - TIN TỨC");
      setIsHomePage(false);
    }
    if (location.pathname === "/contact") {
      setTitle("CONTACT - LIÊN HỆ VỚI CHÚNG TÔI");
      setIsHomePage(false);
    }
  }

  return (
    <div className="app-contanier">
      <div className='header-contanier'>
        <Header
          isHomePage={isHomePage}
          title={title}
        />
      </div>
      <div className='main-container'>
        <PerfectScrollbar>
          <Outlet />
        </PerfectScrollbar>
      </div>

    </div>
  );
}

export default App;
