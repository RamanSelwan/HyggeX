import React from "react";
import { IoMdRefresh } from "react-icons/io";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import { MdFullscreen } from "react-icons/md";
import Logo from "../assests/Frame 41.png";
import { FaPlusCircle } from "react-icons/fa";
import { AiOutlineBulb } from "react-icons/ai";
import { FaVolumeUp } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
function Main() {
  return (
    <div>
      <div className="flex items-baseline gap-1 ml-[30px] top-[150px] left-[150px] absolute ">
      <GoHome  className="w-4 h-4 "/>
<IoIosArrowForward />
<p>Flashcard</p>
<IoIosArrowForward />
<p>
  Mathematics
</p>
<IoIosArrowForward />
<p className="text-[#4278e5] font-medium"> Relations and Funcation</p>
      </div>
      <div className="w-[676px] h-[39px] top-[233px] left-[105px] absolute text-3xl font-bold bg-clip-text text-transparent bg-custom-gradient ml-20">
        <h2>Relations and Funcation (Mathmatics) </h2>
      </div>
      <div className=" w-[546px] h-[29px] top-[328px] left-[600px]  absolute flex gap-[40px]  items-center justify-center text-black  ">
        <a
          href="#"
          className="group inline-block text-zinc-500 no-underline hover:text-[#06286E] relative font-medium text-xl "
        >
          Study
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>

        <a
          href="#"
          className="group inline-block text-zinc-500 no-underline hover:text-[#06286E] relative text-xl "
        >
          Quiz
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>

        <a
          href="#"
          className="group inline-block text-zinc-500 no-underline hover:text-[#06286E] relative text-xl "
        >
          Test
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>


        <a
          href="#"
          className="group inline-block text-zinc-500 no-underline hover:text-[#06286E] relative text-xl "
        >
          Game
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>


        <a
          href="#"
          className="group inline-block text-zinc-500 no-underline hover:text-[#06286E] relative text-xl "
        >
          Others
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </a>

      </div>

      <div className="w-[712px] h-[485.19px] top-[389px] left-[520px] gap-[32px] absolute  ">
    <div className="flex items-center justify-around  top-[35px] left-[30px] absolute  gap-[550px]">
    < AiOutlineBulb  className=" w-6 h-6 gap-10 mr-10 text-[#fcfdff]"/>
      <FaVolumeUp  className=" w-6 h-6 gap-10 mr-10 text-[#eaedf5]"/>
    </div>
        
        <div class=" w-[712px] h-[393.19px] bg-custom-gradient  rounded-[42.5px] flex flex-col items-center justify-center text-3xl text-white font-medium tracking-wider">
       
           
           5+8-6/2+89-12= ?
        </div>

        <div className="flex  items-center justify-center gap-10 pt-4">
          <IoMdRefresh className=" w-8 h-8 gap-10 mr-10 text-[#06286E]" />
          <IoArrowBackCircle className=" w-[60px] h-[60px]  text-[#06286E]" />
          <p className="text-xl"> 01/10</p>
          <IoArrowForwardCircleSharp className="w-[60px] h-[60px] text-[#06286E]" />
          <MdFullscreen className=" w-8 h-8 ml-10 text-[#06286E]" />
        </div>
      </div>

      <div className="flex items-center justify-around  ">
        <div>
          <img
            className=" w-[217px] h-[120px] ml-20 top-[955px] left-[106px] gap-[21.26px] absolute"
            src={Logo}
          />
        </div>
        <div className="flex items-center justify-center w-[299px] h-[60px] top-[965px] left-[1200px] gap-[8px] absolute ">
          <FaPlusCircle className="w-8 h-8 text-[#06286E]" />
          <h2 className="   text-[#06286E]"> Create Flashcard</h2>
        </div>
      </div>
    </div>
  );
}

export default Main;
