import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import menuClick from "../../assets/audio/menu-click.mp3";
import BG from "../../assets/img/Game/back.png";
import CustomHeader from "../../components/CustomHeader";
import { CLOTHING_TYPES, CHARACTERS } from "../../constants";
import {
  setClothingItem,
  clearOutfit,
  switchCharacter,
  setMood,
  loadOutfitFromToken,
} from "../../redux/outfitSlice";
import { generateShareUrl, parseShareToken } from "../../utils/shareToken";
import Figure from "../../components/Figure";
import bg_1 from "../../assets/img/Share/Back_1.png";
import bg_2 from "../../assets/img/Share/Back_2.png";
import bg_3 from "../../assets/img/Share/Back_3.png";
import bg_4 from "../../assets/img/Share/Back_4.png";
import KntDefault from "../../assets/img/Share/KNT/Default.png";
import KntSerious from "../../assets/img/Share/KNT/Serious.png";
import KntPride from "../../assets/img/Share/KNT/Pride.png";
import KntHappy from "../../assets/img/Share/KNT/Happy.png";
import KntSpeechLess from "../../assets/img/Share/KNT/SpeechLess.png";
import NytDefault from "../../assets/img/Share/NYT/Default.png";
import NytSad from "../../assets/img/Share/NYT/Sad.png";
import NytShock from "../../assets/img/Share/NYT/Shock.png";
import NytHappy from "../../assets/img/Share/NYT/Happy.png";
import NytSpeechLess from "../../assets/img/Share/NYT/SpeechLess.png";

const CHARACTER_MOODS = {
  KNT: [
    { name: "Default", image: KntDefault },
    { name: "Serious", image: KntSerious },
    { name: "Pride", image: KntPride },
    { name: "Happy", image: KntHappy },
    { name: "SpeechLess", image: KntSpeechLess },
  ],
  NYT: [
    { name: "Default", image: NytDefault },
    { name: "Sad", image: NytSad },
    { name: "Shock", image: NytShock },
    { name: "Happy", image: NytHappy },
    { name: "SpeechLess", image: NytSpeechLess },
  ],
};

const ZOOM_LIMITS = {
  MIN: 0.8,
  MAX: 1.2,
  STEP: 0.1
};


const BGS = [bg_1, bg_2, bg_3, bg_4];

const PageContainer = styled.div`
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  background: url(${(props) => props.background}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
  margin-left: 50%;
  position: relative;
`;

const GameContainer = styled.div`
  width: 1024px;
  height: 720px;
  position: relative;
`;

const FigureContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
  top: 10px;
  ${(props) => (props.left ? "left: 150px;" : "left: 450px;")}
`;

const MoodBar = styled.div`
  position: absolute;
  top: 20px;
  ${(props) => (props.left ? "left: 20px;" : "right: 20px;")};
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const MoodTitle = styled.div`
  color: #1e40af;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const MoodButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const MoodButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${(props) =>
    props.active ? "rgb(144 106 179 / 46%)" : "rgb(7 187 189 / 39%)"};
  cursor: pointer;
  padding: 2px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.left ? "left: 0;" : "right: 0;")}
  width: 50px;
  height: 100px;
  background: rgb(47 63 175 / 72%);
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: opacity 0.3s ease;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 30px;
  color: white;
  border-radius: 10px;
  border: 2px solid white;
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 300px;
  opacity: ${(props) => (props.hidden ? 0 : 1)};
  transition: opacity 0.3s ease;
`;

const ZoomButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(47 63 175 / 72%);
  border: 2px solid white;
  cursor: pointer;
  color: white;
  font-size: 30px;
  opacity: ${props => {
    if (props.direction === 'in' && props.scale >= ZOOM_LIMITS.MAX) return 0.5;
    if (props.direction === 'out' && props.scale <= ZOOM_LIMITS.MIN) return 0.5;
    return 1;
  }};
  pointer-events: ${props => {
    if (props.direction === 'in' && props.scale >= ZOOM_LIMITS.MAX) return 'none';
    if (props.direction === 'out' && props.scale <= ZOOM_LIMITS.MIN) return 'none';
    return 'auto';
  }};
  
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: ${props => {
      if (props.direction === 'in' && props.scale >= ZOOM_LIMITS.MAX) return 0.5;
      if (props.direction === 'out' && props.scale <= ZOOM_LIMITS.MIN) return 0.5;
      return 0.8;
    }};
  }
`;

const ActionBar = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 450px;
  background-color: #ffffff70;
  height: 70px;
  width: 100%;
`;

const ActionButton = styled.button`
  margin-top: 10px;
  margin-bottom: 20px;
  height: 50px;
  padding: 10px 30px;
  background: rgb(47 63 175 / 92%);
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
  min-width: 250px;
  margin-left: 30px;
`;

