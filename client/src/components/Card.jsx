import React from "react";
import './Card.css'

import { Link } from "react-router-dom";



export default function Card({name, continent ,flagImage, id,ANID, population}) {



  return (<div className='card' key={id.toString()}>

         <img src={flagImage} alt="" />
         <h4>{name}</h4>
         <span>
         <div className='spn'>Continent:  {continent}</div>

         <div className='spn'>
         Population: {population>1000000?
           <span>{Math.round(population/1000000)} M</span>

           :population} </div>

         </span>

         <Link to={'/country/'+ANID} style={{ textDecoration: 'none' }} >
         <button className="btn">More Info</button>

         </Link>

  </div>)
}
