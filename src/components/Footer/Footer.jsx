import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <h3 className={style.textFooter}>
          {" "}
          Larica 2021 - Todos os direitos reservados
        </h3>
      </footer>
    </div>
  );
};

export default Footer;
