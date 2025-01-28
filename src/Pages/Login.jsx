import React, { useState } from "react";
import "../Styles/Login.css";

const Login = () => {

    const [modal, setModal] = useState(true);


    return (
        <div className="login">
            {modal ? (
                <div className="login-container">
                    <div className="login-left">
                        <img
                            src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                            alt="Login Illustration"
                        />
                    </div>

                    <div className="login-right">
                        <h1>Login</h1>
                        <p>Please enter your credentials to log in.</p>
                        <form className="login-form">
                            <input type="text" placeholder="Username" className="login-input" />
                            <input
                                type="password"
                                placeholder="Password"
                                className="login-input"
                            />
                            <button className="login-button">Login</button>
                        </form>
                        <p className="login-footer">
                            Don't have an account? <a onClick={() => setModal(false)}>Register now</a>
                        </p>
                    </div>
                </div>
            )
                : (
                    <div className="login-container">
                        <div className="login-left">
                            <img
                                src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                                alt="Login Illustration"
                            />
                        </div>

                        <div className="login-right">
                            <h1>Sign Up</h1>
                            <p>Please enter your credentials.</p>
                            <form className="login-form">
                                <input type="text" placeholder="Username" className="login-input" />
                                <input type="text" placeholder="Email" className="login-input" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="login-input"
                                />
                                <button className="login-button">Register</button>
                            </form>
                            <p className="login-footer">
                                Do you already have an account? <a onClick={() => setModal(true)}>Login Now</a>
                            </p>
                        </div>
                    </div>
                )}

        </div >
    );
};

export default Login;
