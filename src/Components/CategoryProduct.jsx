import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CategoryPr from '../Pages/CategoryPr'
import { useNavigate } from 'react-router-dom'
import { categoryProducts } from '../Redux/productSlice'
import '../Styles/CategoryProducts.css'
//
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material'

const CategoryProduct = () => {
    const { categoryProduct } = useSelector(store => store.product)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const getCategorie = (category) => {
        dispatch(categoryProducts(category));
        handleClose();
        navigate('/category-product');
    };

    //Categori -Materal -UI
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    /////////

    return (
        <div style={{ marginTop: "30px" }}>
            <div className='category-div'>
                <Button
                    id="basic-button"
                    onClick={handleClick}
                >
                    Select Category
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem onClick={() => getCategorie("Electronics")}>Electronics</MenuItem>
                    <MenuItem onClick={() => getCategorie("Fashion")}>Fashion</MenuItem>
                    <MenuItem onClick={() => getCategorie("Home&Kitchen")}>Kitchen</MenuItem>
                    <MenuItem onClick={() => getCategorie("Beauty")}>Beauty</MenuItem>
                    <MenuItem onClick={() => getCategorie("Sports")}>Sports</MenuItem>
                    <MenuItem onClick={() => getCategorie("Automotive")}>Automotive</MenuItem>
                </Menu>
                <button className='back-btn' onClick={() => navigate('/')}>⬅Back</button>
            </div>
            <div className='products'>
                {categoryProduct?.map((product) => (
                    <CategoryPr key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}

export default CategoryProduct;
