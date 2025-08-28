import React from 'react'
import { Link } from 'react-router-dom'

export default function TopNavbar() {
  return (
    <div>
      <header>
        <nav>
            <h1>New Page</h1>
            <ul>
                
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/entertainment">Entertainment</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/sports">Sports</Link></li>
                <li><Link to="/science">Science</Link></li>
                <li><Link to="/health">Health</Link></li>
                <li><Link to="/general">General</Link></li>
            </ul>
        </nav>
      </header>
    </div>
  )
}
