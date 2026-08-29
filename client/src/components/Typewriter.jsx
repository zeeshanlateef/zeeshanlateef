import React, { useState, useEffect } from 'react';

const Typewriter = ({ 
  phrases = ["Full Stack Developer", "React.js Specialist", "REST API Builder"], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delayBeforeDelete = 2000, 
  delayBeforeType = 500 
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
    <span className="inline-block min-h-[1.5em]">
      <span className="text-primary font-semibold font-display">
        {currentText}
      </span>
      <span className="inline-block w-[3px] ml-1 bg-secondary animate-pulse" style={{ animationDuration: '0.8s' }}>|</span>
    </span>
  );
};

export default Typewriter;
