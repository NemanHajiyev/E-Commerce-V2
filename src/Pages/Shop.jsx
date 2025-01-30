import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../Redux/productSlice';
import { mockData } from '../MockData/mockData';
import Product from '../Pages/Product';
import '../Styles/Products.css';
import ReactPaginate from 'react-paginate';



const Shop = () => {
    const dispatch = useDispatch();
    const { products } = useSelector(state => state.product)
    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 10
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };



    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [])


    return (
        <div >
            <div className='products'>
                {currentItems?.map((product, index) => (
                    <Product getData={product} key={index} />
                ))}
            </div>
            <div className='paginaton-div'>
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    )
}

export default Shop
