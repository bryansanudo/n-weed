import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Product1 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 1,
      src: "https://i.ibb.co/bdv4HbZ/product1.jpg",
      nameProduct: "Batería Airis",
      price: "COP 200.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Importado",
      delay: 1,
    },
    {
      id: 2,
      src: "https://i.ibb.co/7y3XmPX/product2.jpg",
      nameProduct: "Batería BrassKnuckless",
      price: "COP 110.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 2,
    },
    {
      id: 3,
      src: "https://i.ibb.co/DKC8k21/product3.jpg",
      nameProduct: "Batería de color ",
      price: "COP 150.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 3,
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
      id: 6,
      src: "https://i.ibb.co/LCbL33b/product6.jpg",
      nameProduct: "Batería Pipa",
      price: "COP 190.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 6,
    },
    {
      id: 7,
      src: "https://i.ibb.co/WFMc7Wz/product7.jpg",
      nameProduct: "Batería Negra",
      price: "COP 170.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: "Incluye: Destilado Nacional",
      delay: 7,
    },
  ];

  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }
    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  return (
    <Section
      name="portafolio"
      title="¡Baterias! "
      subtitle={`
      Nos complace presentarte nuestra amplia gama de productos de alta calidad. Ofrecemos una variedad para que puedas encontrar el que más te guste.

      `}
    >
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
                className=" h-[400px] w-[400px] object-cover rounded-t-xl "
              />
              <p className="mt-3 capitalize text-sm md:text-lg">
                {product.nameProduct}
              </p>
              <p className="mt-3 capitalize text-sm md:text-lg">
                {product.quantity}
              </p>
              <div className="flex gap-5">{product.price}</div>

              <article className="hover:scale-125 duration-300 mb-2">
                <a href={product.codeWpp} target="_blank" rel="noreferrer">
                  <IconWpp />
                </a>
              </article>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Product1;
