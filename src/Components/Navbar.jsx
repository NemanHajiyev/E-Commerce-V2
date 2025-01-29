import { FaSearch, FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Styles/Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { FcLike } from 'react-icons/fc';
import { FaBasketShopping } from 'react-icons/fa6';
import { useEffect, useState } from 'react';
import { filteredProducts } from '../Redux/productSlice';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = ({ registerInfo }) => {
    const { products } = useSelector((store) => store.cart);
    const [search, setSearch] = useState();
    const [user, setUser] = useState(true);
    const [hamburger, setHamburger] = useState(false);  // Başlangıçta hamburger menüsü kapalı

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSearch = () => {
        dispatch(filteredProducts(search));
        navigate('/filtered-product');
    };


    const location = useLocation();
    useEffect(() => {
        setHamburger(false);
    }, [location]);


    const registerInfoLength = Object.values(registerInfo);

    return (
        <nav className='navbar'>
            <div className='navbar-div'>
                <div className='navbar-logo'>
                    <Link to="/" style={{ color: "black" }}>e-Shop</Link>
                </div>
                <div style={{ width: "60%" }}>
                    <form className='navbar-form'>
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder='Search Products ...' />
                        <FaSearch onClick={handleSearch} />
                    </form>
                </div>
                <div className='navbar-right'>
                    <Link to='/favorie'>
                        <FcLike style={{ marginTop: "10px" }} />
                    </Link>

                    <Link to="/cart" className='shopping-icon'>
                        <FaBasketShopping />
                        <div className='basket-count'>{products.length}</div>
                    </Link>

                    <div className='register-login'>
                        {registerInfoLength.length === 0 ? (
                            <>
                                <Link to='/login'>Login</Link>
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
                                            <div className="dropdown-menu">
                                                <ul>
                                                    <li onClick={() => navigate('/login')}>
                                                        <button className="dropdown-item">Log Out</button>
                                                    </li>
                                                    <li onClick={() => navigate('/shop')}>
                                                        <button className="dropdown-item">Go to Shop</button>
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
                    {hamburger && (
                        <div className="dropdown-menu active">
                            <ul>
                                <button className="dropdown-item" onClick={() => navigate('/login')}>Login</button>
                                <button className="dropdown-item" onClick={() => navigate('/shop')}>Go to Shop</button>
                                <button className="dropdown-item" onClick={() => navigate('/cart')}>Basket</button>
                                <button className="dropdown-item" onClick={() => navigate('/favorie')}>Favorie</button>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            <div className='Pages-link'>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/shop" className='Link'>Shop</Link>
                <Link to="/contact" className='Link'>Contact</Link>
                <Link to="/about" className='Link'>About</Link>
            </div>
        </nav>
    );
};

export default Navbar;
