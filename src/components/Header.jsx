import React, { useState } from "react";
import { MdNightsStay, MdWbSunny, MdOutlineClose } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import logo from "@/assets/Logo.png";
import logoPhoto from "@/assets/LogoPhoto.png";

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
    <header className="fixed w-full bg-gray-900 text-white z-50">
      <nav className="flex justify-between items-center p-5">
        <div className="flex gap-6">
          <a href="https://eliana-nweed.netlify.app/">
            <img
              src={logo}
              alt=""
              className="rounded-full object-cover hover:scale-105 transition-300  h-24 w-24  duration-300 shadow-lg   shadow-[#ffcdc2]"
            />
          </a>
          <a href="https://eliana-nweed-gallery.netlify.app/">
            <img
              src={logoPhoto}
              alt=""
              className="rounded-full object-cover hover:scale-105 transition-300  h-24 w-24  duration-300 shadow-lg   shadow-[#ffcdc2]"
            />
          </a>
        </div>

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
