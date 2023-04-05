import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Product3 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 9,
      src: "https://i.ibb.co/YjyTLPt/1.jpg",
      nameProduct: "Jeeter Juice PAPAYA",
      price: "COP $$$",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 1,
    },
    {
      id: 10,
      src: "https://i.ibb.co/Jq3hmrj/2.jpg",
      nameProduct: "Jeeter Juice WEEDING CAKE",
      price: "COP $$$",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 2,
    },
    {
      id: 11,
      src: "https://i.ibb.co/ZHHxtbd/3.jpg",
      nameProduct: "Jeeter Juice KUSH MINTZ",
      price: "COP $$$",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 3,
    },
    {
      id: 12,
      src: "https://i.ibb.co/x89Zgcg/4.jpg",
      nameProduct: "Jeeter Juice SFV OG",
      price: "COP $$$",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 4,
    },
    {
      id: 13,
      src: "https://i.ibb.co/wYkZJC0/5.jpg",
      nameProduct: "Dabwoods",
      price: "COP $$$",
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://wa.me/c/573127965835",
      quantity: 1,
      delay: 5,
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
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section
        name="portafolio"
        title="¡Live Resin! "
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
                  className=" h-[450px] w-[400px] object-cover rounded-t-xl "
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
    </motion.div>
  );
};

export default Product3;
