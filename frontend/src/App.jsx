import { Routes, Route, Link } from 'react-router-dom'
// import './index.css'
import './App.css'
import { Home } from './pages/Home.jsx'
import { Product } from './pages/Collections.jsx'
import { ProductDetailPage } from './pages/ProductDetailPage'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import CheckoutPage from './pages/CheckoutPage'
import CartPage from './pages/CartPage'
import {WishlistPage} from './pages/WishlistPage'


const MainLayout = ({ children }) => <><Navbar />{children}<Footer /></>;


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/collections" element={<MainLayout><Product /></MainLayout>} />
        <Route path="/collections/:id" element={<MainLayout><ProductDetailPage /></MainLayout>} />
        <Route path="/cart" element={<MainLayout><CartPage /></MainLayout>} />
        <Route path="/wishlist" element={<MainLayout><WishlistPage /></MainLayout>} />
        <Route path="/checkout" element={<MainLayout><CheckoutPage /></MainLayout>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  )
}

export default App
