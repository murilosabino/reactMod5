import React from "react";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={style.footer}>
        <div className={style.footerItems}>
          
          <div className={style.icones}>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
          </div>
          <h3 className={style.textFooter}> Larica &copy; 2015</h3>
          <p className={style.endereco}>
            Rua das Pitangueiras nº 420 Vila das Orquídeas - São Paulo
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
