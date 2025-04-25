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
                  Currently working on a project to build a{" "}
                  <b>Knowledge Graph editing tool</b> using the RDFox engine.
                  Collaborating with the Oxford Semantic Technologies team , UK
                  (acquired by Samsung in 2024).
                </li>
                <li className={styles.listItem}>
                  Responsible for analyzing requirements, designing features,
                  and developing full-stack solutions using Next.js, TypeScript,
                  React Flow, React Query, Playwright, Storybook, Jest,
                  Material-UI (MUI), and Java .
                </li>
                <li className={styles.listItem}>
                  Contributing to patent development in the area of AI-powered
                  camera technology. Secured <b>1 A1-grade patent</b> in
                  February 2025.
                </li>
                <li className={styles.listItem}>
                  Proposed and developed <b>2 AI-driven ideas</b> for Samsung’s
                  internal AI contest, both selected for Proof-of-Concept (PoC)
                  incubation.
                </li>
                <li className={styles.listItem}>
                  Proposed and developed <b>3 project feature ideas</b> to
                  enhance product functionality and user experience.
                </li>
                <li className={styles.listItem}>
                  Completed a <b>6-month Generative AI training program</b>{" "}
                  conducted by{" "}
                  <a
                    href="https://www.buet.ac.bd/web/#/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#2e48a3" }}
                  >
                    BUET
                  </a>{" "}
                  and Samsung, focusing on practical LLM applications.
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
