import { FaSearch, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { FaBasketShopping } from 'react-icons/fa6'
import { useState } from 'react'
import { filteredProducts } from '../Redux/productSlice'

const Navbar = ({ registerInfo }) => {
    const { products } = useSelector((store) => store.cart);
    const [search, setSearch] = useState()
    const [user, setUser] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch(filteredProducts(search))
        navigate('/filtered-product')
    }


    console.log(registerInfo)

    const registerInfoLenght = Object.values(registerInfo)

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
                        {registerInfoLenght.length === 0 ? (
                            <>
                                <Link to='/login'>Login</Link>
                                |
                                <Link to='/login'>Register</Link>
                            </>

                        ) : (
                            <div className='PP'>
                                <p>{registerInfo.username}</p>
                                <img src={registerInfo.image} />
                            </div>

                        )
                        }
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
                        </button>


                    </div>


                </div>
            </div>
            <div className='Pages-link'>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/shop" className='Link'>Shop</Link>
                <Link to="/contact" className='Link'>Contact</Link>
                <Link to="/about" className='Link'>About</Link>
            </div>
        </nav>
    )
}

export default Navbar
