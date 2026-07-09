import styles from "./Profile.module.css";
import { getImageUrl } from "../../utils";

export const Profile = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}> Hi, I&apos;m Prakash Magar</h1>
        <p className={styles.description}>
          I&apos;m a <b className={styles.softwareEngineer}>Software Engineer </b>and I build things for web.
        </p>
        <a
          href="https://www.linkedin.com/in/prakash-layo-magar-fullstackjavadev/"
          className={styles.contactBtn}
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </div>
      <img
        src={getImageUrl("proimg/pro_img.jpg")}
        alt="Portrait of Prakash Magar"
        className={styles.MyImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};