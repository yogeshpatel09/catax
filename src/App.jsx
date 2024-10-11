
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from './pages/Header'
import AddTransaction from './component/addTransaction'
import Deposite from './component/Deposite'
import Withdrawal from './component/Withdrawal'
import Trade from './component/Trade'

function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/Header' element={<Header/>}></Route>
      <Route path='/' element={<AddTransaction/>}></Route>
      <Route path='/Deposite' element={<Deposite/>}></Route>
      <Route path='/Withdrawal' element={<Withdrawal/>}></Route>
      <Route path='/Trade' element={<Trade/>}></Route>
    </Routes>  
    </BrowserRouter>
  )
}

export default App
