import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import '../Styles/Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { FaBasketShopping } from 'react-icons/fa6'
import { useState } from 'react'
import { filteredProducts } from '../Redux/productSlice'

const Navbar = () => {
    const { products } = useSelector((store) => store.cart);
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSearch = () => {
        dispatch(filteredProducts(search))
        navigate('/filtered-product')
    }



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

                    <button>
                        Login | Register
                    </button>

                    <button>
                        <FaUser />
                    </button>
                </div>
            </div>
            <div className='Pages-link'>
                <Link to="/" className='Link'>Home</Link>
                <Link to="/shop" className='Link'>Shop</Link>
                <Link to="/" className='Link'>Contact</Link>
                <Link to="/" className='Link'>About</Link>
            </div>
        </nav>
    )
}

export default Navbar
