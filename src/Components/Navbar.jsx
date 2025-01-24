import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-div'>
                <div className='navbar-logo'>
                    <Link to="/" style={{ color: "black" }}>e-Shop</Link>
                </div>
                <div style={{ width: "60%" }}>
                    <form className='navbar-form'>
                        <input type="text" placeholder='Search Products ...' />
                        <FaSearch />
                    </form>
                </div>
                <div className='navbar-right'>
                    <Link to="/">
                        <FaShoppingCart />
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
