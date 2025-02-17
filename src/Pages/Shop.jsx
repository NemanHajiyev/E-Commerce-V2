import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { price, setProducts } from '../Redux/productSlice';
import { mockData } from '../MockData/mockData';
import Product from '../Pages/Product';
import '../Styles/Products.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const Shop = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product);
    const { t } = useTranslation();


    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])


    ///Paginate
    const [page, setPage] = useState(1);
    const itemsPerPage = 8;
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const startOffset = (page - 1) * itemsPerPage;
    const endOffset = startOffset + itemsPerPage;
    const currentItems = products.slice(startOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    ////////

    useEffect(() => {
        dispatch(price())
    }, [])

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: {
            opacity: 0,
            translateY: 20
        },
        visible: {
            opacity: 2,
            translateY: 0
        }
    }

    const [sortOrder, setSortOrder] = useState('');
    const handleSortChange = (e) => {
        const order = e.target.value;
        setSortOrder(order);
        dispatch(price({ order }));
    };


    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 2 }}
        >
            <select onChange={handleSortChange} value={sortOrder} className='Price-select'>
                <option value="">{t('ChoosePrice.Sort')}</option>
                <option value="cte">{t('ChoosePrice.CTE')}</option>
                <option value="etc">{t('ChoosePrice.ETC')}</option>
                <option value="az">{t('ChoosePrice.A-Z')}</option>
            </select>


            <motion.div
                initial="hidden"
                animate="visible"
                variants={container}
                className='products'>
                {currentItems?.map((product, index) => (
                    <Product getData={product} key={index} item={item} />
                ))}
            </motion.div>
            <div className='paginaton-div'>
                <Stack spacing={2} alignItems="center">
                    <Pagination
                        size='large'
                        count={pageCount}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                    />
                </Stack>
            </div>
        </motion.div>

    )
}

export default Shop;
