import React from "react";
import Section from "@/components/common/Section";

import { CgSmartHomeLight } from "react-icons/cg";
import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "@/utils/motion";

import { staggerContainer } from "@/utils/motion";

const Product1 = () => {
  const portfolios = [
    {
      id: 8,
      src: "https://i.ibb.co/mCPwdWn/100.jpg",
      nameProduct: "BrassKnuckles Dorado-Plateado-Madera",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 7,
    },
    {
      id: 9,
      src: "https://i.ibb.co/0GFgwzB/110.jpg",
      nameProduct: "BrassKnuckles Tornasol-Rojo-Negro",
      price: "COP 110.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 7,
    },

    {
      id: 2,
      src: "https://i.ibb.co/vzs1Nv3/cargador.jpg",
      nameProduct: "Cargador",
      price: "COP 20.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Cargador USB",
      delay: 1,
    },
    {
      id: 1,
      src: "https://i.ibb.co/nL8fjC1/IMG-9967.jpg",
      nameProduct: "Batería Airis",
      price: "COP 200.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 1,
    },

    {
      id: 4,
      src: "https://i.ibb.co/tBtrxrr/product4.jpg",
      nameProduct: "Batería lux",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Solo Batería",
      delay: 4,
    },
    {
      id: 5,
      src: "https://i.ibb.co/JkzdHBC/product50.jpg",
      nameProduct: "Batería Gold Ingot",
      price: "COP 300.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Importado",
      delay: 5,
    },
    {
      id: 3,
      src: "https://i.ibb.co/k5kNMC5/b4a66055-f726-4d47-9977-4a525d019b0a.jpg",
      nameProduct: "Batería de color ",
      price: "COP 150.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 3,
    },
    {
      id: 6,
      src: "https://i.ibb.co/K2CNCnp/pipa.jpg",
      nameProduct: "Batería Pipa",
      price: "COP 190.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 6,
    },
    {
      id: 7,
      src: "https://i.ibb.co/RPZzLjr/product7.jpg",
      nameProduct: "Batería Negra",
      price: "COP 170.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 7,
    },
  ];

  return (
    <section className="min-h-fit flex flex-col justify-start items-center py-16 px-5 text-center">
      <p className="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:text-5xl uppercase">
        ¡Baterias!
      </p>

      {/* <p className="max-w-xl font-light text-gray-500 mb-4 text-sm md:text-base">
        Nos complace presentarte nuestras elegantes Baterias de alta calidad.
      </p>
      <div className="max-w-xl font-light text-gray-500 mb-4 text-sm md:text-base">
        <p className="font-semibold">Instrucciones de uso:</p>
        <p>Pulsa 5 veces para encender o apagar </p>
        <p>Pulsa 3 veces para cambiar el nivel</p>
      </div>
      <div className="max-w-xl flex gap-8 font-light text-gray-500 mb-4  ">
        <p className="flex flex-col items-center gap-2">
          <CgSmartHomeLight className="text-red-500 text-4xl animate-pulse" />
          Fuerte
        </p>
        <p className="flex flex-col items-center gap-2">
          <CgSmartHomeLight className="text-blue-500 text-4xl animate-pulse" />
          Medio
        </p>
        <p className="flex flex-col items-center gap-2">
          <CgSmartHomeLight className="text-green-500 text-4xl animate-pulse" />
          Suave
        </p>
      </div> */}
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
                className=" h-[400px] w-[400px] object-cover object-top rounded-t-xl "
              />
              <p className="mt-3 capitalize text-sm ">{product.nameProduct}</p>
              <p className="mt-3 capitalize text-sm ">{product.quantity}</p>
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
    </section>
  );
};

export default Product1;
