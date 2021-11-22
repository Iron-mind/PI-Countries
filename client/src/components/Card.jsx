import React from "react";
import './Card.css'

import { Link } from "react-router-dom";

// id	106
// name	"South Georgia and the South Sandwich Islands"
// ID	"SGS"
// flagImage	"https://flagcdn.com/w320/gs.png"
// continent	"Antarctica"
// capital	"King Edward Point"
// area	"3903"
// subregion	null
// population_Size	30
// createdAt	"2021-11-16T00:32:21.586Z"
// updatedAt	"2021-11-16T00:32:21.586Z"
// activities	[]

export default function Card({name, continent ,flagImage, id}) {
  return (<div className='card' key={id.toString()}>

         <img src={flagImage} alt="" />
         <h4>{name}</h4>
         <span>
         <div className='spn'>Continent:  </div>
         <div>{continent}</div>
         </span>

         <Link to={'/home/'+id} style={{ textDecoration: 'none' }} >
         <button className="btn">More Info</button>

         </Link>

  </div>)
}
