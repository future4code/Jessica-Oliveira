import React from "react";
import "../CardPequeno/CardPequeno.css";

function CardPequeno(props) {
  return (
    <div className="small-card-container">
      <img src={props.imagem} />
      <div>
        <p> {props.texto} </p>
      </div>
    </div>
  );
}

export default CardPequeno;
