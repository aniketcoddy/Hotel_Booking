import React from "react";

export default function () {
  return (
    <div
      className="flex flex-row xs:flex-col xs:items-center  mt-16 lg:gap-32 md:gap-9"
      id="About"
    >
      <div className="flex flex-col justify-center xs:items-center ml-48 lg:ml-32 md:ml-9 xs:ml-2  gap-5 md:gap-4">
        <div className="flex flex-row items-center gap-3 xs:items-center">
          <h1 className="font-[Playfair] text-2xl lg:text-xl text-[#583101] xs:text-4xl xm:text-3xl ">
            About US
          </h1>
          <img src="design.png" className="items-center w-32 h-6 xs:hidden" />
        </div>
        <h1 className="font-[Playfair] text-4xl lg:text-[26px] text-[#121619] xm:text-xl">
          At SaasAro Luxury Hotels
        </h1>
        <p className="w-96 font-[Poppins] text-sm lg:text-xs lg:w-72 xs:w-96 text-[#121619] xxs:w-80 xxs:text-[10px] xm:w-72 ">
          After putting 1000 applications through a number of filters, we give
          the candidate "Aniket Vishnoi" a chance. He looks to be quite skilled,
          but we won't know for sure until we see his project, on which he is
          currently working. We hope he won't disappoint the recruiters in this
          sample task. and he will undoubtedly be hired.
        </p>
        <a className=" flex justify-center items-center px-6 py-4 bg-[#583101] w-32 h-12 hover:w-36 hover:h-14 rounded-md xs:mt-96 xxs:mt-72">
          <h1 className="font-[Poppins] text-sm text-[#F8e0a6]">Read More</h1>
        </a>
      </div>

      <div className="flex flex-row ml-auto lg:ml-24 mr-7 items-center xs:absolute xs:mt-56">
        <img
          src="image1.png"
          className="h-5/6 flex items-center xs:h-80 xxs:h-56"
        />
        <img
          src="image.png"
          className="flex absolute mt-56 -ml-48 w-80 lg:w-56 lg:mt-40 lg:-ml-28 md:w-44 xxs:w-36 xxs:mt-24 xm:w-32 xm:-ml-20"
        />
      </div>
    </div>
  );
}
