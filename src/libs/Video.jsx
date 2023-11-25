import React from "react";
import videoImg from "./../assets/img/video.png";
import twxt from "./../assets/img/texts.png";

const Video = () => {
  return (
    <div className="flex flex-col gap-[50px] w-2/3 mx-auto">
      <img src={videoImg} className="w-full" alt={videoImg} />
      <div className="flex flex-col gap-[40px]">
        <div>
          <h5
            className="text-[24px] font-[600] "
            style={{ fontFamily: "sora" }}
          >
            Transcript
          </h5>
          <div
            className="w-1/3"
            style={{
              border: "1px solid #CFCFCF",
              color: "#CFCFCF",
            }}
          >
            <select className="w-full" name="" id="">
              <option value=""> English </option>
            </select>
          </div>
        </div>
        <div>
          <img src={twxt} className="w-full" alt={twxt} />
        </div>
      </div>
    </div>
  );
};

export default Video;
