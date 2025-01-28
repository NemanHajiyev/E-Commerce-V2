import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ registerInfo, setRegisterInfo }) => {
    const [modal, setModal] = useState(true);
    const [img, setImg] = useState()
    const navigate = useNavigate()


    const [data, setData] = useState({
        username: "",
        email: "",
        password: "",
        image: img
    })

    const getUserData = () => {
        setRegisterInfo(data)
    }

    const toHomePage = () => {
        navigate('/')
    }

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
                            <input
                                value={registerInfo.username}
                                onChange={(e) => setData({ ...data, username: e.target.value })}
                                type="text"
                                placeholder="Username"
                                className="login-input" />

                            <input
                                value={registerInfo.password}
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                                type="password"
                                placeholder="Password"
                                className="login-input"
                            />
                        </form>
                        <button className="login-button" onClick={toHomePage}>Login</button>

                        <p className="login-footer">
                            Don't have an account? <a onClick={() => setModal(false)}>Register now</a>
                        </p>
                    </div>
                </div>)
                :


                (
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
                                <input
                                    type="text"
                                    placeholder="Username"
                                    className="login-input"
                                    onChange={(e) => setData({ ...data, username: e.target.value })}
                                    value={data.username} />
                                <input
                                    type="text"
                                    placeholder="Email" className="login-input"
                                    onChange={(e) => setData({ ...data, email: e.target.value })}
                                    value={data.email} />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="login-input"
                                    value={data.password}
                                    onChange={(e) => setData({ ...data, password: e.target.value })}
                                />
                            </form>
                            <div className="upload-file">
                                <form action="files">
                                    <label htmlFor="file-upload" className="upload-btn">
                                        Upload
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="select-input"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                const imgURL = file ? URL.createObjectURL(file) : undefined;
                                                setImg(imgURL)
                                                setData((data) => ({
                                                    ...data, image: imgURL
                                                }))
                                            }}
                                        />
                                    </label>
                                </form>

                                {img && (
                                    <div className="image-preview">
                                        <img className="profil-picture" src={img} alt="Preview" />
                                    </div>
                                )}
                            </div>
                            <button className="login-button" onClick={getUserData}>Register</button>
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
