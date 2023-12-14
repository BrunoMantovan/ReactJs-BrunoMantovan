
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Routes, Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import CartContextComponent from './components/Context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

function App() {
    return(
        <>
            <CartContextComponent>
                <Router>
                    <Navbar/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                        <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='*' element={<h2>404 NOT FOUND</h2>}/> 
                    </Routes>
                </Router>
            </CartContextComponent>    
        </>
    )
}

export default App
