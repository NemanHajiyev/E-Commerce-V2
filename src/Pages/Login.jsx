import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/FireBase'
//
const provider = new GoogleAuthProvider();


const Login = ({ setRegisterInfo }) => {
    const navigate = useNavigate()

    const { t } = useTranslation();
    const [modal, setModal] = useState(true);

    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');

    const [img, setImg] = useState()
    const [data, setData] = useState({
        image: img,
        userName: ""
    })

    const loginWithGoogle = async () => {
        try {
            const response = await signInWithPopup(auth, provider)
            const user = response.user;
            if (user) {
                navigate('/')
            }
        } catch (error) {
            alert(error)
        }
    }

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                alert("Hesab Yaradildi");
                const userData = { image: img };
                localStorage.setItem("registerInfo", JSON.stringify(userData));
                setRegisterInfo(userData);
                SetEmail('');
                setPassword('');
                setModal(true);
            }
        } catch (error) {
            alert(error);
        }
    };


    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user && data.image) {
                const userData = {
                    image: data.image,
                    username: data.userName
                };
                localStorage.setItem("registerInfo", JSON.stringify(userData));
                navigate("/");
                setRegisterInfo(userData);
            } else {
                alert(t('loginpage.upload'));
            }
        } catch (error) {
            alert(error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 7 }}
            className="login">
            {modal ? (
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
                                value={data.userName}
                                onChange={(e) => setData({ userName: e.target.value })}
                                type="text"
                                placeholder={t("username")}
                                className="login-input" />
                            <input
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                type="text"
                                placeholder={t("contactpage.emailLabel")}
                                className="login-input" />

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder={t('password')}
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

                        <div className="login-buttons">
                            <div>
                                <button className="login-button" onClick={login}>{t('login')}</button>
                            </div>
                            <div onClick={loginWithGoogle} className="register-div">
                                <FcGoogle size={25} />
                                <span className="google-button">{t('google')}</span>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <a href="#" onClick={() => setModal(!modal)}>{t("noaccount")}</a>
                            </div>
                        </div>
                        <button className="guest-button" onClick={() => navigate('/')}>{t("loginpage.guest")}</button>
                    </div>
                </div>
            ) : (
                <div className="login-container">
                    <div className="login-right">
                        <h1>{t("register")}</h1>
                        <p>{t('regsitertitle')}</p>
                        <form className="login-form">
                            <input
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                type="text"
                                placeholder={t("contactpage.emailLabel")}
                                className="login-input" />

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder={t('password')}
                                className="login-input"
                            />
                        </form>
                        <div className="login-buttons">
                            <div>
                                <button
                                    onClick={register}
                                    className="login-button">{t('register')}</button>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <a href="#" onClick={() => setModal(!modal)}>{t('haveaccount')}</a>
                            </div>
                        </div>
                    </div>
                    <div className="login-left">
                        <img
                            src="https://img.freepik.com/free-vector/gradient-ui-ux-background_23-2149052117.jpg"
                            alt="Login Illustration"
                        />
                    </div>
                </div>
            )}
        </motion.div >
    );
};

export default Login;
