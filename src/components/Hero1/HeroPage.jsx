import React from "react";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Slider from "react-slick";

const imagelist = [
  {
    id: 1,
    img: image1,
    title:
      "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut at quod laboriosam debitis saepe in et unde dolores. Quae!",
  },
  {
    id: 2,
    img: image2,
    title:
      "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut at quod laboriosam debitis saepe in et unde dolores. Quae!",
  },
  {
    id: 3,
    img: image3,
    title:
      "Lorem ipsum dolor sit amet.",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut at quod laboriosam debitis saepe in et unde dolores. Quae!",
  },
];

const HeroPage = () => {

    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnFocus: true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return (
    <div>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex  justify-center items-center dark:bg-gray-950 dark:text-white duration-300">
        <div className="h-[700px] w-[700px] bg-primary/40 absolute rounded-3xl rotate-45 -top-1/2 -z-9 right-0"></div>
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {imagelist.map((data)=>(
                <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  <div className="flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1 z-10">
                    <h1 data-aos="zoom-out" data-aos-once="true" data-aos-duration="500" className="text-5xl sm:text-6xl font-bold">
                      {data.title}
                    </h1>
                    <p data-aos="fade-up" 
                    data-aos-delay="100" data-aos-duration="500" className="text-sm">
                      {data.description}
                    </p>
                    <div data-aos="fade-up" 
                    data-aos-delay="300" data-aos-duration="500">
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full">
                        Order Now
                      </button>
                    </div>
                  </div>
                  <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in" data-aos-once="true"  className="relative z-10">
                      <img
                        src={data.img}
                        alt="image1"
                        className="w-[300px] h-[300px] sm:h-[450px] sm:-w[450px] sm:scale-125 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>

            ))}
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;