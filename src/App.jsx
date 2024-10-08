
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Header from './pages/Header'
import Footer from './pages/Footer'
import Transactions02 from './pages/Transactions02'
function App() {
  

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Transactions02' element={<Transactions02/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
