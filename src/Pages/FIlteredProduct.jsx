import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'
import { Link } from 'react-router-dom'
import { BiError } from 'react-icons/bi'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

const FIlteredProduct = () => {
    const { filterProduct } = useSelector((store) => store.product)
    const { t } = useTranslation()

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
            className='products' style={{ display: "flex", justifyContent: "center", gap: "14px" }}>

            {
                filterProduct.length === 0 ? (

                    <div className='emptyCart'>
                        <BiError className='empty-icon' />
                        <h1>{t("notFound.notfoundproduct")}</h1>
                        <Link to='/shop'><button>{t('notFound.button')}</button></Link>
                    </div>
                ) : (
                    filterProduct?.map((product, index) => (
                        <Product getData={product} key={index} />
                    ))
                )
            }
        </motion.div>
    )
}

export default FIlteredProduct
