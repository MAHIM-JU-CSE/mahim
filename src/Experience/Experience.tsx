import React from "react";

import styles from "./Experience.module.css";

export default function Experience() {
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
              Experiences
            </h1>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.designation}>Software Engineer</div>
            <div className={styles.company}>
              Samsung R&D Institute Bangladesh
            </div>
            <div className={styles.duration}>April, 2023 - Present</div>
            <ul className={styles.list}>
              <ul>
                <li className={styles.listItem}>
                  Involved in a project of developing a Knowledge Graph build
                  tool using RDFox engine. Later on, this will extend to
                  fine-tuning LLMs using our KG build tool and RAG (Retrieve and
                  Generate) interface to enhance the management and relevance of
                  private data. In 2024, Samsung acquired Oxford Semantic
                  Technology, UK and in this project, I am collaborating with the
                  Oxford team.
                </li>
                <li className={styles.listItem}>
                  Contributing to patent development focused on advancements in
                  camera photography and AI. 
                </li>
                <li className={styles.listItem}>
                  Analyzing feature requirements, designing and developing
                  features in the project.
                </li>
                <li className={styles.listItem}>
                  Technical stack includes Next.js, TypeScript, React Query,
                  Playwright, Storybook, Jest, Material-UI (MUI), React Flow,
                  Java, Spring Boot, Python etc.
                </li>
              </ul>
            </ul>

            <div className={styles.designation2}>Teaching Assistant</div>
            <div className={styles.company}>
              Dept of Computer Science & Engineering, Jahangirnagar University
            </div>
            <div className={styles.duration}>Dec, 2021 - Mar, 2023</div>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Trained junior students in C, C++, data structures, and
                algorithms for programming contests.
              </li>
              <li className={styles.listItem}>
                Served as Organizer, Problem Setter, and Judge for practice
                contests.
              </li>
              <li className={styles.listItem}>
                Coordinated academic activities and events of the department.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
