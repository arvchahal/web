import { Link } from 'react-router-dom'

import '../css/navbar.css'   
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='home'>
            <Link to='/' className="Home">
            <span>Home</span>
            </Link>
        </div>
        <div className='projects'>
            <Link to='/projects' className='projects'>Projects</Link>   
        </div>
        <div className='research'>
            <Link to='/research' className='research'>Research</Link>    
        </div>
        

    </div>
  )
}

export default Navbar
