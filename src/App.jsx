import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import './index.css';
import Cart from "./Pages/Cart"
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import CheckoutPage from "./Pages/CheckoutPage"
import OrderInfo from "./Pages/OrderInfo"
import { useState } from "react"



function App() {

  const [orderData, setOrderData] = useState();

  return (
    <div style={{ height: '100vh' }}>
      <BrowserRouter>
        <Navbar />
        <CssBaseline />
        <Container Container maxWidth="lg" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart setOrderData={setOrderData} orderData={orderData} />} />
            <Route path="/checkout-page" element={<CheckoutPage setOrderData={setOrderData} orderData={orderData} />} />
            <Route path="/order-info" element={<OrderInfo orderData={orderData} />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
