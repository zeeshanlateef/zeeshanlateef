import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  phrases = ["Full Stack Developer", "PHP / Laravel Developer", "React Developer", "Vibe Coding Specialist"], 
  typingSpeed = 90, 
  deletingSpeed = 40, 
  delayBeforeDelete = 2200, 
  delayBeforeType = 400 
}) => {
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      // Deleting character
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing character
      timer = setTimeout(() => {
        setCurrentText(currentPhrase.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle complete typing of a phrase
    if (!isDeleting && currentText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } 
    // Handle complete deletion of a phrase
    else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      timer = setTimeout(() => {}, delayBeforeType);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, delayBeforeDelete, delayBeforeType]);

  return (
    <span className="inline-flex items-center text-primary font-bold font-display tracking-tight">
      <span>{currentText}</span>
      <span 
        className="inline-block w-[2.5px] h-[0.9em] ml-1 bg-primary rounded-full animate-pulse shrink-0" 
        style={{ animationDuration: '0.8s' }}
        aria-hidden="true"
      />
    </span>
  );
};

export default Typewriter;
