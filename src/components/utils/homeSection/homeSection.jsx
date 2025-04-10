import styles from "./homeSection.module.css";
import portraitImg from "../../assets/portrait.png";
import certificateSVG from "../../assets/certificate.svg";
import saudiFlagSVG from "../../assets/saudiFlag.svg";
import vision2030SVG from "../../assets/vision2030.svg";

const HomeSection = () => {
  return (
    <section id="home" className={styles.home}>
      <main className={styles.homeMain}>
        <section className={styles.homeSectionLeft}>
          <h1 className={styles.headline}>
            The New Standard In Saudi Training
          </h1>
          <div className={styles.subHeading}>
            <ul className={styles.subHeadingUl}>
              <li>
                <img
                  src={certificateSVG}
                  alt="certificate"
                  className={styles.svg}
                  draggable="false"
                />
                <span>World-class certifications</span>
              </li>
              <li>
                <img
                  src={saudiFlagSVG}
                  alt="saudi flag"
                  className={styles.svg}
                />
                <span>Saudi-first leadership</span>
              </li>
              <li>
                <img
                  src={vision2030SVG}
                  alt="vision 2030"
                  className={styles.svg}
                />
                <span>Build for Vision 2030</span>
              </li>
            </ul>
          </div>
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Empowering Saudi's security workforce through elite,
              internationally training.
            </p>
            <button className={styles.ctaBtn}>Get In Touch With Us</button>
          </div>
        </section>
        <section className={styles.homeSectionRight}>
          <img src={portraitImg} alt="portrait" className={styles.portrait} />
        </section>
      </main>
    </section>
  );
};

export default HomeSection;
