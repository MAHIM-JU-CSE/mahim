import React from "react";

import styles from "./Experience.module.css";

export default function Experience() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Experience
        </h1>
        
        <div className={styles.experienceContainer}>
          <div className={styles.experienceCard}>
            <div className={styles.experienceHeader}>
              <div className={styles.experienceInfo}>
                <h3 className={styles.designation}>Senior Software Engineer</h3>
                <div className={styles.company}>
                  Samsung R&D Institute Bangladesh
                </div>
                <div className={styles.duration}>April 2023 - Present</div>
              </div>
            </div>
            
            <div className={styles.experienceContent}>
              <p className={styles.description}>
                Working on intelligent knowledge systems that help organizations make sense of their data. 
                I contribute to building semantic platforms that transform scattered information into structured, 
                queryable knowledge, enabling better decision-making and insights across enterprise environments.
                Currently leading the development of a key module within the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
