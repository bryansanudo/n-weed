import React from "react";
import Section from "@/components/common/Section";

import Navigate from "@/components/categorys/Navigate";
import IconInstagram from "@/icons/IconInstagram";
import IconWpp from "@/icons/IconWpp";
import { motion } from "framer-motion";

import { staggerContainer, fadeIn } from "@/utils/motion";

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "Pregunta 1",
      answer: "Respuesta 1",
    },
    {
      id: 2,
      question: "Pregunta 2",
      answer: "Respuesta 2",
    },
    {
      id: 3,
      question: "Pregunta 3",
      answer: "Respuesta 3",
    },
    {
      id: 4,
      question: "Pregunta 4",
      answer: "Respuesta 4",
    },
    {
      id: 5,
      question: "Pregunta 5",
      answer: "Respuesta 5",
    },
    {
      id: 6,
      question: "Pregunta 6",
      answer: "Respuesta 6",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Section name="portafolio" title="Preguntas Frecuentes ">
        {/* subtitle={`
    Disfruta los mejores destilados hibridos de 1.2ML de contenido y concentrados al 98%. Las cepas varian según la disponibilidad.

   `} */}
        <div className="mx-auto flex h-full w-full max-w-screen-lg flex-col justify-center  ">
          <Navigate />
          <div className="flex flex-col items-center justify-center max-w-[1000px]">
            {questions.map((item) => (
              <div
                key={item.id}
                tabIndex={0}
                className="collapse collapse-arrow border border-[#ffcdc2] bg-base-100 rounded-box w-full"
              >
                <div className="collapse-title text-xl font-medium ">
                  {item.question}
                </div>
                <div className="collapse-content text-left">
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default Faq;
