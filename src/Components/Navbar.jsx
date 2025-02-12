import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { FcLike } from 'react-icons/fc';
import { FaBasketShopping } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { filteredProducts } from '../Redux/productSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../Assets/images/logo.png';
///
import '../Language/i18n'
import { useTranslation } from 'react-i18next';
import { Toggle } from '../DarkLightMode/Toogle'
//
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../Firebase/FireBase';


const Navbar = ({ registerInfo, setRegisterInfo, orderData }) => {
    const { t, i18n } = useTranslation()

    const handleClick = async (lang) => {
        await i18n.changeLanguage(lang)
    }

    const { favProducts } = useSelector((store) => store.product)
    const { products } = useSelector((store) => store.cart);
    const [search, setSearch] = useState();
    const [user, setUser] = useState(true);
    const [hamburger, setHamburger] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch(filteredProducts(search));
        navigate('/filtered-product');
    };

    const handleLogout = async () => {

        try {
            await signOut(auth);
            localStorage.removeItem("registerInfo");
            setRegisterInfo({});
            navigate("/login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const openOrderSummary = () => {
        navigate('/order-info');
    };

    const location = useLocation();
    useEffect(() => {
        setHamburger(false);
    }, [location]);

    const registerInfoLength = Object.values(registerInfo);

    const getUserinfo = () => {
        onAuthStateChanged(auth, (userCredential) => {
            if (userCredential && (!registerInfo || !registerInfo.username)) {
                setRegisterInfo({
                    username: userCredential.displayName || registerInfo?.username || " ",
                    email: userCredential.email,
                    image: userCredential.photoURL || registerInfo?.image
                });
            }
        });
    };

    getUserinfo()


    return (
        <nav className='navbar'>
            <div className='navbar-div'>
                <Link to='/' className='navbar-logo'>
                    <img className='logo-img' src={logo} />
                    <p style={{ color: "black" }}>Fun<span>Store</span></p>
                </Link>
                <div style={{ width: "60%" }}>
                    <form className='navbar-form'>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t("input")} />
                        <FaSearch onClick={handleSearch} />
                    </form>
                </div>
                <Toggle />
                <div className="language-div">
                    <select onChange={(e) => handleClick(e.target.value)} className="language-select">
                        <option value="az">
                            Az
                        </option>
                        <option value="en">
                            En
                        </option>
                    </select>
                </div>

                <div className='navbar-right'>
                    <Link to='/favorie' className='shopping-icon' >
                        <FcLike />
                        <div className='basket-count'>{favProducts.length}</div>
                    </Link>

                    <Link to="/cart" className='shopping-icon'>
                        <FaBasketShopping />
                        <div className='basket-count'>{products.length}</div>
                    </Link>

                    <div className='register-login'>
                        {registerInfoLength.length === 0 ? (
                            <>
                                <Link to='/login'>{t("login")}</Link>
                            </>
                        ) : (
                            <div className='PP'>
                                <p>{registerInfo.username}</p>
                                <img src={registerInfo.image} />
                            </div>
                        )}
                    </div>

                    <div className="user-dropdown">
                        <button
                            className="user-btn"
                            onClick={() => setUser(!user)}
                        >
                            {user ? (
                                <div>
                                    <FaUser className='user-icon' />
                                </div>
                            ) : (
                                <>
                                    {registerInfoLength.length === 0 ? (
                                        <FaUser className='user-icon' />
                                    ) : (
                                        <>
                                            <FaUser className='user-icon' />
                                            <div className="dropdown-menu-user">
                                                <ul>
                                                    <li onClick={handleLogout}>
                                                        <button className="dropdown-item">{t("logout")}</button>
                                                    </li>
                                                    <li onClick={() => navigate('/shop')}>
                                                        <button className="dropdown-item">{t("shop")}</button>
                                                    </li>
                                                    <li onClick={openOrderSummary}>
                                                        <button className="dropdown-item">{t("order")}</button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </>
                                    )}
                                </>
                            )}
                        </button>
                    </div>
                </div>

                <div className="hamburger-container">
                    <GiHamburgerMenu
                        onClick={() => setHamburger(!hamburger)}
                        className={`hamburger-menu ${hamburger ? 'active' : ''}`}
                    />
                    {hamburger? (
                        <>
                        {registerInfoLength.length > 0 ? (
                            <div className="dropdown-menu active">
                            <ul>
                                <button className="dropdown-item" onClick={() => navigate('/shop')}>{t('shop')}</button>
                                <button className="dropdown-item" onClick={() => navigate('/cart')}>{t('basket')}</button>
                                <button className="dropdown-item" onClick={() => navigate('/favorie')}>{t('favorie')}</button>
                            </ul>
                        </div>
                        ):(
                            <div className="dropdown-menu active">
                            <ul>
                                <button className="dropdown-item" onClick={() => navigate('/login')}>{t('login')}</button>
                                <button className="dropdown-item" onClick={() => navigate('/shop')}>{t('shop')}</button>
                                <button className="dropdown-item" onClick={() => navigate('/cart')}>{t('basket')}</button>
                                <button className="dropdown-item" onClick={() => navigate('/favorie')}>{t('favorie')}</button>              
                            </ul>
                        </div>
                        )}
                        </>
                    ):(
                        null
                    )
                    
                    }
                </div>
            </div>
            <div className='Pages-link'>
                <Link to="/" className='Link'>{t('home')}</Link>
                <Link to="/shop" className='Link'>{t('shop')}</Link>
                <Link to="/contact" className='Link'>{t('contact')}</Link>
                <Link to="/about" className='Link'>{t('about')}</Link>
            </div>
        </nav>
    );
};

export default Navbar;
