import Header from "@/components/Header";
import Hero from "@/components/Hero";

import { useState } from "react";

import Footer from "@/components/Footer";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product1 from "@/components/categorys/Product1";
import Product2 from "@/components/categorys/Product2";
import Product3 from "@/components/categorys/Product3";
import Faq from "@/components/Faq";
import Publications from "@/components/Publications";
import PublicationsDetails from "@/components/PublicationsDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode && "dark"}>
      <BrowserRouter>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
          <Hero />
          <Routes>
            <Route path="/" element={<Product3 />} />
            <Route path="/product2" element={<Product2 />} />
            <Route path="/product3" element={<Product1 />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/publications/:id" element={<PublicationsDetails />} />
          </Routes>

          {/*  <GetProducts /> */}

          <Footer />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
