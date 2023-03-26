import React from "react";

export default function Offers() {
  return (
    <div className="flex flex-row md:flex-col mt-40 justify-center gap-36 lg:gap-4 md:gap-0 md:justify-center md:items-center xs:mt-[1274px] xxs:mt-[1063px] xm:mt-[816px]">
      <div>
        <img src="offer.png" className="h-[516px] lg:h-[424px] md:hidden" />
      </div>
      <div className="flex flex-col justify-center gap-5 md:items-center ">
        <div className="flex flex-row md:-ml-64 xs:m-auto">
          <h1 className="font-[Playfair] text-2xl text-[#583101] lg:text-xl md:text-2xl xxs:text-lg">
            FEATURED OFFER
          </h1>
          <img src="design.png" className="pr-4 xs:hidden" />
        </div>
        <h1 className="font-[Playfair] text-4xl text-[#121619] lg:text-3xl md:text-4xl xxs:text-3xl">
          Economy Luxe Room
        </h1>
        <img src="offer.png" className=" hidden  md:flex w-96  xxs:w-80 xm:w-72" />
        <p className="w-[421px] font-[Poppins] text-sm text-[#121619] md:w-[635px] sm:w-[519px] xs:text-xs xs:w-[366px] xxs:w-[315px] xm:w-64">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim, risus
          dictum sed sit. Suspendisse congue est pellentesque nec. Sed tincidunt
          aliquam morbi diam faucibus sodales. Auctor lacus, sed amet velit leo,
          felis eget in proin. Arcu enim, est dictum venenatis convallis tortor.
          Malesuada vestibulum a sed libero sapien, tellus.
        </p>
        <div className="flex flex-row gap-5 lg:gap-[10.25px] xm:flex-col">
          <div className="flex flex-col w-64 xs:w-44  p-3 lg:p-2 gap-4">
            <div className="flex flex-row items-end gap-3 ">
              <h1 className="font-[Playfair] text-6xl lg:text-5xl xs:text-3xl text-[#000000] xm:text-5xl">25%</h1>
              <h1 className="font-[Playfair] text-2xl lg:text-xl  text-[#000000] xxs:text-base xm:text-xl">
                DISCOUNT
              </h1>
            </div>
            <h1 className="font-[Poppins] text-xl text-[#121619] lg:text-sm xxs:text-xs xm:text-xs">
              STAY 6 MONTHS OR MORE
            </h1>
          </div>
          <img src="line.png" className="h-44 lg:h-32 xm:hidden" />
          <div className="flex flex-col  w-64 xs:w-40 xm:w-44 p-3 lg:p-2 gap-4">
            <div className="flex flex-row items-end gap-3">
              <h1 className="font-[Playfair] text-6xl text-[#000000] lg:text-5xl xs:text-3xl xm:text-5xl">10%</h1>
              <h1 className="font-[Playfair] text-2xl  text-[#000000] lg:text-xl xxs:text-base  xm:text-xl">
                DISCOUNT
              </h1>
            </div>
            <h1 className="font-[Poppins] text-xl text-[#121619] lg:text-sm xxs:text-xs xm:text-xs">
              STAY 2 MONTHS OR MORE
            </h1>
          </div>
          
        </div>
        <div>
        <a className="flex flex-row justify-center items-center px-14 py-1 bg-[#583101] hover:cursor-pointer hover:bg-[#724918]">
            <h1 className=" font-[Poppins] text-base text-[#F8e0a6] font-normal ">
              Book Now
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
}
