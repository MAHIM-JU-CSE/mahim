'use client';

import styles from './Research.module.css';

export default function Research() {
  const publications = [
    {
      id: 1,
      title: "Automatic License Plate Recognition System for Bangla License Plates using CNN",
      conference: "IEEE TENCON 2019",
      type: "Conference Paper",
      description: "This work presents a CNN-based system specifically designed to detect and recognize Bangla license plates under challenging real-world conditions. It enhances prior CNN-only methods by incorporating fuzzy logic, enabling adaptive performance across varying lighting, blur, orientation, and plate positioning scenarios.",
      link: "#",
      icon: "📝"
    },
    {
      id: 2,
      title: "Machine Learning Approaches for Predictive Analytics in Healthcare",
      conference: "ACM Computing Surveys 2023",
      type: "Journal Article",
      description: "A comprehensive survey of machine learning techniques applied to healthcare predictive analytics, covering recent advances in deep learning, ensemble methods, and interpretable AI for medical diagnosis and treatment planning.",
      link: "#",
      icon: "📝"
    },
    {
      id: 3,
      title: "Deep Learning for Natural Language Processing in Bengali",
      conference: "ICON 2022",
      type: "Conference Paper",
      description: "This paper explores the application of transformer-based models for various NLP tasks in Bengali language, including sentiment analysis, text classification, and machine translation with improved accuracy over traditional methods.",
      link: "#",
      icon: "📝"
    }
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <h1
              style={{
                marginBottom: 10,
                marginLeft: 10,
                fontWeight: 400,
                color: "#313131",
              }}
            >
              Research & Publications
            </h1>
          </div>
          <div className={styles.rightCol}>
            <p className={styles.subtitle}>
              Exploring the frontiers of technology through research and academic contributions
            </p>
            
            <div className={styles.publicationsContainer}>
              {publications.map((publication) => (
                <div key={publication.id} className={styles.publicationCard}>
                  <div className={styles.publicationHeader}>
                    <span className={styles.publicationIcon}>{publication.icon}</span>
                    <div className={styles.publicationMeta}>
                      <span className={styles.conference}>{publication.conference}</span>
                      <span className={styles.type}>• {publication.type}</span>
                    </div>
                  </div>
                  
                  <h3 className={styles.publicationTitle}>
                    {publication.title}
                  </h3>
                  
                  <p className={styles.publicationDescription}>
                    {publication.description}
                  </p>
                  
                  <a 
                    href={publication.link} 
                    className={styles.viewPaperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Paper →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
