import { Link} from "react-router-dom";
import Logo from "../assests/Logo.png";

import React from "react";

function Navbar() {
  return (
    <div className="flex  justify-between  items-center  ">
      <div className=" w-[191px] h-[39px] top-[32px] left-[104px] absolute ml-20 ">
        <img src={Logo} />
      </div>
      <div className=" flex gap-[60px] items-center w-[525px] h-[48px]  top-[27px] left-[812px] absolute ml-52">
      <Link to="/">Home</Link>
      <Link  to="/flashcard">Flashcard</Link>
      <Link  to="/contact">Contact</Link>
      <Link  to="/faq">FAQ</Link>

      <Link  to="/button">    <button className="bg-custom-gradient w-20 h-8 rounded-xl text-white">
          Login
        </button>                  </Link>
       
      </div>
    </div>
  );
}

export default Navbar;
