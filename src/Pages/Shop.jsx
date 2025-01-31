import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux/productSlice';
import { mockData } from '../MockData/mockData';
import Product from '../Pages/Product';
import '../Styles/Products.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const Shop = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)

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

    return (

        <div>
            <div className='products'>
                {currentItems?.map((product, index) => (
                    <Product getData={product} key={index} />
                ))}
            </div>
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
        </div>

    )
}

export default Shop;
