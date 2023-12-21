import React from "react";

function PerksLi({url, text}) {
  return (
    <li>
      <img src={url} alt="" />
      <p>{text}</p>
    </li>
  );
}

export default PerksLi;
