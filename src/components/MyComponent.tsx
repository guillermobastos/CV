// MyComponent.tsx
import React from "react";
import styles from "../styles/MyComponent.module.css";
import ProjectSection from "./ProjectSection";
import QuestionSection from "./QuestionSection";

const MyComponent: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.header}>PROYECTS</div>
        <ProjectSection
          title="Vixia System Predicción Bloom"
          phases={[
            {
              title: "Research",
              description: [
                "Learning about Python libraries",
                "Kmeans 🟥 PCA 🟥 T-SNE",
              ],
            },
            {
              title: "Implementation",
              description: "Descripción de la fase 2...",
            },
            {
              title: "Development",
              description: "Descripción de la fase 3...",
            },
            {
              title: "Repository",
              description: (
                <a
                  href="https://github.com/guillermobastos/Predicciones"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink} // Clase de estilos para el enlace
                >
                  <img
                    src="/icons/icon_github_purple.svg"
                    alt="GitHub Repository"
                  />
                </a>
              ), // Asegúrate de que description esté definida como string vacío si no se usa
            },
          ]}
        />
        <ProjectSection
          title="Vixia System Página Web"
          phases={[
            { title: "Planning", description: "Descripción de la fase 1..." },
            { title: "Design", description: "Descripción de la fase 2..." },
            {
              title: "Development",
              description: "Descripción de la fase 3...",
            },
            {
              title: "Repository",
              description: (
                <a
                  href="https://github.com/guillermobastos/dudas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink} // Clase de estilos para el enlace
                >
                  <img
                    src="/icons/icon_github_purple.svg"
                    alt="GitHub Repository"
                  />
                </a>
              ),
            },
            // Agrega más fases según sea necesario
          ]}
        />
         <ProjectSection
          title="Open AI Chat"
          phases={[
            { title: "Planning", description: "Descripción de la fase 1..." },
            { title: "Design", description: "Descripción de la fase 2..." },
            {
              title: "Development",
              description: "Descripción de la fase 3...",
            },
            {
              title: "Repository",
              description: (
                <a
                  href="https://github.com/guillermobastos/carreras_openwebinars"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubLink} // Clase de estilos para el enlace
                >
                  <img
                    src="/icons/icon_github_purple.svg"
                    alt="GitHub Repository"
                  />
                </a>
              ),
            },
            // Agrega más fases según sea necesario
          ]}
        />
      </div>
      <div className={styles.section}>
        <QuestionSection />
      </div>
    </div>
  );
};

export default MyComponent;
