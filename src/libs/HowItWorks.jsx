import React from "react";
import comput from "./../assets/img/desktop-removebg-preview.png";

const HowItWorks = () => {
  return (
    <div className="bg-[#fff] py-10">
      <div className="container p-2 mx-auto">
        <div>
          <div
            className="font-[700] flex justify-center text-[40px] text-[#141414] "
            style={{ fontFamily: "sora", lineHeight: "50.4px" }}
          >
            <span className=" text">How it works</span>
          </div>
        </div>
        <div className="flex overflow-auto pt-20 gap-[83px]">
          <div>
            <div className="flex flex-col text-center gap-[28px] justify-center items-center w-[328px] md:w-[358px]">
              <div
                className="bg-[#120B48] py-[14px] items-center flex justify-center px-[px] w-[68px] h-[67px]"
                style={{ borderRadius: "60px" }}
              >
                <span className=" text-white font-bold text-[32px]">1</span>
              </div>
              <div
                className="font-[600] text-[#1B233D] text-[28px]"
                style={{ fontFamily: "inter", lineHeight: "33.89px" }}
              >
                Record Screen
              </div>

              <div
                className="text-[#616163] text-[20px] font-[400] font-sans"
                style={{ lineHeight: "30.26px" }}
              >
                Click the "Start Recording" button in our extension. choose
                which part of your screen to capture and who you want to send it
                to.
              </div>
              <div>
                <img src={comput} alt={comput} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-center gap-[28px] justify-center items-center w-[328px] md:w-[358px]">
              <div
                className="bg-[#120B48] py-[14px] items-center flex justify-center px-[px] w-[68px] h-[67px]"
                style={{ borderRadius: "60px" }}
              >
                <span className=" text-white font-bold text-[32px]">2</span>
              </div>
              <div
                className="font-[600] text-[#1B233D] text-[28px]"
                style={{ fontFamily: "inter", lineHeight: "33.89px" }}
              >
                Share Your Recording
              </div>

              <div
                className="text-[#616163] text-[20px] font-[400] font-sans"
                style={{ lineHeight: "30.26px" }}
              >
                We generate a shareable link for your video. Simply send it to
                your audience via email or copy the link to send via any
                platform.
              </div>
              <div>
                <img src={comput} alt={comput} />
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col text-center gap-[28px] justify-center items-center w-[328px] md:w-[358px]">
              <div
                className="bg-[#120B48] py-[14px] items-center flex justify-center px-[px] w-[68px] h-[67px]"
                style={{ borderRadius: "60px" }}
              >
                <span className=" text-white font-bold text-[32px]">3</span>
              </div>
              <div
                className="font-[600] text-[#1B233D] text-[28px]"
                style={{ fontFamily: "inter", lineHeight: "33.89px" }}
              >
                Learn Effortlessly
              </div>

              <div
                className="text-[#616163] text-[20px] font-[400] font-sans"
                style={{ lineHeight: "30.26px" }}
              >
                Recipients can access your video effortlessly through the
                provided link, with our user-friendly interface suitable for
                everyone.
              </div>
              <div>
                <img src={comput} alt={comput} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
