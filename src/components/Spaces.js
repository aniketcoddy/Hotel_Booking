import React from "react";

export default function Spaces() {
  return (
    <div className="flex flex-col mt-24 md:ml-5 xxs:ml-0 " id="Spaces">
      <div className="flex flex-col justify-center  ml-40 lg:ml-0 xxs:ml-0 gap-5">
        <div className="flex flex-row items-center gap-3 xxs:m-auto">
          <h1 className="font-[Playfair] text-2xl  text-[#583101] ">
            OUR SPACES
          </h1>
          <img src="design.png" className="items-center w-32 h-6 xs:hidden" />
        </div>
        <div className="xxs:m-auto gap-4 flex flex-col xm:items-center ">
          <h1 className="font-[Playfair] text-4xl text-[#121619] xxs:text-3xl xm:text-2xl">
            Check Our Hotel Gallery
          </h1>
          <p className="w-[788px] font-[Poppins] text-sm  text-[#121619] md:w-[693px] sm:w-[593px] xs:w-96 xxs:w-80 xm:text-xs xm:w-72 xm:m-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
            dictum sed sit. Suspendisse congue est pellentesque nec. Sed
            tincidunt aliquam morbi diam faucibus sodales. Auctor lacus, sed
            amet velit leo, felis eget in proin. Arcu enim, est dictum venenatis
            convallis tortor. Malesuada vestibulum a sed libero sapien, tellus.
          </p>
        </div>
      </div>

      <div className="flex flex-col ml-40 lg:ml-0 mt-8 xs:mt-4">
        <ul className="flex flex-row gap-[74px] lg:gap-14 md:gap-5 mb-3 sm:hidden">
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Dining & Resturant
          </li>
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Parking Space 
          </li> 
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Spa 
          </li> 
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Resort & Pool 
          </li> 
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Casino 
          </li> 
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Bedrooms 
          </li> 
          <li className="font-[Poppins] text-lg lg:text-sm text-[#121619] hover:underline hover:cursor-pointer">
            Event Spaces
          </li>
        </ul>
        <a className=" hidden sm:flex bg-[#583101] p-2 mr-auto rounded-md xxs:ml-5 xm:ml-3">
          <img src="down-arrow.png" className="h-4" />
        </a>
        <div className="flex flex-row xs:-ml-1 xxs:justify-center">
          <img
            src="image 125.png"
            className="h-[540px] lg:h-[437px] md:h-80 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
          <img
            src="image 124.png"
            className="h-[540px] lg:h-[437px] md:h-80 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
          <img
            src="image 123.png"
            className="h-[540px] lg:h-[437px] md:h-80 sm:h-[274px] xs:h-44 xxs:h-36 xm:h-32 p-1"
          />
        </div>
      </div>
    </div>
  );
}
