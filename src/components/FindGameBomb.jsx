import React, { useState } from "react";

export const FindGameBomb = () => {
  const gridsize = 5;
  var totalTiles = gridsize * gridsize;
  const [clickedTiles, setclickedTiles] = useState([])

  const clickHandler = (index)=>{
    setclickedTiles([...clickedTiles,index])  
  }
  return (
    <div style={{ textAlign: "center" }}>
      <h1>FIND BOMB</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridsize},50px)`,
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalTiles }).map((_, index) => {
          return (
            <div
            onClick={()=>{clickHandler(index)}}
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                //backgroundColor: "white",
                backgroundColor:clickedTiles.includes(index)?"gray":"white",
                cursor: "pointer",
              }}
            >{index}</div>
          );
        })}
      </div>
    </div>
  );
};
