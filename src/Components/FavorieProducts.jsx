import React from 'react'
import { useSelector } from 'react-redux'
import Favorie from '../Pages/Favorie';
import '../Styles/Favorie.css'
import { Link } from 'react-router-dom';
import { FaHeartBroken } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


const FavorieProducts = () => {
    const { favProducts } = useSelector((store) => store.product);
    const { t } = useTranslation();


    if (favProducts.length === 0) {
        return (
            <div className='emptyCart'>
                <FaHeartBroken className='empty-icon' />
                <h1>{t('favorites.emptyTitle')}</h1>
                <h4>{t('favorites.emptyDescription')}</h4>
                <Link to='/shop'><button>{t('cart.goToShopButton')}</button></Link>
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
