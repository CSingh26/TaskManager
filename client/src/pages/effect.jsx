import React, { useState, useEffect } from 'react';

const TextEffect = ({text ,setDelayTime}) => {
    const[currentText, setCurrentText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
          const timeout = setTimeout(() => {
            setCurrentText(prevText => prevText + text[currentIndex]);
            setCurrentIndex(prevIndex => prevIndex + 1)
          }, setDelayTime)
      
          return () => clearTimeout(timeout);
        }
      }, [currentIndex, setDelayTime, text]);
      
      return <span>{currentText}</span>
}

export default TextEffect