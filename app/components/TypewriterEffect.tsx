'use client';

import { useEffect, useState } from 'react';

interface TypewriterEffectProps {
  texts: string[];
  speed?: number;
  delay?: number;
  className?: string;
}

export function TypewriterEffect({ 
  texts, 
  speed = 100, 
  delay = 2000,
  className = '' 
}: TypewriterEffectProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      
      if (isPaused) {
        setTimeout(() => setIsPaused(false), delay);
        return;
      }

      if (!isDeleting && currentText === fullText) {
        setIsPaused(true);
        setTimeout(() => setIsDeleting(true), delay);
        return;
      }

      if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      const timeout = setTimeout(() => {
        setCurrentText(
          isDeleting 
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }, isDeleting ? speed / 2 : speed);

      return () => clearTimeout(timeout);
    };

    handleTyping();
  }, [currentText, currentTextIndex, isDeleting, isPaused, speed, delay, texts]);

  return (
    <span className={className}>
      {currentText}
      <span className="ml-1 animate-pulse">|</span>
    </span>
  );
}