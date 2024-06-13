import React from "react";
import styles from "../styles/MyComponent.module.css";

interface PhaseProps {
  title: string | JSX.Element;
  description?: string | string[] | JSX.Element; // Hacer la descripción opcional
  image?: string;
}

const ProjectSection: React.FC<{ title: string; phases: PhaseProps[] }> = ({
  title,
  phases,
}) => {
  return (
    <div className={styles.project}>
      <div className={styles["project-title"]}>{title}</div>
      <div className={styles["project-phases"]}>
        {phases.map((phase, index) => (
          <div key={index} className={styles["phase"]}>
            <div>
              <div className={styles["phase-title"]}>{phase.title}</div>
              {phase.description && (
                <div className={styles["phase-description"]}>
                  {Array.isArray(phase.description) ? (
                    phase.description.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))
                  ) : (
                    <>{phase.description}</> // Mostrar directamente el elemento JSX
                  )}
                </div>
              )}
            </div>
            {phase.image && (
              <div className={styles["image-container"]}>
                <img
                  src={phase.image}
                  alt={typeof phase.title === 'string' ? phase.title : ''}
                  className={styles["phase-image"]}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;




