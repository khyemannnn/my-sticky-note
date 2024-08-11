'use client';

import CreateNote from '@/components/create-note-form';
import { useState, useEffect } from 'react';

const TypewriterEffect = ({ text, typingSpeed = 100, pauseDuration = 2000 }) => {
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      let timer;
      if (!isDeleting && index < text.length) {
        // Typing
        timer = setTimeout(() => {
          setDisplayText((prevText) => prevText + text[index]);
          setIndex((prevIndex) => prevIndex + 1);
        }, typingSpeed);
      } else if (isDeleting && index > 0) {
        // Deleting
        timer = setTimeout(() => {
          setDisplayText((prevText) => prevText.slice(0, -1));
          setIndex((prevIndex) => prevIndex - 1);
        }, typingSpeed / 2);
      } else {
        // Pause before reversing direction
        timer = setTimeout(() => {
          setIsDeleting(!isDeleting);
        }, pauseDuration);
      }
  
      return () => clearTimeout(timer);
    }, [index, isDeleting, text, typingSpeed, pauseDuration]);
  
    return (
      <p className="typewriter">
        {displayText}
        <span className="cursor"></span>
      </p>
    );
  };
  
  export default function NewNotePage() {
    return (
      <div className="main-content">
        <div className="wspa-container">
          <h1>Work smart, </h1>
          <TypewriterEffect text="plan ahead..." typingSpeed={100} pauseDuration={2000} />
        </div>
        <div>
          <CreateNote />
        </div>
      </div>
    );
  }
