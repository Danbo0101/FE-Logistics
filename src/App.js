import './App.scss';
import { Outlet } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'
import Header from './component/Header/Header';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import HomePage from './component/HomePage/HomePage';


const App = () => {

  const navigate = useNavigate();

  const [isHomePage, setIsHomePage] = useState(false);



  const handleHomePage = () => {
    // console.log("1");
    setIsHomePage(true);
    navigate("/");
  }

  return (
    <div className="app-contanier">
      <div className='header-contanier'>
        <Header
          isHomePage={isHomePage}
        />
      </div>
      <div className='main-container'>
        <PerfectScrollbar>
          <HomePage
            handleHomePage={handleHomePage}
          />
        </PerfectScrollbar>
      </div>

    </div>
  );
}

export default App;
