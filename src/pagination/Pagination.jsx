import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./pagination.css"


function Pagination() {
  return (
    <ul className="pagination">
      <li>
        <Link className="link">1</Link>
      </li>
      <li>
        <Link className="link">2</Link>
      </li>
      <li>
        <Link className="link">
          <FaArrowRight />
        </Link>
      </li>
    </ul>
  );
}

export default Pagination;
