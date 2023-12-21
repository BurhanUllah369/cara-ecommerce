import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavLi({ content, to, isActive }) {
  return (
    <li>
      <Link to={to} className={isActive ? 'active' : ''}>
        {content}
      </Link>
    </li>
  );
}

export default NavLi;