const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #4caf50;
  color: white;
  padding: 16px 24px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideIn 0.3s ease;
  z-index: 1000;

  @keyframes slideIn {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const GameFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: white;
  color: #666;
`;

const SharePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);
  const [scale, setScale] = useState(1);

  const outfitState = useSelector((state) => ({
    KNT: {
      ...state.outfit.KNT,
      mood: state.outfit.KNTMood,
    },
    NYT: {
      ...state.outfit.NYT,
      mood: state.outfit.NYTMood,
    },
  }));

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      const outfitData = parseShareToken(token);
      if (outfitData) {
        dispatch(loadOutfitFromToken(outfitData));
        setIsSecondStep(true);
      }
    }
  }, [dispatch]);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleMoodChange = (character, mood) => {
    new Audio(menuClick).play();
    dispatch(setMood({ character, mood }));
  };

  const handleNavigate = (direction) => {
    new Audio(menuClick).play();
    setCurrentBgIndex((prev) => {
      if (direction === "next") {
        return prev === BGS.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? BGS.length - 1 : prev - 1;
    });
  };

  const handleZoom = (direction) => {
    new Audio(menuClick).play();
    setScale(prev => {
      const newScale = direction === 'in' 
        ? Math.min(ZOOM_LIMITS.MAX, prev + ZOOM_LIMITS.STEP)
        : Math.max(ZOOM_LIMITS.MIN, prev - ZOOM_LIMITS.STEP);
      return Number(newScale.toFixed(1)); // Ensure clean decimal numbers
    });
  };

  const handleBack = () => {
    new Audio(menuClick).play();
    if (isSecondStep) {
      setIsSecondStep(false);
    } else {
      navigate("/game");
    }
  };

  const handleConfirm = () => {
    new Audio(menuClick).play();
    setIsSecondStep(true);
  };

  const handleShare = () => {
    new Audio(menuClick).play();
    const shareUrl = generateShareUrl(outfitState);

    navigator.clipboard
      .writeText(shareUrl)
      .then(() => setShowToast(true))
      .catch(console.error);
  };

  const handlePlayAgain = () => {
    new Audio(menuClick).play();
    navigate("/game");
  };

  return (
    <PageContainer background={BGS[currentBgIndex]}>
      <CustomHeader />
      <GameContainer>
        <NavigationButton
          left
          hidden={isSecondStep}
          onClick={() => handleNavigate("prev")}
        >
          ⏴
        </NavigationButton>

        <NavigationButton
          hidden={isSecondStep}
          onClick={() => handleNavigate("next")}
        >
          ⏵
        </NavigationButton>
        <MoodBar left hidden={isSecondStep}>
          <MoodTitle left>KANATA'S Expression</MoodTitle>
          <MoodButtonContainer>
            {CHARACTER_MOODS.KNT.map(({ name, image }) => (
              <MoodButton
                key={name}
                active={outfitState.KNT.mood === name}
                onClick={() => handleMoodChange("KNT", name)}
              >
                <img src={image} alt={`KNT ${name}`} />
              </MoodButton>
            ))}
          </MoodButtonContainer>
        </MoodBar>

        <MoodBar hidden={isSecondStep}>
          <MoodTitle>NAYUTA'S Expression</MoodTitle>
          <MoodButtonContainer>
            {CHARACTER_MOODS.NYT.map(({ name, image }) => (
              <MoodButton
                key={name}
                active={outfitState.NYT.mood === name}
                onClick={() => handleMoodChange("NYT", name)}
              >
                <img src={image} alt={`NYT ${name}`} />
              </MoodButton>
            ))}
          </MoodButtonContainer>
        </MoodBar>

        <FigureContainer left style={{ transform: `scale(${scale})` }}>
          <Figure
            character="KNT"
            mood={outfitState.KNT.mood}
            outfit={outfitState.KNT}
            hideName={true}
          />
        </FigureContainer>

        <FigureContainer style={{ transform: `scale(${scale})` }}>
          <Figure
            character="NYT"
            mood={outfitState.NYT.mood}
            outfit={outfitState.NYT}
            hideName={true}
          />
        </FigureContainer>

        <ZoomControls hidden={isSecondStep}>
        <ZoomButton
          direction="out"
          scale={scale}
          onClick={() => handleZoom('out')}
          aria-label="Zoom Out"
        >
          -
        </ZoomButton>
        <ZoomButton
          direction="in"
          scale={scale}
          onClick={() => handleZoom('in')}
          aria-label="Zoom In"
        >
          +
        </ZoomButton>
      </ZoomControls>

        <ActionBar>
          {isSecondStep ? (
            <>
              <ActionButton onClick={handlePlayAgain}>PLAY AGAIN</ActionButton>
              <ActionButton confirm onClick={handleShare}>
                SHARE
              </ActionButton>
            </>
          ) : (
            <>
              <ActionButton onClick={handleBack}>BACK</ActionButton>
              <ActionButton confirm onClick={handleConfirm}>
                CONFIRM
              </ActionButton>
            </>
          )}
        </ActionBar>
      </GameContainer>
      {showToast && <Toast>Share URL copied to clipboard! 🎉</Toast>}
      <GameFooter />
    </PageContainer>
  );
};

export default SharePage;
