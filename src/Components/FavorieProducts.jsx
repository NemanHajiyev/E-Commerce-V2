import React from 'react'
import { useSelector } from 'react-redux'
import Favorie from '../Pages/Favorie';
import '../Styles/Favorie.css'

const FavorieProducts = () => {
    const { favProducts } = useSelector((store) => store.product);

    return (
        <div className='favorie-div'>
            {
                favProducts && favProducts.map((favProduct) => (
                    <Favorie favProduct={favProduct} />
                ))
            }
        </div>
    )
}

export default FavorieProducts
