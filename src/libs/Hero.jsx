import React from "react";
import arrowRight from "./../assets/img/icon/arrow-right.svg";
import ImgGrid from "./ImgGrid";

const Hero = () => {
  return (
    <div className="flex mx-auto overflow-hidden p-2 bg-[#fff] py-5 mb-10">
      <div className="container mx-auto lg:flex w-full items-center justify-around py-10">
        <div className="flex flex-col mb-9 mx-auto lg:mb-0 gap-[38px] md:w-[548px]">
          <div className="flex flex-col text-center lg:text-start gap-5 md:gap-[20px]">
            <h4
              className=" text-[34px]  md:text-[64px] text-[#141414] font-[700] capitalize"
              style={{ lineHeight: "64px", fontFamily: "sora" }}
            >
              Show them don't just tell
            </h4>
            <p
              className="text-[14px] md:text-[20px] font-[400] "
              style={{
                fontFamily: "inter",
                lineHeight: "28px",
                color: "rgba(0, 0, 0, 0.75)",
              }}
            >
              Help your friends and loved ones by creating and sending videos on
              how to get things done on a website.
            </p>
          </div>
          <button
            className="flex mx-auto lg:mx-0 w-[239px] justify-center items-center gap-[8px] bg-[#120B48]"
            style={{ padding: "22px 24px", borderRadius: "8px" }}
          >
            <div className="flex items-center gap-[10px]">
              <span
                className="text-[#fff] font-sans font-[500] text-18px "
                style={{ lineHeight: "21.11px" }}
              >
                Install HelpMeOut{" "}
              </span>
              <img src={arrowRight} alt={arrowRight} />
            </div>
          </button>
        </div>
        <div className="p-4">
          <ImgGrid />
        </div>
      </div>
    </div>
  );
};

export default Hero;
