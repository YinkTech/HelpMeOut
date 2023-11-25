import React from "react";
import editIcon from "./../assets/img/icon/edit.png";
import { FiCopy } from "react-icons/fi";

import faceBook from "./../assets/img/icon/g12.png";
import whatsApp from "./../assets/img/icon/Vector.png";
import teleGram from "./../assets/img/icon/Artboard.png";
import Video from "./Video";

const Ready = () => {
  return (
    <div className="container mx-auto flex flex-col gap-[40px] my-20 ">
      <div className="flex justify-around">
        <div className="flex flex-col gap-[40px]">
          <div>
            <p
              className="text-[45px] font-[700]"
              style={{ lineHeight: "57px", fontFamily: "sora" }}
            >
              Your video is ready!
            </p>
          </div>
          <div className="flex flex-col gap-[34px]">
            <div>
              <b
                className="font-[500] text-[16px] text-[#727272]"
                style={{ fontFamily: "sora" }}
              >
                Name
              </b>
              <p
                className="text-[#413C6D] flex gap-[24px] text-[24px]"
                style={{ fontFamily: "sora" }}
              >
                Untitled_Video_20232509
                <img src={editIcon} alt={editIcon} />
              </p>
            </div>
            <div>
              <div
                className="w-full flex justify-between items-center"
                style={{
                  border: "1px solid #E7E7ED",
                  borderRadius: "16px",
                  background: "rgba(182, 179, 198, 0.2)",
                  padding: "12px 24px",
                }}
              >
                <input
                  type="text"
                  placeholder="enter email of receiver"
                  className="w-full text-[rgba(67, 67, 67, 0.8)] font-sans font-[400] border-0"
                  style={{ background: "none" }}
                />
                <button
                  className="bg-[#605C84] text-white "
                  style={{ borderRadius: "8px", padding: "10px 18px" }}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-[16px]">
              <b
                style={{
                  color: "#141414",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                Video Url
              </b>
              <div
                className="text-[#4B4B4B] font-[400] p-[12px] flex items-center gap-[8px] justify-between text-[16px] font-sans"
                style={{
                  border: "0.5px solid #929292",
                  padding: "10px 18px",
                  borderRadius: "16px",
                  background: "#FAFAFA",
                }}
              >
                <b>https://www.helpmeout/Untitled_Video_20232509</b>

                <button
                  className="text-[#120B48] font-[500] font-mono flex items-center gap-[8px]"
                  style={{
                    border: "1px solid #120B48",
                    padding: "10px 18px",
                    borderRadius: "8px",
                  }}
                >
                  <FiCopy />
                  copy
                </button>
              </div>
            </div>
            <div>
              <div className="flex flex-col gap-[16px]">
                <b
                  className=" font-[600] text-[16px] text-[#08051E]"
                  style={{ fontFamily: "sora" }}
                >
                  Share your video
                </b>
                <div className="flex gap-[16px]">
                  <button
                    className="text-[#0A0628] flex items-center gap-[8px] "
                    style={{
                      borderRadius: "6px",
                      padding: "12px 16px",
                      border: "1px solid #0A0628",
                    }}
                  >
                    <img src={faceBook} alt={faceBook} />
                    <span
                      className=" font-[500] text-[16px]"
                      style={{ fontFamily: "inter" }}
                    >
                      Facebook
                    </span>
                  </button>
                  <button
                    className="text-[#0A0628] flex items-center gap-[8px] "
                    style={{
                      borderRadius: "6px",
                      padding: "12px 16px",
                      border: "1px solid #0A0628",
                    }}
                  >
                    <img src={whatsApp} alt={whatsApp} />
                    <span
                      className=" font-[500] text-[16px]"
                      style={{ fontFamily: "inter" }}
                    >
                      WhatsApp
                    </span>
                  </button>
                  <button
                    className="text-[#0A0628] flex items-center gap-[8px] "
                    style={{
                      borderRadius: "6px",
                      padding: "12px 16px",
                      border: "1px solid #0A0628",
                    }}
                  >
                    <img src={teleGram} alt={teleGram} />
                    <span
                      className=" font-[500] text-[16px]"
                      style={{ fontFamily: "inter" }}
                    >
                      Telegram
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <Video />
          </div>
        </div>
      </div>

      <div className="lg:w-[747px] flex flex-col mx-auto justify-between items-center gap-[40px] text-center ">
        <p
          className=" md:text-[24px]"
          style={{
            fontFamily: "sora",
            fontWeight: "600",
            color: "#141414",
            lineHeight: "30.24px",
            textAlign: "center",
          }}
        >
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </p>

        <button
          style={{
            padding: "16px 32px",
            borderRadius: "8px",
            background: "#120B48",
            color: "#fff",
          }}
        >
          Save Video
        </button>
        <div
          className="md:text-[24px] font-[600]  "
          style={{ fontFamily: "sora", lineHeight: "30px" }}
        >
          <span className="text-[#7E7E7E]">Don’t have an account? </span>
          <span className="text-underline text-[#120B48]">Create account</span>
        </div>
      </div>
    </div>
  );
};

export default Ready;
