import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ImSpinner6 } from "react-icons/im";
import PerfectScrollbar from 'react-perfect-scrollbar'
import HeaderAuth from '../Header/HeaderAuth';
import _ from "lodash";
// import { doLogin } from '../../redux/action/userAction';







const Login = (props) => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const { t } = useTranslation();

    const [data, setData] = useState([
        {
            id: 1,
            email: "p@gmail.com",
            name: "Phuong",
            password: "123456",
            role: "USER"
        },
        {
            id: 2,
            email: "t@gmail.com",
            name: "THUAN",
            password: "123456",
            role: "ADMIN"
        },

    ])


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyDown = (event) => {
        console.log(event.key);
        if (event.key === "Enter") {
            handleLogin();
        }
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };



    const handleLogin = () => {
        let isValidEmail = validateEmail(email)
        if (!isValidEmail) {
            toast.error("Invalid Email")
            return;
        }
        if (!password) {
            toast.error("Invalid Password")
            return;
        }
        setIsLoading(true);

        handleDataLogin();

        // if (email === "p@gmail.com" && password === "123456") {
        //     alert("me");
        //     navigate("/user");
        // }



        // dispatch(doLogin(dataClone));



        // setTimeout(handleLogin, 3000)

        // navigate('/')


    }

    const handleDataLogin = () => {
        let dataClone = _.cloneDeep(data);
        dataClone.map((user, index) => {
            if (user.email === email && user.password === password) {
                if (user.role === "ADMIN") {
                    navigate("/admin")
                    return;
                }
                else {
                    navigate("/user")
                    return;
                }
            }
        })
    }


    return (
        <div className="login-contanier">
            <div className='header-auth-container'>
                <HeaderAuth />
            </div>

            <PerfectScrollbar>
                <div className="main-container">
                    <div className='content'>
                        <div className="title mx-auto">
                            Welcome !
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
                                <label> Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    placeholder="Email ...."
                                    onChange={(event) => setEmail(event.target.value)}
                                    onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    value={password}
                                    placeholder="Password ..."
                                    onChange={(event) => setPassword(event.target.value)}
                                    onKeyDown={(event) => handleKeyDown(event)}
                                />
                            </div>
                            <span
                                className="forgot"
                            // onClick={() => navigate('/forgot-password')}
                            >Forgot Password ?
                            </span>
                            <div>
                                <button
                                    className="btn-submit"
                                    onClick={() => handleLogin()}
                                    disabled={isLoading}
                                >Login
                                    {isLoading === true && <ImSpinner6 className="loader-icon" />}
                                </button>
                            </div>
                            <div className='sign-up'>
                                Don’t have an account?
                                <span
                                    onClick={() => navigate('/register')}
                                >  Sign Up
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