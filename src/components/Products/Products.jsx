import React from "react";
import { FaStar } from "react-icons/fa";
import pro1 from "../../assets/pro1.jpg";

const productsData = [
  {
    id: 1,
    img: pro1,
    title: "nnuujj",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: pro1,
    title: "nnuujj",
    rating: 5.0,
    color: "white",
    aosDelay: "200",
  },
  {
    id: 3,
    img: pro1,
    title: "nnuujj",
    rating: 5.0,
    color: "white",
    aosDelay: "400",
  },
  {
    id: 4,
    img: pro1,
    title: "nnuujj",
    rating: 5.0,
    color: "white",
    aosDelay: "600",
  },
  {
    id: 5,
    img: pro1,
    title: "nnuujj",
    rating: 5.0,
    color: "white",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className=" dark:bg-gray-950">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary dark:text-white pt-6"
          >
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold dark:text-white">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            explicabo culpa obcaecati voluptates, placeat velit?
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-5 place-items-center md:gap-5">
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div className="dark:text-white">
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-white">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400 " />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
