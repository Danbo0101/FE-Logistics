import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

import './Login.scss'
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { ImSpinner6 } from "react-icons/im";
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useTranslation, Trans } from 'react-i18next';
// import { doLogin } from '../../redux/action/userAction';







const Login = (props) => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { t } = useTranslation();

    // const [dataClone, setDataClone] = useState({
    //     email: "p@gmail.com",
    //     name: "Phuong",
    //     role: "ADMIN"
    // })


    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [isLoading, setIsLoading] = useState(false);

    // const handleKeyDown = (event) => {
    //     console.log(event.key);
    //     if (event.key === "Enter") {
    //         handleLogin();
    //     }
    // }

    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };



    // const handleLogin = () => {
    //     let isValidEmail = validateEmail(email)
    //     if (!isValidEmail) {
    //         toast.error(t('login.email.error'))
    //         return;
    //     }
    //     if (!password) {
    //         toast.error(t('login.password.error'))
    //         return;
    //     }
    //     setIsLoading(true);

    //     dispatch(doLogin(dataClone));


    //     toast.success(t('login.success'))
    //     // setTimeout(handleLogin, 3000)

    //     navigate('/')


    // }


    return (
        <div className="login-contanier">
            <div className="header-container">

            </div>
            <PerfectScrollbar>
                <div className="main-container">
                    <div className='content'>
                        <div className="title mx-auto">
                            Ga
                        </div>
                        <div className="welcome mx-auto">
                            PT Booking
                            <div className='welcome-sub'>
                                <hr />
                                PTIT SCHOOL
                                <hr />
                            </div>



                        </div>
                        <div className="content-form  mx-auto">
                            <div className="form-group">
                                <label> {t('login.email.title')}</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    placeholder={t('login.email.content')}
                                    onChange={(event) => setEmail(event.target.value)}
                                    onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>{t('login.password.title')}</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    placeholder={t('login.password.content')}
                                    onChange={(event) => setPassword(event.target.value)}
                                    onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <span
                                className="forgot"
                                onClick={() => navigate('/forgot-password')}
                            >{t('login.forgot-password')}
                            </span>
                            <div>
                                <button
                                    className="btn-submit"
                                    onClick={() => handleLogin()}
                                    disabled={isLoading}
                                >{t('login.btn')}
                                    {isLoading === true && <ImSpinner6 className="loader-icon" />}
                                </button>
                            </div>
                            <div className='sign-up'>
                                {t('login.sign-up.ask')}
                                <span
                                    onClick={() => navigate('/register')}
                                >  {t('login.sign-up.btn')}
                                </span>

                            </div>

                        </div>
                    </div>



                </div>
            </PerfectScrollbar>


        </div>
    )
}

export default Login;