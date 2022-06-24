import React from 'react';
import "../Location.css"
import { MdOutlineKeyboardArrowRight, MdClear } from "react-icons/md";

function Location() {
  return (
    <div className="places">
        <ul>
            <li>
                <span>Lagos</span>
                <MdOutlineKeyboardArrowRight />
            </li>
            <li>
                <span>London</span>
                <MdOutlineKeyboardArrowRight />
            </li>
            <li>
                <span>New York</span>
                <MdOutlineKeyboardArrowRight />
            </li>
        </ul>

        <MdClear className="mdclear"/>
    </div>
  )
}

export default Location