import React from "react";
import Section from "@/components/common/Section";

import product1 from "@/assets/categorys/product1/product1.jpg";
import product2 from "@/assets/categorys/product1/product2.jpg";
import product3 from "@/assets/categorys/product1/product3.jpg";
import product4 from "@/assets/categorys/product1/product4.jpg";
import product5 from "@/assets/categorys/product1/product50.jpg";
import product6 from "@/assets/categorys/product1/product6.jpg";
import product7 from "@/assets/categorys/product1/product7.jpg";

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
      src: product1,
      nameProduct: "Batería Airis + Destilado Importado",
      price: "COP 200.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 1,
    },
    {
      id: 2,
      src: product2,
      nameProduct: "Batería BrassKnuckles + Destilado",
      price: "COP 110.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 3,
      src: product3,
      nameProduct: "Batería de color + Destilado + Cargador",
      price: "COP 150.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 3,
    },
    {
      id: 4,
      src: product4,
      nameProduct: "Batería lux",
      price: "COP 100.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 4,
    },
    {
      id: 5,
      src: product5,
      nameProduct: "Batería Gold Ingot + Destilado Importado",
      price: "COP 300.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 5,
    },
    {
      id: 6,
      src: product6,
      nameProduct: "Batería Pipa + Destilado Nacional + Cargador",
      price: "COP 190.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 6,
    },
    {
      id: 7,
      src: product7,
      nameProduct: "Batería Negra + Destilado + Cargador",
      price: "COP 170.000",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
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
                className="mt-2 h-[450px] w-[400px] object-cover rounded-t-xl "
              />
              <p className="mt-3 capitalize text-sm md:text-lg">
                {product.nameProduct}
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
