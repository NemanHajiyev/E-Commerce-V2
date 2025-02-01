import React, { useState } from "react";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Login = ({ setRegisterInfo }) => {
    const { t } = useTranslation();

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 7 }}
            className="login">
            <div className="login-container">
                <div className="login-left">
                    <img
                        src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                        alt="Login Illustration"
                    />
                </div>

                <div className="login-right">
                    <h1>{t('login')}</h1>
                    <p>{t('loginpage.title')}</p>
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
                                {t('loginpage.upload')}
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
                    <button className="login-button" onClick={toHomePage}>{t('login')}</button>
                    <button className="guest-button" onClick={() => navigate('/')}>{t("loginpage.guest")}</button>

                </div>
            </div>
        </motion.div >
    );
};

export default Login;
