
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Restaurants from './pages/Restaurants'
import DetailsPage from './pages/DetailsPage'
import Michelin from './pages/Michelin'
import About from './pages/About'
import NotFoundPage from './pages/NotFoundPage'
import Footer from './components/Footer'
function App() {

  return (
    <div>
    <Navbar/>

<Routes>
<Route path="/" element={<Homepage/>}></Route>
<Route path="/restaurants" element={<Restaurants/>}></Route>
<Route path="/details" element={<DetailsPage/>}></Route>
<Route path="/michelin" element={<Michelin/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="*" element={<NotFoundPage/>}></Route>
</Routes>

<Footer/>

    </div>
  )
}

export default App
