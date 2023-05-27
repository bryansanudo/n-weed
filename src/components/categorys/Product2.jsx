import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Product2 = () => {
  const portfolios = [
    {
      id: 8,
      src: "https://i.ibb.co/ftBFK0k/nacional.jpg",
      nameProduct: "Destilados Nacionales",
      price: "COP 50.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 4,
    },
    {
      id: 7,
      src: "https://i.ibb.co/qRgRnqw/3.jpg",
      nameProduct: "Destilados Importados",
      price: "COP 70.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 3,
    },
    {
      id: 5,
      src: "https://i.ibb.co/rtPPXtY/1.jpg",
      nameProduct: "Destilado Importado CUREpen",
      price: "COP 70.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 1,
    },
    {
      id: 6,
      src: "https://i.ibb.co/pw1SKCb/juice.jpg",
      nameProduct: "Destilado Importado Sweeter Juice",
      price: "COP 70.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 4,
      src: "https://i.ibb.co/9v1ps6S/push.jpg",
      nameProduct: "Destilado Importado Push",
      price: "COP 70.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 12,
      src: "https://i.ibb.co/BBhKtpc/Whats-App-Image-2023-04-05-at-3-16-20-PM-1.jpg",
      nameProduct: "Destilado Dabwoods ",
      price: "COP 50.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section name="portafolio" title="¡Destilados! ">
        {/* subtitle={`
    Disfruta los mejores destilados hibridos de 1.2ML de contenido y concentrados al 98%. Las cepas varian según la disponibilidad.

   `} */}
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
                <p className="mt-3 capitalize text-sm md:text-lg">
                  {product.nameProduct}
                </p>
                <div className="flex gap-5">{product.price}</div>

                <article className="animate-pulse hover:scale-125 duration-300 mb-2">
                  <a href={product.codeWpp} target="_blank" rel="noreferrer">
                    <IconWpp />
                  </a>
                </article>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Product2;
