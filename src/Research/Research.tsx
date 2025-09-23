'use client';

import styles from './Research.module.css';

export default function Research() {
  const publications = [
    {
      id: 1,
      title: "Divide and Conquer: A Two-Stage Cascaded Framework with K-Fold Ensembling for Multi-Label Bangla Hate Speech Classification",
      conference: "BLP Shared Task 1 @ AACL-IJCNLP 2025",
      type: "Conference Paper",
      description: "Designed a label-wise cascaded pipeline where each label is first classified using a binary model and then refined with a multiclass model, with 7-fold cross-validation and intra-label ensembling. Achieved 1st place in the workshop contest and currently writing for BEST PAPER award.",
      link: "https://github.com/AridHasan/blp25_task1?tab=readme-ov-file#subtask-1c-4",
      icon: "🏆"
    },
    {
      id: 2,
      title: "Optimizing the Fine‑Tuning Process of Large Language Models",
      conference: "Jahangirnagar University Journal of Electronics and Computer Science, Vol.16, June 2025",
      type: "Journal Article",
      description: "A comprehensive comparison of a memory-efficient fine-tuning method that combines quantization and LoRA on LLaMA-2 7B using the CodeAlpaca-20k dataset, reducing GPU memory usage from 112 GB to 10.8 GB without sacrificing performance, thereby enabling low-resource LLM deployment in real-world applications such as coding assistants.",
      link: "https://ecs.ju-journal.org/jujecs/article/view/38",
      icon: "📝"
    },
    {
      id: 3,
      title: "Enhancing Wide‑Angle Image Using Narrow‑Angle View of the Same Scene",
      conference: "arXiv preprint arXiv:2504.09455, April 2025",
      type: "Preprint",
      description: "Developed a GAN-based approach to enhance wide-angle images by fusing fine details from co-captured narrow-angle views, leveraging attention-based feature integration to improve visual fidelity.",
      link: "https://arxiv.org/abs/2504.09455",
      icon: "📝"
    },
 
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Research & Publications
        </h1>
        
        <div className={styles.publicationsContainer}>
          {publications.map((publication) => (
            <div key={publication.id} className={styles.publicationCard}>
              <div className={styles.publicationHeader}>
                <span className={styles.publicationIcon}>{publication.icon}</span>
                <h3 className={styles.publicationTitle}>
                  {publication.title}
                </h3>
              </div>
              
              <div className={styles.publicationMeta}>
                <span className={styles.conference}>{publication.conference}</span>
                <span className={styles.type}>• {publication.type}</span>
              </div>
              
              <p className={styles.publicationDescription}>
                {publication.description}
              </p>
              
              <a 
                href={publication.link} 
                className={styles.viewPaperLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
