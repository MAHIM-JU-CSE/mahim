'use client';

import styles from './Patent.module.css';

export default function Patent() {
  const patents = [
    {
      id: 1,
      title: "Method for Enhancing Wide-Angle Images by Integrating Multiple Fields of View from Different Lenses",
      patentNumber: "Samsung Research Patent",
      status: "filing",
      filingDate: "TBD",
      grantDate: "TBD",
      description: "A novel method that enhances wide-angle images by integrating multiple fields of view from different lenses, providing superior image quality and expanded visual coverage. This innovation was graded A1 by Samsung Research on February 20, 2025, representing the highest level of technical excellence and commercial potential.",
      link: "#",
      icon: "📷"
    }
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Patents
        </h1>
        
        <div className={styles.patentsContainer}>
          {patents.map((patent) => (
            <div key={patent.id} className={styles.patentCard}>
              <div className={styles.patentHeader}>
                <span className={styles.patentIcon}>{patent.icon}</span>
                <h3 className={styles.patentTitle}>
                  {patent.title}
                </h3>
              </div>
              
              <div className={styles.patentMeta}>
                <div className={styles.patentInfo}>
                  <span className={styles.patentNumber}>{patent.patentNumber}</span>
                  <span className={`${styles.status} ${styles[patent.status]}`}>
                    Filing Ongoing
                  </span>
                </div>
                <div className={styles.patentDates}>
                  {patent.filingDate !== "TBD" && (
                    <span className={styles.filingDate}>Filed: {patent.filingDate}</span>
                  )}
                  {patent.grantDate !== "TBD" && (
                    <span className={styles.grantDate}>Granted: {patent.grantDate}</span>
                  )}
                </div>
              </div>
              
              <p className={styles.patentDescription}>
                {patent.description}
              </p>
              
              <a href={patent.link} className={styles.viewPatentLink}>
                View Patent Details →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
