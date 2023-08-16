import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundImage:
          "url()",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600]`}
        >
          O que você procura na <br /> Star Gamers tem
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]">
          Bem-vindo à nossa loja para gamers, onde você encontra tudo para elevar sua experiência de jogo.
          Oferecemos periféricos de alto desempenho, os últimos lançamentos de jogos e acessórios inspirados
          nos universos mais adorados.{" "}
          <br /> Torne sua jogatina ainda mais incrível conosco!
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Compre agora
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
