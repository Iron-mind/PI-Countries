import React  from "react";
import { NavLink } from 'react-router-dom';
import Logo from './LogoWorld.png'

import './Home.css'
import SearchBar from "./SearchBar";

export default function Nav() {
  return ( <header className="navbar">
   <div>
      <nav class="navbar navbar-light bg-light">
       
        <SearchBar />
      </nav>


    </div>

</header>)
  }