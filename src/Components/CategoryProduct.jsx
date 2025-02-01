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
import { useTranslation } from 'react-i18next'
import { Categories } from '../MockData/mockData'
//

const CategoryProduct = () => {
    const { categoryProduct } = useSelector(store => store.product)
    const { t } = useTranslation()
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
                    {t('category')}
                </Button>
                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
                    {Categories?.map((category) => (
                        <MenuItem onClick={() => getCategorie(t(category.original))}>{t(category.key)}</MenuItem>
                    ))}
                </Menu>
                <button className='back-btn' onClick={() => navigate('/')}>⬅{t('back')}</button>
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
