import React from "react";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { fadeIn, zoomIn } from "@/utils/motion";
const Navigate = () => {
  return (
    <div className="flex flex-col md:flex-row p-5 mb-12 gap-6 items-center justify-center ">
      <div className="flex gap-2">
        <Link to="/">
          <div className="rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200   p-3 cursor-pointer ">
            <div className="flex gap-4">
              <img
                src="/baterias.png"
                alt="contact us"
                className="object-contain w-20 h-20    "
              />
            </div>
          </div>
        </Link>
        <Link to="/product2">
          <div className="   rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200   p-3 cursor-pointer ">
            <img
              src="/destilados.png"
              alt="contact us"
              className=" object-contain w-20 h-20   "
            />
          </div>
        </Link>

        <Link to="/product3">
          <div className="rounded-3xl shadow-lg shadow-[#ffcdc2] hover:scale-105 duration-200   p-3 cursor-pointer  ">
            <img
              src="/jeeter.png"
              alt="contact us"
              className=" object-contain w-20 h-20    "
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navigate;
