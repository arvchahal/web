// 

import './css/App.css'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Projects from './components/projects'
import Research from './components/research'
function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/web" element={<Home />} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/research" element={<Research/>} />
      </Routes>
    </Router>
  )
}

export default App
