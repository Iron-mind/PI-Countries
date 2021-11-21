import React  from "react";
import Nav from './Nav.jsx'
import Options from "./Options.jsx";
import Cards from "./Cards.jsx";
import './Home.css'

export default function Home() {
  return ( <div className="home">
     <Nav />
     <div className="row">
       <aside> <Options/> </aside>
       <section><Cards/> </section>
     </div>
   
</div>)
  }