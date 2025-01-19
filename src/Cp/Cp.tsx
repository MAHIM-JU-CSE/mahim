import React from "react";

import styles from "./Cp.module.css";

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
                wordWrap: "break-word",
                wordBreak: "break-word",
                paddingLeft: 20,
              }}
            >
              Competitive Programming
            </h1>
          </div>
          <div className={styles.rightCol}>
            <ul className={styles.list}>
              <ul>
                <li className={styles.listItem}>
                  Competed in 3 ICPC Dhaka Regional prelims for 2021-22,
                  2022-23, and 2023-24 with teams JU_NoName, JU_3AngryMen, and
                  JU_Metamask.
                </li>
                <li className={styles.listItem}>
                  Ranked 87th in NCPC 2023 prelims 2023 onsite contest with team
                  JU_Anirbaaan. Standings: NCPC 2023 Preli.
                </li>
                <li className={styles.listItem}>
                  Ranked 146th in NCPC 2023 Final onsite contest with team
                  JU_Anirbaaan. Standings: NCPC 2023 Final.
                </li>
                <li className={styles.listItem}>
                  Ranked 16th in the MBSTU Inter Department Programming Contest
                  2021 Final with team JU_darkMatter. Standings: MBSTU 2021
                  Final.
                </li>
                <li className={styles.listItem}>
                  Earned Bronze Medal in the University Physics Competition 2021
                  (a research competition) (Team No: 233). UPC 2021 Final.
                </li>
                <li className={styles.listItem}>
                  Participated in Google Kick Start 2022 Round A, B, and E with
                  global ranking 4336, 1260, and 3525 respectively.
                </li>
                <li className={styles.listItem}>
                  Ranked 2nd in Bangladesh and 82nd globally out of 22,249
                  participants in CodeChef Round 62. Standings: Codechef Round
                  62.
                </li>
                <li className={styles.listItem}>
                  Ranked 4th in Bangladesh and 123rd globally out of 6,753
                  participants in CodeChef Round 17. Standings: Codechef Round
                  17.
                </li>
                <li className={styles.listItem}>
                  Ranked 14th in Bangladesh and 852nd globally out of 11,816
                  participants in Codeforces Round 755 (Div. 2). Codeforces
                  Round 755.
                </li>
                <li className={styles.listItem}>
                  Ranked 26th in Bangladesh and 551st globally out of 11,000+
                  participants in Codeforces Round 792 (Div. 1 + Div. 2).
                  Codeforces Round 792.
                </li>
                <li className={styles.listItem}>
                  Highest ratings: 1568 on Codeforces (Specialist, handle:
                  Mahim) and 1916 on CodeChef (4*, handle: mahim47).
                </li>
                <li className={styles.listItem}>
                  Participated in over 185 online and over 10 onsite contests
                  and solved 1540+ programming problems on different online
                  judges. (StopStalk Profile).
                </li>
                <li className={styles.listItem}>
                  Organizer, Problem Setter, and Judge for JU CSE 29’s Brain
                  Muscle Checking Contest 2022 and Binary Brains Battle December
                  2022.
                </li>
                <li className={styles.listItem}>
                  Ranked 3815th out of 27604 participants in Hackercup 2022
                  Qualification Round and progressed to the next round.
                  Hackercup 2022.
                </li>
                <li className={styles.listItem}>
                  Participated in Codegoda Programming Competition 2022 by
                  Agoda.
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
