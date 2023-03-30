import React, { useState } from "react";
import { Link } from "react-scroll";
import Cart from "./Cart";
import Navbar from "./Navbar";

export default function Header(props) {
  const [nav, setNav] = useState(false);
  const [navButton, setNavButton] = useState(0);
  const [navAppear , setNavAppear] = useState(false)
  const[openCart , setOpenCart] = useState(false)

  const Inactive = "flex bg-[#F8e0a6] w-full z-10 fixed top-0 ";
  const active =
    "flex bg-[#F8e0a6] w-full z-10 fixed shadow-xl top-0 shadow-[#583101]";
  const activeButton =
    "mr-10 lg:m-auto hover:cursor-pointer bg-[#583101] text-[#F8e0a6] rounded-xl";
  const InactiveButton = "mr-10 lg:m-auto hover:cursor-pointer text-[#583101]";

  const changeBackground = () => {
    if (window.scrollY > 100) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };

  const navonclick = ()=>{
    setNavAppear(!navAppear)
  }


  return (
    <div>
      <div className={nav ? active : Inactive}>
        <img
          src="logo.png"
          className="w-24 h-auto ml-9 md:w-16 md:ml-6 xm:w-14"
        />
        <ul className="flex gap-7 mr-20 items-center ml-auto md:hidden">
          <Link
            to="Home"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={700}
            className={navButton == 1 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(1);
            }}
          >
            <li className="font-[Poppins] text-base font-normal  p-2">Home</li>
          </Link>

          <Link
            to="About"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-80}
            duration={700}
            className={navButton == 2 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(2);
            }}
          >
            <li className="font-[Poppins] text-base font-normal    p-2">
              About Us
            </li>
          </Link>
          <Link
            to="Services"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            className={navButton == 3 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(3);
            }}
          >
            <li className="font-[Poppins] text-base font-normal  p-2">
              Our Services
            </li>
          </Link>
          <Link
            to="Spaces"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={700}
            className={navButton == 4 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(4);
            }}
          >
            <li className="font-[Poppins] text-base font-normal p-2">
              Our Space
            </li>
          </Link>
          <Link
            to="Contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={50}
            duration={700}
            className={navButton == 5 ? activeButton : InactiveButton}
            onClick={() => {
              setNavButton(5);
            }}
          >
            <li className="font-[Poppins] text-base font-normal p-2">
              Contact Us
            </li>
          </Link>

          <div className="mr-10 gap-2 flex lg:m-auto  bg-[#583101] p-3 rounded-md hover:cursor-pointer" onClick={props.clickon} > 
            <li className="font-[Poppins] text-base font-normal text-white ">
              CART
            </li>
            <img src="cart.png" className="h-6" />
          </div>
        </ul>

        <div className="hidden md:flex items-center ml-auto pr-6 justify-end" onClick={navonclick}>
          <img src="more.png" className="h-8"/>
        </div>
       
      </div>
      <div className="hidden md:flex">
           <Navbar open={navAppear} />
        </div>
    </div>
  );
}
