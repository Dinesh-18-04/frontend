import React from "react";
import proj1 from "../../assets/proj1.png";
import { FaStar } from "react-icons/fa";

const Productsdata = [
  {
    id: 1,
    title: "Blue plain shirt",
    img: proj1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "white",
  },
  {
    id: 2,
    title: "Blue plain shirt",
    img: proj1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    color: "white",
  },
  {
    id: 3,
    title: "Blue plain shirt",
    img: proj1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit..",
    color: "white",
  },
];

const TopProducts = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-24 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-white pt-6"
          >
            Top rated products for you
          </p>
          <h1
            data-aos="fade-up"
            className="text-3xl font-bold dark:text-white mb-3 mt-2"
          >
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            explicabo culpa obcaecati voluptates, placeat velit?
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-20 md:gap-5 place-items-center ">
            {Productsdata.map((data) => (
              <div data-aos="zoom-in"
                key={data.id}
                className="rounded-2xl bg-white 
                dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary dark:text-white shadow-xl duration-300 group max-w-[300px] mb-5  "
              >
                <div className="h-[100px]">
                  <img
                    src={data.img}
                    alt="img"
                    className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                <div className="p-4 text-center"> 
                  <div className="flex w-full items-ceter justify-center text-yellow-500 gap-1">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                  </div>
                  <h1 className="group-hover:text-white text-xl font-bold dark:group-hover:text-black">{data.title}</h1>
                  <p className="group-hover:text-white duration-300 text-sm line-clamp-2 dark:group-hover:text-black">{data.description}</p>
                  <button className="bg-primary px-4 py-1 rounded-2xl mt-2 text-white hover:scale-105 duration-300 group-hover:bg-white group-hover:text-primary">
                    Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
