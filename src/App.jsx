
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
import Edit from './pages/Edit'
function App() {

  return (
    <div>
    <Navbar/>

<Routes>
<Route path="/" element={<Homepage/>}></Route>
<Route path="/restaurants" element={<Restaurants/>}></Route>
<Route path="/details/:restaurantID" element={<DetailsPage />} />
<Route path="/edit/:restaurantID" element={<Edit/>}></Route>
<Route path="/michelin" element={<Michelin/>}></Route>
<Route path="/about" element={<About/>}></Route>
<Route path="*" element={<NotFoundPage/>}></Route>
</Routes>

<Footer/>

    </div>
  )
}

export default App
