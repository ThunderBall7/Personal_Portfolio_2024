
import './App.css'
import Home from './components/home/Home'
import Navbar from './components/navBar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Work from './components/work/Work';
import Stack from './components/stack/Stack';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {


  return(
  <>
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/work' element={<Work />} />
        <Route path='/stack' element={<Stack/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />

      </Routes>


    </Router>
  </>
  )
}

export default App
