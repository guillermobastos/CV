// components/QuestionSection.tsx

import styles from "../styles/QuestionSection.module.css";

const QuestionSection: React.FC = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles.container}>
        <div className={styles.question}>
          <span>ABOUT ME</span>
          <img src="/icons/AVAX.svg" alt="" />
        </div>
        <div className={styles.response}>
          <p>I like all kinds of sports 🏀🏐🎾⚽🏓</p>
          <p>Passionate about traveling ✈️</p>
          <p>Interested on crypto 💰 and IA 🤖</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.question}>
          <span>STUDIES</span>
          <img src="/icons/BASE.svg" alt="" />
        </div>
        <div className={styles.response}>
          <p>FP Development of Multiplatform Applications 🖥️</p>
          <p>English B2 Certificate 🏴󠁧󠁢󠁥󠁮󠁧󠁿</p>
          <p>High School Diploma in Science 📚</p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.question}>
          <span>TECHNOLOGIES</span>
          <img src="/icons/BNB.svg" alt="" />
        </div>
        <div className={styles.response}>
          <p>Languages ➡️ python - java - C#</p>
          <p>Libraries ➡️ pandas - sklearn - numpy - matplotlib</p>
          <p>IDE ➡️ Visual Studio Code</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
