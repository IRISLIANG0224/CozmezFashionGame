import React from 'react';
import styled from 'styled-components';
import ChatKNT from "../../assets/img/Intro/chat-KNT.png";

const DialogueContainer = styled.div`
  position: absolute;
  width: 1024px;
  height: 720px;
  overflow: hidden;
  pointer-events: none;
`;




const CharacterImage = styled.img`
  position: absolute;
  bottom: 0;
  ${props => props.position === "left" ? "left: 0;" : "right: 0;"}
  height: 90%;
  transform: scale(0.7);
  z-index: 1;
  transition: opacity 0.3s ease;
`;

const ChatBoxWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 900px;
  z-index: 2;
`;

const ChatBoxImage = styled.img`
  width: 100%;
  height: auto;
`;

const DialogueContent = styled.div`
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  z-index: 3;
`;

const CharacterName = styled.div`
  color: #003499;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5);
`;

const DialogueText = styled.div`
  color: #003499;
  font-size: ${props => props.fontSize || "24px"};
  font-weight: ${props => props.bold ? "bold" : "normal"};
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  padding: 0 40px;
`;

const Dialogue = ({
  characterName,
  dialogueText,
  fontSize,
  bold,
  character,
  position = "left",
}) => {
  return (
    <DialogueContainer>
      <CharacterImage 
        src={character} 
        alt={characterName} 
        position={position} 
      />
      <ChatBoxWrapper>
        <ChatBoxImage src={ChatKNT} alt="chat" />
        <DialogueContent>
          <CharacterName>{characterName}</CharacterName>
          <DialogueText fontSize={fontSize} bold={bold}>
            {dialogueText}
          </DialogueText>
        </DialogueContent>
      </ChatBoxWrapper>
    </DialogueContainer>
  );
};

export default Dialogue;