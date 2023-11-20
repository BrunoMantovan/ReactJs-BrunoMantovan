
import './App.css'
import Navbar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import {Routes, Route, BrowserRouter as Router, NavLink } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
    return(
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                    <Route path='*' element={<h2>404 NOT FOUND</h2>}/> 
                </Routes>
            </Router>
                    
        </>  
    )
}

export default App
