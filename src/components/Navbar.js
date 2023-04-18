import React from 'react'


export default function Navbar(props) {
  return (
 <nav className='flex'>
  <div className='logo'>
    <span>TextTool</span>
  </div>
  <ul>
    <li><a>Home</a></li>
    <li><a>About</a></li> 
  </ul>
 </nav>

  )
}

