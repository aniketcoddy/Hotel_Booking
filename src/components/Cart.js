import React from "react";

export default function Cart(props) {
  return (
    <div className={`absolute -mt-96  bg-[#F8e0a6] w-[816px] ${props.close ?"-translate-x-[832px]":"translate-x-full"} ease-in-out duration-700`} >
 
      {/* <div className="flex items-center justify-center mt-72">
        <h1 className="flex text-9xl justify-center text-[#ebc08c] ">
          Empty Cart
        </h1>
      </div> */}

      <h1 className="flex items-center justify-center text-[#583101] text-2xl  font-[Playfair]">CART</h1>

      <div className="p-2">
        <div className="flex items-center justify-start border-2 bg-[#583101] border-[#583101]">
          <img src="room4.png" className="w-28 p-4"/>
          <h1 className="p-4 text-xl font-[Playfail] text-[#F8e0a6] ">Couple Simple Room</h1>
          <p className="pt-6 text-base font-[Playfail] text-[#F8e0a6]">(Standard Rooms)</p>
          <p className="pt-6 text-xl flex ml-16 font-[Playfail] text-[#F8e0a6]">2 * Rooms</p>
          <h1 className="p-4 text-3xl font-[Playfail] ml-auto mr-11 text-white">₹ 10,000</h1>
        </div>
      </div>

      <div>
        <div className="border-2 w-full items-center flex border-solid border-black mt-10 p-4 bg-[#583101]">
          <h1 className="text-4xl font-[Playfair] font-semibold p-5 text-[#F8e0a6]">₹ 10,000</h1>
          <h1 className="text-2xl mt-9 text-[#F8e0a6] font-[Poppins]">Total Payable Amount</h1>
          <a className="bg-[#F8e0a6] flex items-center p-3 h-fit rounded-md ml-auto mr-6">
            <h1 className="text-base font-[Playfair]  text-[#583101]">Proceed To PAY</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
