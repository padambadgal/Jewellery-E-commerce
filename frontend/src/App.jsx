import {Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import { Product } from './pages/Product.jsx'
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const MainLayout = ({ children }) => <><Navbar />{children}<Footer /></>;


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={ <MainLayout><Home /></MainLayout>} />
        <Route path="/collection" element={<MainLayout><Product /></MainLayout>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  )
}

export default App
