import React from 'react'
import { useSelector } from 'react-redux'
import Favorie from '../Pages/Favorie';
import '../Styles/Favorie.css'
import { Link } from 'react-router-dom';
import { FaHeartBroken } from 'react-icons/fa';


const FavorieProducts = () => {
    const { favProducts } = useSelector((store) => store.product);

    if (favProducts.length === 0) {
        return (
            <div className='emptyCart'>
                <FaHeartBroken className='empty-icon' />
                <h1>Your Favorie page is empty</h1>
                <h4>No product added to favorites</h4>
                <Link to='/shop'><button>Go To Shopping</button></Link>
            </div>
        );
    }

    return (
        <div className='favorie-div'>
            {
                favProducts?.map((favProduct) => (
                    <Favorie key={favProduct.id} favProduct={favProduct} />
                ))
            }
        </div>
    )
}

export default FavorieProducts
