import React from "react";
import logo from "./../assets/img/Layer2.png";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-[#fff] mb-1 px-2">
      <div className="container mx-auto flex justify-between items-center ">
        <div className="py-[12px] flex items-center gap-[8px]" style={{}}>
          <img src={logo} alt={logo} className="w-[40.01px]" />
          <span className="font-[700] text-[16px] " style={{fontFamily: 'inter'}}>Help Me Out</span>
        </div>
        <div className="hidden lg:block">
          <div>
            <ul className="flex capitalize font-sans font-[500] gap-2 ">
              <li>features</li>
              <li>how it works</li>
            </ul>
          </div>
        </div>
        <div className="hidden lg:block">
          <a className="text-[#120b48] font-[700] " style={{fontFamily: 'sora'}}>Get Started</a>
        </div>
        <FaBars className=" block lg:hidden" />
      </div>
    </div>
  );
};

export default NavBar;
