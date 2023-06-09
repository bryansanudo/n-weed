import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

import { motion } from "framer-motion";
import { TypingText, TitleText } from "@/components/CustomTexts";
import { staggerContainer, zoomIn } from "@/utils/motion";
import Slider from "@/components/Slider";

/* const ARRAY_IMG = [
  photo9,
  photo10,
  photo6,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo7,
  photo8,
]; */

const Hero = () => {
  /* window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  }); */

  /* const [index, setIndex] = useState(0);
  const handleClickNext = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  }; */

  return (
    <motion.section
      name="home"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="h-auto flex flex-col justify-start items-center text-cente pt-[150px] md:mx-10 mx-4 "
    >
      <TypingText
        title="Siempre parchados con Need Weed"
        textStyles="font-bold text-4xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl"
      />

      {/*  <motion.div variants={zoomIn(1, 1)} className="relative mt-6 mx-4 ">
        <img
          src={ARRAY_IMG[index]}
          alt=""
          className="rounded-lg shadow-[#ffcdc2] shadow-xl   object-cover w-[600px] h-[500px] lg:h-[600px]"
        />
        <div
          className={`absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 `}
        >
          <button
            className="grid h-10 w-10  place-items-center  rounded-full bg-white opacity-50"
            onClick={handleClickPrev}
          >
            <GrFormPrevious size={40} />
          </button>
          <button
            className=" grid h-10 w-10 place-items-center rounded-full bg-white opacity-50"
            onClick={handleClickNext}
          >
            <GrFormNext size={40} />
          </button>
        </div>
      </motion.div> */}
      <Slider />
      {/* <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div> */}
    </motion.section>
  );
};

export default Hero;
