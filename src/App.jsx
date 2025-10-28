import './App.css'
import './styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetails from './pages/ProductDetails'
import BreadCrumbs from './components/BreadCrumbs'

function App() {
  return (
    <BrowserRouter>
    <BreadCrumbs />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/productList" element={<ProductList />}/>
        <Route path="/productList/:id" element={<ProductDetails />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
