import { Fragment, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
    
        
        
        {/* <Navbar/> */}
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/" element={
            <Fragment>
            <Navbar/>
            <Home/>
          </Fragment>} />
          
            {/* <Route  element={<Home/>} /> */}
           {/* <Route path="/" element={<Home />} /> */}
           {/*<Route path="/contact" element={<Contact />} /> */}
        
    
    </Routes>
  )
}

export default App
