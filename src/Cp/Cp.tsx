import React from "react";

import styles from "./Cp.module.css";

export default function Cp() {
  const achievements = [
    {
      platform: "CodeChef",
      rating: "1916",
      level: "4★",
      handle: "mahim47",
      link: "https://www.codechef.com/users/mahim47"
    },
    {
      platform: "Codeforces", 
      rating: "1568",
      level: "Specialist",
      handle: "Mahim",
      link: "https://codeforces.com/profile/Mahim"
    },
    {
      platform: "ICPC",
      level: "Regional",
      highlight: "3-time participant (2021-24)",
      teams: ["JU_NoName", "JU_3AngryMen", "JU_Metamask"]
    },
    {
      platform: "NCPC 2023",
      level: "National",
      highlight: "NCPC finalist"
    },
  ];

  const stats = [
    { label: "Problems Solved", value: "1540+" },
    { label: "Contests Participated", value: "185+" },
    { label: "Onsite Contests", value: "10+" },
    { label: "Organized Contests", value: "2" }
  ];

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Programming Contests
        </h1>
        
        <p className={styles.description}>
          Former competitive programmer with strong algorithmic problem-solving skills. 
          Participated in major programming contests including ICPC, National Programming Contest, 
          and various online platforms during university years.
        </p>

        <div className={styles.achievementsList}>
          {achievements.map((achievement, index) => (
            <div key={index} className={styles.achievementItem}>
              <div className={styles.achievementHeader}>
                <h3 className={styles.platformName}>{achievement.platform}</h3>
                {achievement.rating && (
                  <div className={styles.rating}>
                    <span className={styles.ratingValue}>{achievement.rating}</span>
                    <span className={styles.ratingLevel}>{achievement.level}</span>
                  </div>
                )}
                {!achievement.rating && achievement.level && (
                  <div className={styles.level}>
                    <span className={styles.levelText}>{achievement.level}</span>
                  </div>
                )}
              </div>
              <p className={styles.highlight}>{achievement.highlight}</p>
              {achievement.handle && (
                <p className={styles.handle}>@{achievement.handle}</p>
              )}
              {achievement.link && (
                <a 
                  href={achievement.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.profileLink}
                >
                  View Profile
                </a>
              )}
              {achievement.teams && (
                <div className={styles.teams}>
                  {achievement.teams.map((team, i) => (
                    <span key={i} className={styles.teamTag}>{team}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.statsContainer}>
          <h3 className={styles.statsTitle}>Programming Statistics</h3>
          <div className={styles.statsGrid}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <div className={styles.statValue}>{stat.value}</div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
