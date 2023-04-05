import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";
const Navigate = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="flex flex-col md:flex-row p-5 mb-12 gap-6 items-center justify-center "
    >
      <motion.div
        variants={fadeIn("down", "spring", 0.5, 4)}
        className="flex gap-2"
      >
        <Link to="/">
          <div className="rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src="/vape1.png"
                alt="contact us"
                className="object-cover w-16 h-16    "
              />
            </div>
          </div>
        </Link>
        <Link to="/product2">
          <div className="   rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer ">
            <img
              src="/vape2.png"
              alt="contact us"
              className=" object-cover w-16 h-16   "
            />
          </div>
        </Link>

        <Link to="/product3">
          <div className="rounded-3xl shadow-lg shadow-[#6057ca] hover:scale-105 duration-200  px-6 p-3 cursor-pointer  ">
            <img
              src="/vape3.png"
              alt="contact us"
              className=" object-cover w-16 h-16    "
            />
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Navigate;
