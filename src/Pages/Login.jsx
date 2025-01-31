import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = ({ setRegisterInfo }) => {
    const [img, setImg] = useState()
    const navigate = useNavigate()


    const [data, setData] = useState({
        username: "user",
        password: "user",
        image: img
    })

    const toHomePage = () => {
        if (!data.image) {
            alert("Choose a photo");
        } else {
            localStorage.setItem("registerInfo", JSON.stringify(data));
            setRegisterInfo(data);
            navigate("/");
        }
    };

    return (
        <div className="login">
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
                            value={data.username}
                            onChange={(e) => setData({ ...data, username: e.target.value })}
                            type="text"
                            placeholder="Username"
                            className="login-input" />

                        <input
                            value={data.password}
                            onChange={(e) => setData({ ...data, password: e.target.value })}
                            type="password"
                            placeholder="Password"
                            className="login-input"
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
                    <button className="login-button" onClick={toHomePage}>Login</button>
                    <button className="guest-button" onClick={() => navigate('/')}>Continue as a guest</button>

                </div>
            </div>
        </div >
    );
};

export default Login;
