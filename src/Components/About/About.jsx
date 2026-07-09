import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <div className={styles.introduction}>
          <p>
          <br/>Welcome to my corner of the digital realm! I&apos;m<b> Prakash Magar</b>, a passionate <b>web and mobile app developer  </b>based in Baltimore, MD, USA.
            <br/><br/> With a keen eye for detail and a drive for innovation, I specialize in crafting user-centric digital experiences that blend cutting-edge technology with elegant design. Born in the breathtaking land of Mount Everest, I draw inspiration from the rich cultural heritage and natural beauty of Nepal, infusing my projects with a unique perspective that resonates with audiences worldwide.
            <br /> <br/> Beyond coding, I am an avid content creator on social media, where I share insights into my development journey and celebrate the diverse tapestry of Nepalese culture. Join me as I continue to push the boundaries of possibility in the digital landscape, one line of code at a time. Let&apos;s build something extraordinary together.
            <br/><br/>Here, the <b>wordcloud</b> represent the list of technologies I&apos;m familiar with.
          </p>
        </div>
        <img
          src={getImageUrl("about/skills.jpg")}
          alt="My pic in Uni"
          className={styles.aboutImage}
          loading="lazy"
        />
      </div>
    </section>
  );
};
