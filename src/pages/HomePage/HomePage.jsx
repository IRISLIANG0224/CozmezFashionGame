import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import cover_1 from "../../assests/img/Home/cover-1.png";
import cover_2 from "../../assests/img/Home/cover-2.png";
import cover_3 from "../../assests/img/Home/cover-1.png";
import cover_4 from "../../assests/img/Home/cover-4.png";
import startButton from "../../assests/img/sceneOne/StartButton.png";
import closeButton from "../../assests/img/sceneOne/CloseButton.png";
import menuClick from "../../assests/audio/menu-click.mp3";

const FIXED_WIDTH = 1024;
const FIXED_HEIGHT = 720;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const OuterContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: ${FIXED_WIDTH}px;
  height: ${FIXED_HEIGHT}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 240px;
`;

const Button = styled.img`
  width: 180px;
  height: auto;
  object-fit: cover;
  filter: brightness(1);
  transition: filter 0.3s ease, transform 0.3s ease;

  &:hover {
    filter: brightness(1.3);
    transform: scale(1.03);
  }
`;

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [start, setStart] = useState(false);

  const covers = [cover_1, cover_2, cover_3, cover_4];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % covers.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleClickStart = () => {
    setStart(true);
    new Audio(menuClick).play();
  };

  return (
    <OuterContainer>
      <Container>
        {covers.map((cover, index) => (
          <ImageContainer key={index} active={currentImageIndex === index}>
            <CoverImage src={cover} alt={`Cover ${index + 1}`} />
          </ImageContainer>
        ))}

        <ButtonsContainer>
          <Button
            src={startButton}
            alt="StartButton"
            onClick={handleClickStart}
          />
          <Button src={closeButton} alt="CloseButton" />
        </ButtonsContainer>
      </Container>
    </OuterContainer>
  );
};

export default HomePage;
