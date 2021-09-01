import React from "react";
import CardTime from "../../components/CardTime/CardTime";
import styles from "./Time.module.css";
import fotoVagner from "../../img/Vagner.jpg";
const Contato = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Conheça nosso time de desenvolvedores</h1>
      <CardTime
        srcImg={fotoVagner}
        cardName={"Vagner Messias"}
        cardText={
          "Estudante de Desenvolvimento, engenheiro de formação e aventureiro de coração!"
        }
        hrefIn={"https://www.linkedin.com/in/vagner-messias-2735a5182/"}
        cardLinkIn={"Linkedin"}
      />
      <CardTime
        srcImg={
          "https://avatars.githubusercontent.com/u/81388788?s=400&u=eb166bcb666b7bbaa5d8dd4571fea577d3d3c0a0&v=4"
        }
        cardName={"Filipe Pinheiro Teixeira"}
        cardText={
          "Estudante de Desenvolvimento, engenheiro de formação e aventureiro de coração!"
        }
        hrefIn={"https://www.linkedin.com/in/teixeirapfilipe/"}
        cardLinkIn={"Linkedin"}
      />
      <CardTime
        srcImg={
          "https://media-exp1.licdn.com/dms/image/C4D03AQF3BPdSfegSyw/profile-displayphoto-shrink_800_800/0/1620404685214?e=1635984000&v=beta&t=WBXwR6X2nm_LvuhVA3S7E9hCMY-JjzQlJYdU9WannL8"
        }
        cardName={"Murilo Sabino"}
        cardText={
          "Estudante de Desenvolvimento, engenheiro de formação e aventureiro de coração!"
        }
        hrefIn={"https://www.linkedin.com/in/murilosabino/"}
        cardLinkIn={"Linkedin"}
      />
      <CardTime
        srcImg={"https://avatars.githubusercontent.com/u/59985165?v=4"}
        cardName={"Dayane Garcia"}
        cardText={
          "Estudante de Desenvolvimento, engenheiro de formação e aventureiro de coração!"
        }
        hrefIn={"https://www.linkedin.com/in/dayane-garcia1/"}
        cardLinkIn={"Linkedin"}
      />
      <CardTime
        srcImg={
          "https://media-exp1.licdn.com/dms/image/C4E03AQFmriKCy_QRSw/profile-displayphoto-shrink_800_800/0/1619713166879?e=1635984000&v=beta&t=NL0-Rth-kONBpDlkxdvaInhGV-EOuoD9gdOWXB3xA8I"
        }
        cardName={"Ana Carolina Faria"}
        cardText={
          "Estudante de Desenvolvimento, engenheiro de formação e aventureiro de coração!"
        }
        hrefIn={
          "https://www.linkedin.com/in/ana-carolina-faria-erthal-903008202/"
        }
        cardLinkIn={"Linkedin"}
      />
    </main>
  );
};

export default Contato;
