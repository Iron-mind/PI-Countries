import React  from "react";
import Nav from './Nav.jsx'
import './Home.css'

export default function Home() {
  return ( <div className="home">
     <Nav />
   <p>
      botones  de filtrado    |       countries result        {"\n"}
                              |      ________________            {"\n"}
                              |     |                |           {"\n"}
                              |     | countrie info  |
                              |     __________________
                              |
   </p>

</div>)
  }