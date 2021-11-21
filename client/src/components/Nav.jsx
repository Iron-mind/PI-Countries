import React  from "react";
import SearchBar from "./SearchBar";
import world from './LogoWorld.png'
import './Nav.css'

export default function Nav() {
  return ( 
     
      <nav className="navbar">
        <div className='left-nav'>
        <img id="worldIcon" src={world} width="30" height="30"  alt="" />
        <h2 className='title-header'>Discover a new country</h2>

        </div>
        <SearchBar />
      </nav>

)
  }