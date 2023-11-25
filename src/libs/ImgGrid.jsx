import React from "react";
import woman from "./../assets/img/AdobeStock_400053098 1.png";
import people from "./../assets/img/AdobeStock_362497671 1.png";
import girl from "./../assets/img/woman-using-smartphone-technology 2.png";
import grid1 from "./../assets/img/grid1.png";
import grid2 from "./../assets/img/grid2.png";

const ImgGrid = () => {
  return (
    <div className=" w-1/2 md:w-full">
      <div className=" w-1/2 md:w-full">
        <div className=" relative">
          <div className="absolute w-full">
            <div className="p-2">
              <div className="flex justify-end w-full ">
                <div className="flex justify-end h-1/4 md:h-full md:w-full w-1/2">
                  <img src={grid1} alt={grid1} />
                </div>
              </div>
              <div className="flex justify-start w-full h-1/3">
                <div className=" h-1/4 md:h-full md:w-full w-1/2">
                  <img src={grid2} alt={grid2} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative top-2">
          <div className="flex p-5 md:p-10 gap-5  w-[300px] md:w-[548px]">
            <div className="flex flex-col gap-5">
              <img src={woman} style={{ borderRadius: "8px" }} alt={woman} />
              <img src={people} style={{ borderRadius: "8px" }} alt={people} />
            </div>
            <div>
              <img src={girl} style={{ borderRadius: "8px" }} alt={girl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImgGrid;
