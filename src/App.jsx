import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useState } from "react";

import Footer from "@/components/Footer";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product1 from "@/components/categorys/Product1";
import Product2 from "@/components/categorys/Product2";
import Product3 from "@/components/categorys/Product3";
import Faq from "@/components/Faq";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  return (
    <div className={darkMode && "dark"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />

      <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <BrowserRouter>
          <Hero />
          <Routes>
            <Route path="/" element={<Product1 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product3 />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </BrowserRouter>
        {/*  <GetProducts /> */}

        <Footer />
      </main>
    </div>
  );
}

export default App;
