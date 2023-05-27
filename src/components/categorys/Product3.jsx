import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

import zaza1 from "@/assets/zazaProducts/zaza1.jpeg";
import zaza2 from "@/assets/zazaProducts/zaza2.jpeg";
import zaza3 from "@/assets/zazaProducts/zaza3.jpeg";
import zaza4 from "@/assets/zazaProducts/zaza4.jpeg";
import zaza5 from "@/assets/zazaProducts/zaza5.jpeg";
import zaza6 from "@/assets/zazaProducts/zaza6.jpeg";

const Product3 = () => {
  const portfolios = [
    {
      id: 9,
      src: zaza1,
      nameProduct: "BLACKBERRY DIESEL",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 1,
    },
    {
      id: 10,
      src: zaza2,
      nameProduct: "PEANUT BUTTER & JELLY",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 11,
      src: zaza3,
      nameProduct: "CANDY LAND",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 3,
    },
    {
      id: 12,
      src: zaza4,
      nameProduct: "BLUEBERRY MUFFIN",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 4,
    },
    {
      id: 13,
      src: zaza5,
      nameProduct: "APPLEBERRY",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 5,
    },
    {
      id: 14,
      src: zaza6,
      nameProduct: "TANGIE",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 6,
    },
  ];
  /* const portfolios = [
    {
      id: 9,
      src: "https://i.ibb.co/YjyTLPt/1.jpg",
      nameProduct: "Jeeter Juice PAPAYA",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 1,
    },
    {
      id: 10,
      src: "https://i.ibb.co/Jq3hmrj/2.jpg",
      nameProduct: "Jeeter Juice WEEDING CAKE",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 11,
      src: "https://i.ibb.co/ZHHxtbd/3.jpg",
      nameProduct: "Jeeter Juice KUSH MINTZ",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 3,
    },
    {
      id: 12,
      src: "https://i.ibb.co/x89Zgcg/4.jpg",
      nameProduct: "Jeeter Juice SFV OG",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 4,
    },
    {
      id: 13,
      src: "https://i.ibb.co/wYkZJC0/5.jpg",
      nameProduct: "Dabwoods",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 5,
    },
  ]; */

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section name="portafolio" title="¡ZAZA! ">
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <Navigate />
          <div className="grid gap-8 md:px-12 grid-cols-1  lg:grid-cols-3">
            {portfolios.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center justify-center rounded-xl shadow-lg shadow-[#ffcdc2]"
              >
                <img
                  src={product.src}
                  className=" h-[450px] w-[400px] object-top object-cover rounded-t-xl "
                />
                <div className="flex flex-col items-center justify-center">
                  <p className="mt-3 capitalize text-sm md:text-lg">
                    {product.nameProduct}
                  </p>
                  <p className="mt-3 capitalize text-sm md:text-lg">
                    {product.price}
                  </p>
                  <p className="mt-3 capitalize text-sm md:text-lg">
                    2 Ml de destilado 100% importado + Bateria
                  </p>

                  <article className="animate-pulse hover:scale-125 duration-300 mb-2">
                    <a href={product.codeWpp} target="_blank" rel="noreferrer">
                      <IconWpp />
                    </a>
                  </article>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Product3;
