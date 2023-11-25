import React from "react";
import logo from "./../assets/img/footerlogo.png";

const Footer = () => {
  return (
    <div className="bg-[#120B48] text-[#fff]">
      <div className="flex flex-col md:flex-row gap-7 md:gap-[243px] px-[30px] py-[28px] lg:px-[130px] lg:py-[98px]">
        <div>
          <div className="flex items-center gap-[10px]">
            <img src={logo} alt={logo} />
            <span
              className="font-[700] text-[16px] "
              style={{ fontFamily: "inter", lineHeight: "19.36px" }}
            >
              {" "}
              HelpMeOut
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center items-start justify-between w-full">
          <div className="flex flex-col gap-[26px]">
            <p
              style={{ fontFamily: "sora", lineHeight: "20.16px" }}
              className="font-[600] text-[16px]"
            >
              Menu
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Home
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              converter
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              How it Works
            </p>
          </div>
          <div className="flex flex-col my-10 md:my-0 gap-[26px]">
            <p
              style={{ fontFamily: "sora", lineHeight: "20.16px" }}
              className="font-[600] text-[16px]"
            >
              About us
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              About
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Contact Us
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Privacy Policy
            </p>
          </div>
          <div className="flex flex-col gap-[26px]">
            <p
              style={{ fontFamily: "sora", lineHeight: "20.16px" }}
              className="font-[600] text-[16px]"
            >
              Screen Record
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Browser Window
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Desktop
            </p>
            <p
              style={{ lineHeight: " 18.77px" }}
              className="font-[400] font-sans text-[16px]"
            >
              Application
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
