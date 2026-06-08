import React from "react";
import { Link } from "react-router-dom";
import { MyButton } from "../MyButton";

export const NetflixShows = () => {

  const showTest = ()=>{
    alert("show test")
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>NetflixShows</h1>
      <MyButton funName={showTest} bgcolor="gray"></MyButton>
      <Link to ="/common" state={{"from":"/netflixshows"}}>Common</Link>
      <li>
        <Link to="/watch/friends">Friends</Link>
      </li>
      <li>
        <Link to="/watch/moneyheiest">Money Heist</Link>
      </li>
      <li>
        <Link to="/watch/stranger things">Stranger Things</Link>
      </li>
      <li>
        <Link to="/watch/breaking bad">Breaking Bad</Link>
      </li>
    </div>
  );
};
