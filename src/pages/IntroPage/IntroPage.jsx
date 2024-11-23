import React from "react";
import styled from "styled-components";
import menuClick from "../../assets/audio/menu-click.mp3";
import BG from "../../assets/img/Intro/back.png";
import CustomHeader from "../../components/CustomHeader";
import Dialogue from "../../components/Dialogue";
import Knt_Defualt from "../../assets/img/Intro/KNT/KNT_Default.png";
import Knt_Shock from "../../assets/img/Intro/KNT/KNT_Shock.png";
import Knt_Speechless from "../../assets/img/Intro/KNT/KNT_SpeechLess.png";

const Chat_list = [];

const PageContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  height:  720px;
`;

const GameContainer = styled.div`
  width: 1024px;
  height: 720px;
  position: relative;
  overflow: hidden;
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

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: scale(1.05);
  }
`;

const GameFooter = styled.div`
  width: 1024px;
  height: 10px;
  background: white;
  color: #666;
  font-size: 14px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
`;
const handleClickSkip = () => {
  new Audio(menuClick).play();
  setTimeout(() => {
    window.location.href = "/game";
  }, 1000);
};

const IntroPage = () => {
  return (
    <PageContainer>
      <CustomHeader />
      <GameContainer>
        <SkipButton onClick={handleClickSkip}>SKIP ▶▶▶</SkipButton>
        <Dialogue
          characterName="KANATA"
          dialogueText="Hello, welcome to our world!"
          fontSize="28px"
          bold={true}
          character={Knt_Defualt}
          position="left"
        />
      </GameContainer>
      <GameFooter />
    </PageContainer>
  );
};

export default IntroPage;
