import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Checkout from './pages/Checkout'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (
    <BrowserRouter>
   <Header/>

   <Routes>
    <Route path='/' element={<MainPage/>}/>
    <Route path='/basket' element={<Checkout/>}/>
   </Routes>
<ToastContainer/>
   </BrowserRouter>
  )
}

export default App
