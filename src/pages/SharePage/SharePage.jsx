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
  loadOutfitFromToken
} from "../../redux/outfitSlice";
import { generateShareUrl, parseShareToken } from "../../utils/shareToken";
import Figure from "../../components/Figure";
import bg_1 from "../../assets/img/Share/Back_1.png";
import bg_2 from "../../assets/img/Share/Back_2.png";
import bg_3 from "../../assets/img/Share/Back_3.png";
import bg_4 from "../../assets/img/Share/Back_4.png";

const MOODS = {
  DEFAULT: "Default",
  SERIOUS: "Serious",
  PRIDE: "Pride",
  HAPPY: "Happy",
  SPEECHLESS: "SpeechLess",
  SAD: "Sad",
  SHOCK: "Shock"
};

const BGS = [bg_1, bg_2, bg_3, bg_4];

const PageContainer = styled.div`
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  background: url(${props => props.background}) no-repeat center center;
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
  width: 400px;
  height: 600px;
  top: 60px;
  ${props => props.left ? 'left: 50px;' : 'right: 50px;'}
`;

const MoodBar = styled.div`
  position: absolute;
  top: 20px;
  ${props => props.left ? 'left: 50px;' : 'right: 50px;'};
  display: flex;
  gap: 10px;
`;

const MoodButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? 'rgb(144 106 179 / 46%)' : 'rgb(7 187 189 / 39%)'};
  cursor: pointer;
  opacity: ${props => props.hidden ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${props => props.left ? 'left: 0;' : 'right: 0;'}
  width: 50px;
  height: 100px;
  background: rgb(7 187 189 / 39%);
  border: none;
  cursor: pointer;
  opacity: ${props => props.hidden ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const ZoomControls = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
  opacity: ${props => props.hidden ? 0 : 1};
  transition: opacity 0.3s ease;
`;

const ZoomButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgb(7 187 189 / 39%);
  border: 2px solid white;
  cursor: pointer;
`;

const ActionBar = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  padding: 10px 30px;
  background: ${props => props.confirm ? 'rgb(144 106 179 / 46%)' : 'rgb(7 187 189 / 39%)'};
  color: white;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  text-transform: uppercase;
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

const SharePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);
  const [scale, setScale] = useState(1);

  const outfitState = useSelector(state => ({
    KNT: {
      ...state.outfit.KNT,
      mood: state.outfit.KNTMood
    },
    NYT: {
      ...state.outfit.NYT,
      mood: state.outfit.NYTMood
    }
  }));

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
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
    setCurrentBgIndex(prev => {
      if (direction === 'next') {
        return prev === BGS.length - 1 ? 0 : prev + 1;
      }
      return prev === 0 ? BGS.length - 1 : prev - 1;
    });
  };

  const handleZoom = (direction) => {
    new Audio(menuClick).play();
    setScale(prev => {
      const newScale = direction === 'in' ? prev + 0.1 : prev - 0.1;
      return Math.max(0.5, Math.min(1.5, newScale));
    });
  };

  const handleBack = () => {
    new Audio(menuClick).play();
    if (isSecondStep) {
      setIsSecondStep(false);
    } else {
      navigate('/game');
    }
  };

  const handleConfirm = () => {
    new Audio(menuClick).play();
    setIsSecondStep(true);
  };

  const handleShare = () => {
    new Audio(menuClick).play();
    const shareUrl = generateShareUrl(outfitState);
    
    navigator.clipboard.writeText(shareUrl)
      .then(() => setShowToast(true))
      .catch(console.error);
  };

  const handlePlayAgain = () => {
    new Audio(menuClick).play();
    navigate('/game');
  };

  return (
    <PageContainer background={BGS[currentBgIndex]}>
      <CustomHeader />
      <GameContainer>
        <NavigationButton
          left
          hidden={isSecondStep}
          onClick={() => handleNavigate('prev')}
        >
          ⏴
        </NavigationButton>

        <NavigationButton
          hidden={isSecondStep}
          onClick={() => handleNavigate('next')}
        >
          ⏵
        </NavigationButton>

        <MoodBar left hidden={isSecondStep}>
          {Object.values(MOODS).map(mood => (
            <MoodButton
              key={mood}
              active={outfitState.KNT.mood === mood}
              onClick={() => handleMoodChange('KNT', mood)}
            />
          ))}
        </MoodBar>

        <MoodBar hidden={isSecondStep}>
          {Object.values(MOODS).map(mood => (
            <MoodButton
              key={mood}
              active={outfitState.NYT.mood === mood}
              onClick={() => handleMoodChange('NYT', mood)}
            />
          ))}
        </MoodBar>

        <FigureContainer left style={{ transform: `scale(${scale})` }}>
          <Figure
            character="KNT"
            mood={outfitState.KNT.mood}
            outfit={outfitState.KNT}
          />
        </FigureContainer>

        <FigureContainer style={{ transform: `scale(${scale})` }}>
          <Figure
            character="NYT"
            mood={outfitState.NYT.mood}
            outfit={outfitState.NYT}
          />
        </FigureContainer>

        <ZoomControls hidden={isSecondStep}>
          <ZoomButton onClick={() => handleZoom('out')}>-</ZoomButton>
          <ZoomButton onClick={() => handleZoom('in')}>+</ZoomButton>
        </ZoomControls>

        <ActionBar>
          {isSecondStep ? (
            <>
              <ActionButton onClick={handlePlayAgain}>
                PLAY AGAIN
              </ActionButton>
              <ActionButton confirm onClick={handleShare}>
                SHARE
              </ActionButton>
            </>
          ) : (
            <>
              <ActionButton onClick={handleBack}>
                BACK
              </ActionButton>
              <ActionButton confirm onClick={handleConfirm}>
                CONFIRM
              </ActionButton>
            </>
          )}
        </ActionBar>
      </GameContainer>
      {showToast && <Toast>Share URL copied to clipboard! 🎉</Toast>}
    </PageContainer>
  );
};

export default SharePage;