import React from "react";
import Genres from "../components/Genres";

export default function Special() {
  const saleDiscount = 0.5;
  return(
  <>
  <h1 style={{fontSize:"3rem", color: "#37BFC9", marginTop:"100px", marginBottom:"30px"}}>Weekend promotion for games from 2018</h1>
    <Genres platform="?&dates=2018-01-01,2018-12-31&ordering=-rating" sale={saleDiscount}/>
  </>
  )
}
