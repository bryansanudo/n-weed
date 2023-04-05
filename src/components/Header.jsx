import React, { useState } from "react";
import { MdNightsStay, MdWbSunny, MdOutlineClose } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import logo from "@/assets/Logo.png";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
  darkMode,
  setDarkMode,
}) => {
  const [active, setActive] = useState(false);
  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  return (
    <header className="fixed w-full bg-gray-900  text-white z-50">
      <nav className="flex justify-between items-center p-5">
        <img
          src={logo}
          alt=""
          className="rounded-full object-cover  h-24 w-24  duration-300 shadow-lg   shadow-[#ffcdc2]"
        />
        <div onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <MdWbSunny className="w-8 h-8 cursor-pointer text-[#ffcdc2]" />
          ) : (
            <MdNightsStay className="w-8 h-8 cursor-pointer text-[#ffcdc2]" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
