import { useState, useEffect } from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

export const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);

  useEffect(() => {
    // Set the selected experience to the index of the first item in the history array
    setSelectedExperience(0);
  }, []);

  const handleClick = (index) => {
    setSelectedExperience(index === selectedExperience ? selectedExperience : index);
  };

  return (
    <div className={styles.experienceContainer}>
      <section className={styles.container} id="experience">
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.layout}>
          <div className={styles.content}>
            {/* Main content area */}
            <div className={styles.main}>
              {selectedExperience !== null && (
                <div className={styles.historyItemDetails}>
                  <h3>
                    {`${history[selectedExperience].role}, ${history[selectedExperience].organisation}`}
                  </h3>
                  <p>{`${history[selectedExperience].startDate} - ${history[selectedExperience].endDate}`}</p>
                  <ul>
                    {history[selectedExperience].experiences.map((experience, id) => (
                      <li key={id}>{experience}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className={`${styles.sidebar} ${styles.sidebarRight} ${styles.smallSidebar}`}>
              <div className={styles.sidebarContainer}>
                <ul className={styles.history}>
                  {history.map((historyItem, index) => (
                    <li
                      key={index}
                      className={`${styles.historyItem} ${
                        index === selectedExperience ? styles.active : ""
                      }`}
                      onClick={() => handleClick(index)}
                    >
                      <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
