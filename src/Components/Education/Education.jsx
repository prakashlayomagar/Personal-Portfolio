import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.educationItems}>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/unh.jpg")}
              alt="UNH Logo"
              className={styles.educationImage}
              loading="lazy"
            />
            <div className={styles.educationItemText}>
              <h3>
                <a
                  href="https://www.newhaven.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  University of New Haven
                </a>
              </h3>
              <p>
                West Haven, Connecticut, USA
                <br />
                Masters in Science in Computer Science
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/kdu.jpg")}
              alt="Kdu Logo"
              className={styles.educationImage}
              loading="lazy"
            />
            <div className={styles.educationItemText}>
              <h3>
                <a
                  href="https://global.kduniv.ac.kr/global/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kyungdong University
                </a>
              </h3>
              <p>
                Gangwondo, South Korea
                <br />
                Bachelor in Computer Engineering
              </p>
            </div>
          </li>
          <li className={styles.educationItem}>
            <img
              src={getImageUrl("about/hims.jpg")}
              alt="Hims logo"
              className={styles.educationImage}
              loading="lazy"
            />
            <div className={styles.educationItemText}>
              <h3>
                <a
                  href="https://www.facebook.com/hims.school/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Himalaya International Model Secondary School (HIMS)
                </a>
              </h3>
              <p>
                Jorpati, Kathmandu, Nepal
                <br />
                Higher Secondary Education in Science Stream
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};