import React from "react";

export default function RoomSpec() {
  return (
    <div className="absolute flex  bg-[#583101]  h-fit right-0 z-10">
      <div className="p-8 flex flex-col gap-5">
        <div>
          <a className="bg-[#F8e0a6]  flex items-center p-1 w-fit rounded-md">
            <img src="close.png" className="h-3 justify-center items-center flex pr-2 pl-2"/>
            <h1 className="text-lg text-[#583101] mr-2 font-[Poppins] font-semibold">Close</h1>
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl text-[#F8e0a6] font-[Poppins] border-l-8 border-[#F8e0a6] pl-2">Deluxe Room City View</h1>
          <img src="room4.png" className="w-[512px] rounded-xl"/>
          <div className="flex flex-col gap-4">
            <a className="flex items-center">
                <img src="cup.png" className="h-5 pr-3"/>
              <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">No breakfast served</h1>
            </a>
            <a className="flex">
            <img src="sleeping.png" className="h-5 pr-3"/>
              <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">1 king-size bed</h1>
            </a>
            <a className="flex">
            <img src="guest.png" className="h-5 pr-3"/>
              <h1 className="text-base text-[#F8e0a6] font-[Poppins] w-auto ">
                Max guests : 1 adults. The T&C for the child check-in policy will<br/> 
                depend on the hotel.
              </h1>
            </a>
            <div className="flex gap-36">
              <a className="flex">
                <img src="expand.png" className="h-5 pr-3"/>
                <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">Room size:28.0 m²</h1>
              </a>
              <a className="flex">
              <img src="buildings.png" className="h-5 pr-3"/>
                <h1 className="text-base text-[#F8e0a6] font-[Poppins] ">City view</h1>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-7">
            <h1 className="text-2xl text-[#F8e0a6] font-[Poppins]">Room Facilities</h1>
            <div className="flex gap-36">
              <div className="flex flex-col gap-2">
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">TV</h1></a>
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">Iron & ironing board</h1></a>
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">Mini bar</h1></a>
              </div>
              <div className="flex flex-col gap-2">
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">Turndown Service</h1></a>
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">Air Conditioning</h1></a>
                <a className="flex"><img src="check.png" className="h-4 pr-3"/><h1 className="text-sm text-[#F8e0a6] font-[Poppins]">Housekeeping</h1></a>
              </div>
              
            </div>

        <div className="flex  bg-black border-2 border-solid border-white">
            <h1 className="text-4xl text-[white] p-3 font-[Playfair]">$300</h1>
            <h1 className="text-sm flex text-[white] items-end pb-4 font-[Poppins] justify-end">per night</h1>
            <a className=" gap-2 flex  border-2 border-white h-fit p-2 m-auto ml-64 rounded-md hover:cursor-pointer">
            <li className="font-[Poppins] text-base font-semibold  text-white list-none ">
             ADD
            </li>
            <img src="cart.png" className="h-6" />
          </a>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
