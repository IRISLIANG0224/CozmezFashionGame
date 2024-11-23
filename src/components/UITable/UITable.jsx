import styled from "styled-components";
import ChatKNT from "../../assests/img/Intro/chat-KNT.png"


const DialogueContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  pointer-events: none;
`;

const CharacterImage = styled.img`
  position: absolute;
  bottom: 70px;
  ${props => props.position === 'left' ? 'left: 100px;' : 'right: 100px;'}
  height: 82vh;
  z-index: 1;
`;

const ChatBox = styled.img`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  max-width: 1000px;
  z-index: 2;
`;

const DialogueText = styled.div`
  position: absolute;
  bottom: 150px;
  left: 200px;
  color: #003499;
  font-size: ${props => props.fontSize || '24px'};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3);
  z-index: 3;
`;



const Dialogue = ({ characterName, dialogueText, fontSize, bold, character, position = 'left' }) => {
  return (
    <DialogueContainer>
      <CharacterImage src={character} alt={characterName} position={position} />
      <ChatBox src={ChatKNT} alt="chat" />
      <DialogueText fontSize={fontSize} bold={bold}>
        {dialogueText}
      </DialogueText>

    </DialogueContainer>
  );
};

export default Dialogue;