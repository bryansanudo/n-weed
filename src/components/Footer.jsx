import { motion } from "framer-motion";

import styles from "@/utils/styles";
import { footerVariants } from "@/utils/motion";
import { TypingText } from "@/components/CustomTexts";
import { AiOutlineArrowUp } from "react-icons/ai";
import Contact from "@/components/Contact";

const Footer = () => {
  const useScroll = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.paddings} py-8 relative`}
    >
      <div className="footer-gradient" />

      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-center flex-col">
          <Contact />

          <TypingText
            title="Eliana Caro Suaza"
            textStyles="font-bold text-4xl my-8 text-center text-transparent bg-clip-text  bg-gradient-to-r from-[#ffcdc2] to-[#6057ca] hover:from-[#6057ca] hover:to-[#ffcdc2] transition duration-500 ease-in-out transform   md:text-5xl"
          />
          <button type="button" onClick={useScroll}>
            <AiOutlineArrowUp
              className="text-gray-400 text-2xl animate-pulse"
              size={40}
            />
          </button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
