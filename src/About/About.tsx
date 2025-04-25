import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import styles from "./About.module.css";

export default function About() {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <div className={styles.profile}>
              <img src="/pro2.jpg" alt="ffff" className={styles.image} />
              <div>
                <h2 className={styles.name}>Mahbub Islam Mahim</h2>
                <h3 className={styles.title}>Software Engineer</h3>
                <h3 className={styles.company}>
                  <a
                    href="https://research.samsung.com/srbd"
                    target="_blank"
                    rel="noopener"
                  >
                    <span>Samsung R&D Institute Bangladesh</span>
                  </a>
                </h3>

                <div className={styles.bigIconGroup}>
                  <a
                    href="mailto:mahbubislammahim@gmail.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className={`fas fa-envelope ${styles.bigIcon}`} />
                  </a>

                  <a
                    href="https://github.com/MAHIM-JU-CSE"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className={`fab fa-github ${styles.bigIcon}`} />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/mahbub-islam-mahim-4634a5154/"
                    target="_blank"
                    rel="noopener"
                  >
                    <i className={`fab fa-linkedin ${styles.bigIcon}`} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightCol}>
            <div className={styles.aboutText}>
              <p className={styles.p}>
                Hi, I am Mahbub Islam Mahim, a software engineer at{" "}
                <a
                  href="https://research.samsung.com/srbd"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Samsung R&D Institute Bangladesh
                </a>
                . I completed my MSc and BSc in Computer Science & Engineering
                from{" "}
                <a
                  href="https://juniv.edu/"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Jahangirnagar University
                </a>
                . My MSc thesis has been accepted for publication in the JUJECS
                journal and on this thesis I've received the{" "}
                <a
                  href="https://grant.most.gov.bd/en/services/most/nst-fellowship"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  National Science and Technology fellowship award
                </a>{" "}
                from the Ministry of Science and Technology, Bangladesh.
                During my academic journey, I have received the University dean's scholarship five times - four times during my BSc and once during my MSc - for academic excellence.
              </p>
              <br />
              <p className={styles.p}>
                Currently, as a Software Engineer at Samsung Research, I lead the development of a project on Knowledge Graph build tool using{" "}
                <a
                  href="https://www.oxfordsemantic.tech/rdfox"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  RDFox engine
                </a>{" "}
                . In this role, I'm collaborating with the{" "}
                <a
                  href="https://www.oxfordsemantic.tech/"
                  target="_blank"
                  style={{ color: "#2e48a3" }}
                >
                  Oxford Semantic Technology, UK
                </a>{" "}
                team. My upcoming work will focus on fine-tuning LLMs using our KG build tool. I have also contributed to Samsung's patent development, securing an <b>A1-grade patent</b> in February 2025 in the domain of Generative AI and Image Processing.
              </p>
              <br />
              <p className={styles.p}>
                I am passionate about exploring advanced machine learning techniques, LLMs, and deep neural networks to tackle real-world challenges in healthcare, education, and resource management. My goal is to create solutions that are both impactful and efficient.
              </p>
              <br />
              <p className={styles.p}>
                <i className="fas fa-graduation-cap pr-1 fa-fw" />
                <a
                  href="https://drive.google.com/file/d/1feuHlepDWe-iQbbcBuUdNXiRbgoUojdd/view?usp=drive_link"
                  target="_blank"
                  rel="noopener"
                >
                  <span className={styles.degree1}> MSc Thesis | </span>
                </a>
                <i className="fas fa-book-reader pr-1 fa-fw" />
                <a
                  href="https://research.samsung.com/srbd"
                  target="_blank"
                  rel="noopener"
                >
                  <span className={styles.degree2}> Research | </span>
                </a>
                <i className="fas fa-briefcase" />
                <a
                  href="https://research.samsung.com/srbd"
                  target="_blank"
                  rel="noopener"
                >
                  <span className={styles.degree3}> Experience | </span>
                </a>

                <i className="fas fa-file-alt" />
                <a
                  href="/summary.pdf"
                  download="Mahbub_Islam_Resume.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <span className={styles.degree4}> Resume</span>
                </a>
              </p>
            </div>

            <div className={styles.aboutRow}>
              <div className={styles.interest}>
                <div className={styles.heading}>Interests</div>
                <ul className={styles.list}>
                  <li className={styles.listItem}>Advanced Machine Learning</li>
                  <li className={styles.listItem}>Generative AI</li>
                  <li className={styles.listItem}>
                    Trustworthy and efficient AI
                  </li>
                  <li className={styles.listItem}>
                    Knowledge graph, Semantic reasoning
                  </li>

                  <li className={styles.listItem}>Software Engineering</li>
                </ul>
              </div>
              <div className={styles.education}>
                <div className={styles.heading}>Education</div>
                <ul className={styles.list2}>
                  <li className={styles.listItem}>
                    <i className="fas fa-graduation-cap pr-1 fa-fw" />
                    <span className={styles.edu}>
                      {" "}
                      MSc in Computer Science & Engineering, 2023
                    </span>
                    <div className={styles.des}> Jahagnirnagar University</div>
                    <div className={styles.des}> CGPA: 3.83/4.00</div>
                  </li>

                  <li className={`${styles.listItem} ${styles.listItem2}`}>
                    <i className="fas fa-graduation-cap pr-1 fa-fw" />
                    <span className={styles.edu}>
                      {" "}
                      BSc in Computer Science & Engineering, 2021
                    </span>
                    <div className={styles.des}> Jahagnirnagar University</div>
                    <div className={styles.des}> CGPA: 3.69/4.00</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
