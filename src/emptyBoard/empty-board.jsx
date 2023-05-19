import React from 'react';
import icon from "../img/icon.svg";

const EmptyBoard = () => {
  return (
    <>
      <figure>
        <img src={icon} alt="icon"/>
      </figure>
      <p>empty board</p>
      <p>Перетащите сюда любой элемент из левой панели</p>
    </>
  );
};

export default EmptyBoard;