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
                <h3 className={styles.designation}>Sr. Software Engineer</h3>
                <div className={styles.company}>
                  Samsung R&D Institute Bangladesh
                </div>
                <div className={styles.duration}>April, 2023 - Present</div>
              </div>
            </div>
            
            <div className={styles.experienceContent}>
              <h4 className={styles.subsectionTitle}>Innovation & Research</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Achieved <b>1 A1-grade patent</b> and developed an on-device PoC to demonstrate the feasibility of this patent.
                </li>
                <li className={styles.listItem}>
                  Submitted <b>2 research proposals</b> for patent development, which were selected by Samsung's Tech Management team and assigned DOIs.
                </li>
                <li className={styles.listItem}>
                  Conceived and developed <b>two AI-driven solutions</b> for Samsung's internal AI contest, both selected for PoC exhibition.
                </li>
                <li className={styles.listItem}>
                  Designed and delivered <b>3 AI-enhanced features</b> to improve project functionality and user experience; all were integrated into the final product after successful PoCs.
                </li>
                <li className={styles.listItem}>
                  Actively contribute to team innovation meetings by evaluating peer-submitted ideas and providing constructive technical feedback on novelty, obviousness, and feasibility.
                </li>
              </ul>

              <h4 className={styles.subsectionTitle}>Development</h4>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  Working on developing a <b>Knowledge Graph build tool</b> in collaboration with <b>Oxford Semantic Technologies, UK</b> (acquired by Samsung in 2024), focusing on ontology creation, visualization, data mapping, and semantic reasoning with <b>RDFox</b>.
                </li>
                <li className={styles.listItem}>
                  Developed real-time in-memory persistent graph canvas with drag-and-drop support, allowing users to construct and edit RDF-based knowledge schema visually.
                </li>
                <li className={styles.listItem}>
                  Leading the development of a module called <b>DATA MAPPING</b>, featuring a data mapping canvas that enables users to connect raw data to semantic entities, allowing large CSV or Parquet datasets to be transformed into RDF triples in about 10 minutes.
                </li>
                <li className={styles.listItem}>
                  Led requirement analysis, technical design, and full-stack development using <b>Next.js, TypeScript, React Flow, React Query, TRPC, Zod, SPARQL, Zustand, Jest, Playwright, Storybook</b>.
                </li>
                <li className={styles.listItem}>
                  Mentored <b>3 junior engineers</b> by conducting code reviews, enhancing code quality, and guiding technical decisions.
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
