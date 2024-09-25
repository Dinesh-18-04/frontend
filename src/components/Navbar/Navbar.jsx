import React from "react";
import logo from "../../assets/logo.png"
import { IoMdSearch } from "react-icons/io";   // Ionicons for the search icon
import { FaCartShopping } from "react-icons/fa6";  // Font Awesome 6 for the cart icon
import { FaCaretDown } from "react-icons/fa";  // Font Awesome for the caret down

import DarkMode from "./DarkMode";


const Menu = [
  {
    id:1,
    name:"Home",
    link:"#",
  },
  {
    id:2,
    name:"Top Rated",
    link:"#",
  },
  {
    id:3,
    name:"Kids Wear",
    link:"#",
  },
  {
    id:4,
    name:"Mens wear",
    link:"#",
  },
  {
    id:5,
    name:"Electronics",
    link:"#",
  },
]

const Dropdownlinks = [
  {
    id:1,
    name:"Trending Products",
    link:"#",
  },
  {
    id:2,
    name:"Best Selling",
    link:"#",
  },
  {
    id:3,
    name:"Top Rated",
    link:"#",
  },
]

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl flex gap-2  ">
              <img src={logo} alt="logo" className="w-10 uppercase " />
              SnapMart
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="group relative hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border dark:bg-gray-800 border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => alert("ordering not available yet")}
              className="bg-gradient-to-r from-primary to-secondary rounded-full items-center py-1 px-4 text-white transistion-all duration-200 flex group gap-3"
            >
              <span className="group-hover:block hidden transition-all duration-1000">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>
            <div>
              <DarkMode/>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex items-center hidden gap-4">
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className="hover:text-primary inline-block font-medium transition-all duration-300 px-4">{data.name}</a>
              </li>
            ))
          }
          {
            <li className="group relative">
              <a href="#" className="flex items-center py-2 font-medium gap-[2px]">
                Trending
                <span>
                <FaCaretDown className="transition-all duration-300 group-hover:rotate-180"/>
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-white p-2 text-black ">
                <ul>
                  {
                    Dropdownlinks.map((data)=>(
                      <li key={data.id}>
                        <a href={data.link} className="inline-block w-full rounder-md p-2 hover:bg-primary/20">{data.name}</a>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </li>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
