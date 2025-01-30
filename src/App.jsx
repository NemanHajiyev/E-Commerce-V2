import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import FilteredProduct from './Pages/FIlteredProduct';
import './index.css';
import Cart from "./Pages/Cart";
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CheckoutPage from "./Pages/CheckoutPage";
import OrderInfo from "./Pages/OrderInfo";
import { useState } from "react";
import FavorieProducts from "./Components/FavorieProducts";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDTL from "./Components/ProductDTL";
import About from './Pages/About';
import Contact from "./Pages/Contact";
import Login from './Pages/Login';
import CategoryProduct from "./Components/CategoryProduct";

function App() {
  const [orderData, setOrderData] = useState();
  const [registerInfo, setRegisterInfo] = useState({})

  const Layout = ({ children }) => {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
      <>
        {!isLoginPage && <Navbar registerInfo={registerInfo} />}
        <CssBaseline />
        <Container maxWidth="lg">{children}</Container>
        {!isLoginPage && <Footer />}
      </>
    );
  };

  return (
    <>
      <ToastContainer />
      <div>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart setOrderData={setOrderData} orderData={orderData} />} />
              <Route path="/checkout-page" element={<CheckoutPage registerInfo={registerInfo} setOrderData={setOrderData} orderData={orderData} />} />
              <Route path="/order-info" element={<OrderInfo orderData={orderData} />} />
              <Route path="/favorie" element={<FavorieProducts />} />
              <Route path="/filtered-product" element={<FilteredProduct />} />
              <Route path="/product-detail/:id" element={<ProductDTL />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login registerInfo={registerInfo} setRegisterInfo={setRegisterInfo} />} />
              <Route path="/category-product" element={<CategoryProduct />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
