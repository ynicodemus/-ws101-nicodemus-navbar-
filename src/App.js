import Navbar from './navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/contact' element = {<Contact />} />
          <Route path='/about' element = {<About />} />
        </Routes>

      </div>

      
    </>
  )
  }

export default App;
