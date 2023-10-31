
import './App.css'
import Navbar from './components/NavBar/Navbar'
import Itemcontainer from './components/ItemContainer/Itemcontainer'
function App() {
    return(
        <>
        <Navbar/>
        <Itemcontainer 
        titulo={`Monitor Samsung 24" 75Hz`}
        precio={2000}
        
        />
        </>  
    )
}

export default App
