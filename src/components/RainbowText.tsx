import React, { useEffect, useState } from 'react';
import styles from "../styles/RainbowText.module.css";

interface RainbowTextProps {
  text: string | string[];
}

const RainbowText: React.FC<RainbowTextProps> = ({ text }) => {
  const [visibleText, setVisibleText] = useState<string>('');

  useEffect(() => {
    let fullText = '';
    if (Array.isArray(text)) {
      fullText = text.join('\n');
    } else {
      fullText = text;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setVisibleText(prevText => {
        if (currentIndex >= fullText.length) {
          clearInterval(intervalId);
          return prevText;
        }
        const nextChar = fullText.charAt(currentIndex);
        currentIndex++;
        return prevText + nextChar;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <h1 className={styles['rb-container']}>
      {visibleText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ))}
    </h1>
  );
};

export default RainbowText;


