import React from "react";
import car from "../../assets/car.jpg";

import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center text-center">
        <img
          src={car}
          alt=""
          className="w-[300px] md:h-[500px] md:w-[500px] rounded-lg shadow-xl m-10"
        />
        <div>
          <h1 className="font-bold text-3xl">Winter Sale Up To 50% Off</h1>
          <p className="my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis,
            repudiandae?
          </p>
          <div className="flex flex-col gap-3 m-10 md:m-0">
            <div className=" flex items-center gap-4">
              <GrSecure className="text-xl h-12 w-12 p-4 bg-violet-400 rounded-full" />
              <p>Quality Product</p>
            </div>
            <div className=" flex items-center gap-4">
              <IoFastFood className="text-xl h-12 w-12 p-4 bg-violet-400 rounded-full" />
              <p>Fast Delivery</p>
            </div>
            <div className=" flex items-center gap-4">
              <GiFoodTruck className="text-xl h-12 w-12 p-4 bg-violet-400 rounded-full" />
              <p>Easy Payment Method</p>
            </div>
            <div className=" flex items-center gap-4">
              <BiSolidOffer className="text-xl h-12 w-12 p-4 bg-violet-400 rounded-full" />
              <p>Get Offers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
