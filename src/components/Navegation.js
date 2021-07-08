import React from 'react'
import {Link} from "react-router-dom"
import './App.css'

export default function Navegation() {
    return (
        
            <ul className='navBar'>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/createapost">Create A Post</Link>
                </li>
                <li>
                <Link to="/showpost">Show Current Post</Link>
                </li>
            </ul>
        
    )
}
