import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const SpeechBubbleContainer = styled.div`
  position: absolute;
  left: 300px;
  top: 60px;
  width: 150px;
  height: auto;
  min-height: 80px;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translateX(0)' : 'translateX(20px)'};
  transition: all 0.5s ease-in-out;
  pointer-events: none;
  z-index: 100;
`;

const Bubble = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 15px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:before {
    content: '';
    position: absolute;
    left: -12px;
    top: 15px;
    border-style: solid;
    border-width: 8px 12px 8px 0;
    border-color: transparent rgba(255, 255, 255, 0.75) transparent transparent;
  }
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.6;
  color: #333;
`;

const DIALOGUE = {
  KNT: [
    "There are so many clothes...",
    "I have no idea.",
    "Maybe... this looks good?",
    "Ah... whatever works is fine.",
    "Nayuta, are you smirking?",
  ],
  NYT: [
    "Taking your time, huh?",
    "That's quite a creative combination.",
    "Is this your style, Kanata?",
    "Well... not bad, I guess?",
    "Want to try something else?",
  ],
};

const SpeechBubble = ({ character }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentDialogue, setCurrentDialogue] = useState('');
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const currentMood = useSelector(state => 
    character === 'KNT' ? state.outfit.KNTMood : state.outfit.NYTMood
  );

  useEffect(() => {
    const showDialogue = () => {
      const dialogues = DIALOGUE[character];
      setCurrentDialogue(dialogues[dialogueIndex]);
      setIsVisible(true);
      
      setTimeout(() => {
        setIsVisible(false);
        setDialogueIndex((prevIndex) => (prevIndex + 1) % dialogues.length);
      }, 8000);
    };

    showDialogue();
    const intervalId = setInterval(showDialogue, 8000);
    
    return () => {
      clearInterval(intervalId);
      setIsVisible(false);
    };
  }, [character, dialogueIndex]);

  useEffect(() => {
    setIsVisible(false);
  }, [currentMood]);

  return (
    <SpeechBubbleContainer isVisible={isVisible}>
      <Bubble>
        <Text>{currentDialogue}</Text>
      </Bubble>
    </SpeechBubbleContainer>
  );
};

export default SpeechBubble;