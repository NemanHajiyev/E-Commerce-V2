import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-div'>
                <div className='navbar-logo'>
                    <Link to="/">E-Shop</Link>
                </div>
                <div>
                    <form className='navbar-form'>
                        <input type="text" placeholder='Search Products ...' />
                        <FaSearch></FaSearch>
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
        </nav>
    )
}

export default Navbar
