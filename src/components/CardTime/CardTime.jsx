import React, { useState } from "react";
import styles from "./CardTime.module.css";
import iconeBurger from "../../img/burguer.png";
import IconeLinkedin from '../../img/Linkedin.png'

function CardTime(props) {
  const { srcImg, cardName, cardText, cardLinkIn, hrefIn, altImg } = props;

  const [infos, setinfos] = useState(false);

  const loadingInfos = () => {
    setinfos(infos === false ? true : false);
  };

  return (
    <article className={styles.cardTime}>
      <img className={styles.imgTime} src={srcImg} alt={altImg} />
      <article className={styles.acordeon} onClick={loadingInfos}>
        <button className={styles.buttonCard}>
          <p className={styles.nameCard}>{cardName}</p>
          {/* <img src={iconeBurger} className={`${styles.buttonIcon} ${infos}`} /> */}
        </button>
        {infos ? (
          <div className={styles.cardText}>
            <p>{cardText}</p>
            <a href={hrefIn}><img className={styles.buttonIcon} href={cardLinkIn} src={IconeLinkedin} /></a>
          </div>
        ) : null}
      </article>
    </article>
  );
}

export default CardTime;
