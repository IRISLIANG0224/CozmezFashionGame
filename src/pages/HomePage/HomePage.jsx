import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import menuClick from "../../assets/audio/cute-click.mp3";
import cover_1 from "../../assets/img/Home/cover-1.png";
import cover_2 from "../../assets/img/Home/cover-2.png";
import cover_3 from "../../assets/img/Home/cover-3.png";
import cover_4 from "../../assets/img/Home/cover-4.png";
import startButton from "../../assets/img/Home/start.png";
import closeButton from "../../assets/img/Home/quit.png";
import CustomHeader from "../../components/CustomHeader";

const PageContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const GameContainer = styled.div`
  width: 1024px;
  height: 720px;
  position: relative;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  inset: 0;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 1s ease-in-out;
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ButtonsContainer = styled.div`
  position: absolute;
  right: 50px;
  bottom: 50px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Button = styled.img`
  width: 180px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(110%);
  }
`;

const GameTitle = styled.div`
  position: absolute;
  left: 20px;
  top: 400px;
  color: white;
  font-size: 80px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(128, 128, 128, 0.6);
`;

const GameAuthor = styled.div`
  position: absolute;
  left: 30px;
  top: 400px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(128, 128, 128, 0.6);
`;

const HomePage = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const covers = [cover_1, cover_2, cover_3, cover_4];

  const handleClickStart = () => {
    new Audio(menuClick).play();
    setTimeout(() => {
      navigate("/intro");
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % covers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageContainer>
      <CustomHeader />
      <GameContainer>
        {covers.map((cover, index) => (
          <ImageContainer key={index} active={currentImageIndex === index}>
            <CoverImage src={cover} alt={`Cover ${index + 1}`} />
          </ImageContainer>
        ))}
        <GameAuthor>BY IRISLI0224</GameAuthor>
        <GameTitle>
          COZMEZ
          <br />
          FASHION
          <br />
          GAME
        </GameTitle>

        <ButtonsContainer>
          <Button src={startButton} alt="Start" onClick={handleClickStart} />
          <Button src={closeButton} alt="Quit" />
        </ButtonsContainer>
      </GameContainer>
    </PageContainer>
  );
};

export default HomePage;