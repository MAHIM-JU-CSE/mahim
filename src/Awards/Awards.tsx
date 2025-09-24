'use client';

import styles from './Awards.module.css';

export default function Awards() {
  const awards = [
    {
      id: 1,
      icon: "🏅",
      title: "Icon Award",
      period: "2024",
      organization: "Samsung",
      color: "orange"
    },
      {
        id: 2,
        icon: "💡",
        title: "Recognition in Innovation",
        period: "2024",
        organization: "Samsung",
        color: "blue"
      },
    {
      id: 3,
      icon: "💻",
      title: "Professional Software Coding Certification",
      period: "Aug 2023",
      organization: "Samsung",
      color: "purple"
    }
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Awards & Recognition
        </h1>
        
        <div className={styles.awardsContainer}>
          {awards.map((award) => (
            <div key={award.id} className={`${styles.awardItem} ${styles[award.color]}`}>
              <span className={styles.awardIcon}>{award.icon}</span>
              <div className={styles.awardContent}>
                <h3 className={styles.awardTitle}>{award.title}</h3>
                <div className={styles.awardMeta}>
                  <span className={styles.period}>{award.period}</span>
                  <span className={styles.organization}>{award.organization}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
