
import { Link } from 'react-router-dom'

export default function Navbar(props) {

  return (
 <nav className='flex'>
  <div className='logo'>
    <span>TextTool</span>
  </div>
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About</Link></li> 
  </ul>
 </nav>

  )
}

