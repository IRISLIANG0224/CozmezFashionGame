import React, { useState, useCallback,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import menuClick from "../../assets/audio/menu-click.mp3";
import BG from "../../assets/img/Intro/back.png";
import ChatKNT from "../../assets/img/Intro/chat-KNT.png";
import ChatNYT from "../../assets/img/Intro/chat-NYT.png"
import CustomHeader from "../../components/CustomHeader";
import Knt_Default from "../../assets/img/Intro/KNT/KNT_Default.png";
import Knt_Shock from "../../assets/img/Intro/KNT/KNT_Shock.png";
import Knt_Speechless from "../../assets/img/Intro/KNT/KNT_SpeechLess.png";
import Nyt_Default from '../../assets/img/Intro/NYT/NYT_Default.png';
import Nyt_Idea from '../../assets/img/Intro/NYT/NYT_Idea.png';
import Nyt_Happy from '../../assets/img/Intro/NYT/NYT_Happy.png';

const PageContainer = styled.div`
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  background: url(${BG}) no-repeat center center;
  overflow: hidden;
  margin-left: 50%;
  position: relative;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 1s ease;
`;

const GameContainer = styled.div`
  width: 1024px;
  height: 720px;
  position: relative;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 20px;
  overflow: hidden;
  padding: 20px;
`;


const CharacterImage = styled.img`
  position: absolute;
  bottom: -120px;
  ${props => props.position === "left" ? "left: 0px;" : "right: 0px;"}
  transform: scale(0.7);
  z-index: 1;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.2s ease;
`;

const ChatBox = styled.img`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 1000px;
  z-index: 2;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease;
`;

const DialogueText = styled.div`
  position: absolute;
  bottom: 150px;
  left: 200px;
  color: #003499;
  font-size: ${props => props.fontSize || "24px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  z-index: 3;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease;
`;


const SkipButton = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const FinalMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1e40af;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease;
  z-index: 5;
`;

const WhiteOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: ${props => props.visible ? 1 : 0};
  transition: opacity 0.5s ease;
  z-index: 4;
`;

const GameFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: white;
  color: #666;
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 3;
`;

const IntroPage = () => {

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [dialogueVisible, setDialogueVisible] = useState(false);  
  const [pageVisible, setPageVisible] = useState(false);  

  useEffect(() => {

    setTimeout(() => {
      setPageVisible(true);

      setTimeout(() => {
        setDialogueVisible(true);
      }, 500);
    }, 100);
  }, []);

  useEffect(() => {
    let timer;
    if (showFinal) {
      timer = setTimeout(() => {
        navigate('/game');
      }, 2000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [showFinal, navigate])


  const Chat_list = [
    {
      position: "left",
      character: Knt_Default,
      characterName: "KANATA",
      dialogueText: "Nayuta, did you go shopping for new clothes again?",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Default,
      characterName: "NAYUTA",
      dialogueText: "Yeah, I'm preparing outfits for our 5th anniversary.",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Default,
      characterName: "NAYUTA",
      dialogueText: " Hmm... what should we wear?",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Idea,
      characterName: "NAYUTA",
      dialogueText: "Oh, Why don't YOU coordinate our outfits this time? ",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Happy,
      characterName: "NAYUTA",
      dialogueText: " You've watched me style clothes for so long,",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Happy,
      characterName: "NAYUTA",
      dialogueText: " you must have picked up some tips!",
      fontSize: "28px",
      bold: true
    },
    {
      position: "left",
      character: Knt_Shock,
      characterName: "KANATA",
      dialogueText: "Wait, what?!",
      fontSize: "28px",
      bold: true
    },
    {
      position: "right",
      character: Nyt_Happy,
      characterName: "NAYUTA",
      dialogueText: "Perfect! Then it's decided. I'm counting on you.",
      fontSize: "28px",
      bold: true
    },
    {
      position: "left",
      character: Knt_Speechless,
      characterName: "KANATA",
      dialogueText: "Hold on! Nayuta, don't go ...  What am I gonna do now? ",
      fontSize: "28px",
      bold: true
    },
    {
      position: "left",
      character: Knt_Speechless,
      characterName: "KANATA",
      dialogueText: "There are way too many clothes!",
      fontSize: "28px",
      bold: true
    }
  ];

  

  const handleClick = useCallback(() => {
    if (isTransitioning) return;
    
    new Audio(menuClick).play();
    setIsTransitioning(true);
    setDialogueVisible(false);

    setTimeout(() => {
      if (currentIndex < Chat_list.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else if (!showFinal) {
        setShowFinal(true);
        setIsTransitioning(false);
        return;
      } else {
        navigate('/game');
        return;
      }

      setTimeout(() => {
        setDialogueVisible(true);
        setIsTransitioning(false);
      }, 500);
    }, 500);
  }, [currentIndex, showFinal, isTransitioning, navigate, Chat_list.length]);

  const handleSkip = (e) => {
    e.stopPropagation();
    if (isTransitioning) return;
    new Audio(menuClick).play();
    setTimeout(() => {
      navigate('/game');
    }, 1000);
  };

  const currentDialogue = Chat_list[currentIndex];

  return (
    <PageContainer visible={pageVisible} onClick={handleClick}>
      <CustomHeader />
      <GameContainer>
        <SkipButton onClick={handleSkip}>SKIP ▶▶▶</SkipButton>
        
        {!showFinal && (
          <>
            <CharacterImage
              src={currentDialogue.character}
              alt={currentDialogue.characterName}
              position={currentDialogue.position}
              visible={dialogueVisible}
            />
            <ChatBox 
              src={currentDialogue.characterName === "KANATA" ? ChatKNT : ChatNYT} 
              alt="chat" 
              visible={dialogueVisible}
            />
            <DialogueText 
              fontSize={currentDialogue.fontSize}
              bold={currentDialogue.bold}
              visible={dialogueVisible}
              dangerouslySetInnerHTML={{ __html: currentDialogue.dialogueText }}
            />
          </>
        )}

        <WhiteOverlay visible={showFinal} />
        <FinalMessage visible={showFinal}>
          It's time for you to help Kanata!
        </FinalMessage>
        
        <GameFooter />
      </GameContainer>
    </PageContainer>
  );
};
export default IntroPage;