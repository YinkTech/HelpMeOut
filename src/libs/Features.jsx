import React from "react";
import content from "./../assets/img/VideoRepository.png";
import recordcircle from "./../assets/img/icon/Iconplaceholder.png";
import send2 from "./../assets/img/icon/send.png";
import refreshsquare2 from "./../assets/img/icon/refresh.png";

const Features = () => {
  return (
    <div className=" bg-[#fff]">
    <div className="container mx-auto p-2 py-5 mb-10 md:flex flex-col gap-[56px]">
      <div className="flex text-center justify-center flex-col gap-[8px]">
        <div
          className="font-[700] text-[40px] text-[#141414] "
          style={{ fontFamily: "sora", lineHeight: "50.4px" }}
        >
          <span>Features</span>
        </div>
        <div
          className="font-[400] text-[20px] font-sans text-[#616163] "
          style={{ lineHeight: "30.26px" }}
        >
          <span>Key Highlights of Our Extension</span>
        </div>
      </div>

      <div className="lg:flex justify-between gap-[56px] mx-auto">
        <div className="flex  my-7 lg:mb-0 flex-col gap-[48px] md:w-[548px] ">
          <div className="flex gap-[16px]">
            <div className=" pt-2">
              <img
                src={recordcircle}
                className="w-[42px] h-[22px] md:w-[32px] md:h-[32px] "
                alt={recordcircle}
              />
            </div>
            <div>
              <b
                className="text-[#1B233D] font-[600] text-[20px] md:text-[28px]"
                style={{ fontFamily: "inter" }}
              >
                Simple Screen Recording
              </b>
              <p className="text-[#616163] ">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
          <div className=" pt-2">
              <img
                src={send2}
                className="w-[42px] h-[22px] md:w-[32px] md:h-[32px]"
                alt={send2}
              />
            </div>
            <div>
              <b

                className="text-[#1B233D] font-[600]  text-[20px] md:text-[28px]"
                style={{ fontFamily: "inter" }}
              >
                Easy-to-Share URL
              </b>
              <p className="text-[#616163] ">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>
          <div className="flex gap-[16px]">
          <div className=" pt-2">
              <img
                src={refreshsquare2}
                className="w-[42px] h-[22px] md:w-[32px] md:h-[32px] "
                alt={refreshsquare2}
              />
            </div>
            <div>
              <b
                className="text-[#1B233D] font-[600] text-[23px] md:text-[28px]"
                style={{ fontFamily: "inter" }}
              >
                Revisit Recordings
              </b>
              <p className="text-[#616163] ">
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div  className="p-4"style={{ borderRadius: "8px" }}>
          <img src={content} className="w-full" alt={content} />
        </div>
      </div>
    </div></div>
  );
};

export default Features;
