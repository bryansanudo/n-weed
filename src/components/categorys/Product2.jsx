import React from "react";
import Section from "@/components/common/Section";

import product1 from "@/assets/categorys/product2/1.jpg";
import product2 from "@/assets/categorys/product2/2.jpg";
import product3 from "@/assets/categorys/product2/3.jpg";
import product4 from "@/assets/categorys/product2/4.jpg";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Product2 = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
}) => {
  const portfolios = [
    {
      id: 5,
      src: product1,
      nameProduct: "Producto 1",
      price: 5000,
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
      quantity: 1,
      delay: 1,
    },
    {
      id: 6,
      src: product2,
      nameProduct: "Producto 2",
      price: 5000,
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
      quantity: 1,
      delay: 2,
    },
    {
      id: 7,
      src: product3,
      nameProduct: "Producto 3",
      price: 5000,
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
      quantity: 1,
      delay: 3,
    },
    {
      id: 8,
      src: product4,
      nameProduct: "Producto 4",
      price: 5000,
      codeInstagram: "https://www.instagram.com/elianacaro12/",
      codeWpp: "https://api.whatsapp.com/send?phone=579999999999",
      quantity: 1,
      delay: 4,
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
        title="¡Destilados! "
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
                className="flex flex-col items-center justify-center"
              >
                <img
                  src={product.src}
                  className="mt-2 h-[450px] w-[400px] shadow-lg shadow-[#ffcdc2] object-cover rounded-xl "
                />
                <p className="mt-3 capitalize text-sm md:text-lg">
                  {product.nameProduct}
                </p>
                <div className="flex gap-5">{product.price}</div>
                <div className=" capitalize text-sm md:text-lg flex flex-col items-center justify-center gap-2">
                  <article className="hover:scale-125 duration-300">
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

export default Product2;
