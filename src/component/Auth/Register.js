import { useNavigate } from 'react-router-dom';
// import logo from '../../assets/Logo.png'
// import Language from '../Header/Language';
import './Register.scss'
import { useState } from 'react';
// import { toast } from 'react-toastify';
import { ImSpinner6 } from "react-icons/im";
import PerfectScrollbar from 'react-perfect-scrollbar'
import HeaderAuth from '../Header/HeaderAuth';
// import { useTranslation, Trans } from 'react-i18next';







const Register = (props) => {

    // const navigate = useNavigate();
    // const { t } = useTranslation();

    // const [userName, setUserName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [agree, setAgree] = useState(false);
    // const [isLoading, setIsLoading] = useState(false);




    // const handleKeyDown = (event) => {
    //     console.log(event.key);
    //     if (event.key === "Enter") {
    //         handleSignUp();
    //     }
    // }

    // const validateEmail = (email) => {
    //     return String(email)
    //         .toLowerCase()
    //         .match(
    //             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    //         );
    // };

    // const handleChecked = (event) => {
    //     setAgree(event.target.checked);

    // };


    // const handleSignUp = () => {
    //     if (agree) {
    //         let isValidEmail = validateEmail(email)
    //         if (!userName) {
    //             toast.error(t('register.user-name.error'))
    //             return;
    //         }
    //         if (!isValidEmail) {
    //             toast.error(t('register.email.error'))
    //             return;
    //         }
    //         if (!password) {
    //             toast.error(t('register.password.error'))
    //             return;
    //         }
    //         setIsLoading("check", true);
    //         toast.success(t('register.success'))
    //         navigate('/')
    //     }
    //     else {
    //         toast.warning(t('register.agree.error'))
    //     }



    // setTimeout(handleLogin, 3000)



    // navigate('/')





    return (
        <div className="register-contanier">
            <div className="header-auth-container">
                <HeaderAuth />
            </div>
            <PerfectScrollbar>
                <div className="main-container">
                    <div className='content'>
                        <div className="title mx-auto">
                            SIGN UP
                        </div>
                        <div className="welcome mx-auto">
                            GATEWAY
                            <div className='welcome-sub'>
                                <hr />
                                LOGISTICS
                                <hr />
                            </div>
                        </div>
                        <div className="content-form  mx-auto">
                            <div className="form-group">
                                <label>User Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    // value={userName}
                                    placeholder="User Name ..."
                                // onChange={(event) => setUserName(event.target.value)}
                                // onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    // value={email}
                                    placeholder="Email ..."
                                // onChange={(event) => setEmail(event.target.value)}
                                // onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    // value={password}
                                    placeholder="Password ..."
                                // onChange={(event) => setPassword(event.target.value)}
                                // onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    // checked={agree}
                                    // onChange={handleChecked}
                                    id="agree-checkbox"
                                />
                                <label className="form-check-label" htmlFor="agree-checkbox">
                                    I agree to Terms of Service, Privacy Policy and Data Processing Agreement
                                </label>
                            </div>
                            <div>
                                <button
                                    className="btn-submit"
                                // onClick={() => handleSignUp()}
                                // disabled={isLoading}
                                > Sign Up
                                    {/* {isLoading === true && <ImSpinner6 className="loader-icon" />} */}
                                </button>
                            </div>
                            <div className='sign-up'>
                                Already have an account?
                                <span
                                // onClick={() => navigate('/login')}
                                >Sign In
                                </span>

                            </div>

                        </div>
                    </div>



                </div>
            </PerfectScrollbar>


        </div>
    )
}


export default Register;