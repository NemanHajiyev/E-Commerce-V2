import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Firebase/FireBase'


const Login = ({ setRegisterInfo }) => {

    const { t } = useTranslation();
    const [modal, setModal] = useState(true);
    const [email, SetEmail] = useState('');
    const [password, setPassword] = useState('');

    const [img, setImg] = useState()
    const navigate = useNavigate()


    const [data, setData] = useState({
        username: email,
        image: img
    }
    )

    const register = async () => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password)
            const user = response.user;
            if (user) {
                alert("Olusturuldu")
                SetEmail('');
                setPassword('')
                setModal(true)
                setRegisterInfo(data)
            }
        } catch (error) {
            alert(error)
        }
    }

    const login = async () => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                navigate("/");
                setRegisterInfo(data)
            }

        } catch (error) {
            alert(error)
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
                                value={data.username}
                                onChange={(e) => setData(e.target.value)}
                                type="text"
                                placeholder="Username"
                                className="login-input" />

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
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

                        <div className="login-buttons">
                            <div>
                                <button className="login-button" onClick={login}>{t('login')}</button>
                            </div>
                            <div className="register-div">
                                <FcGoogle size={25} />
                                <span className="google-button">Sign in with Google</span>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <a href="#" onClick={() => setModal(!modal)}>Don't have an account ?</a>
                            </div>
                        </div>
                        <button className="guest-button" onClick={() => navigate('/')}>{t("loginpage.guest")}</button>
                    </div>
                </div>
            ) : (
                <div className="login-container">
                    <div className="login-right">
                        <h1>Register</h1>
                        <p>Register olun</p>
                        <form className="login-form">
                            <input
                                value={data.username}
                                onChange={(e) => setData(e.target.value)}
                                type="text"
                                placeholder="Username"
                                className="login-input" />
                            <input
                                value={email}
                                onChange={(e) => SetEmail(e.target.value)}
                                type="text"
                                placeholder="E-mail"
                                className="login-input" />

                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                className="login-input"
                            />
                        </form>
                        <div className="login-buttons">
                            <div>
                                <button
                                    onClick={register}
                                    className="login-button">Register</button>
                            </div>
                            <div className="register-div">
                                <FcGoogle size={25} />
                                <span className="google-button">Sign up with Google</span>
                            </div>
                            <div style={{ marginTop: "10px" }}>
                                <a href="#" onClick={() => setModal(!modal)}>Already have an account ?</a>
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
