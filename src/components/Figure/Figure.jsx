import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import KNT from "../../assets/img/Game/KNT/KNT.png";
import NYT from "../../assets/img/Game/NYT/NYT.png";
import CLOTHING_ITEMS from "../../constants/clothes";
import KntHappy from "../../assets/img/Share/KNT/Face/Happy.png";
import KntSerious from "../../assets/img/Share/KNT/Face/Serious.png";
import KntPride from "../../assets/img/Share/KNT/Face/Pride.png";
import KntSpeechLess from "../../assets/img/Share/KNT/Face/SpeechLess.png";
import NytSad from "../../assets/img/Share/NYT/Face/Sad.png";
import NytShock from "../../assets/img/Share/NYT/Face/Shock.png";
import NytHappy from "../../assets/img/Share/NYT/Face/Happy.png";
import NytSpeechLess from "../../assets/img/Share/NYT/Face/SpeechLess.png";


const FigureContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
`;

const CharacterImage = styled.img`
    position: absolute;
    left: 53%;
    top: 5px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 640px;
    object-fit: contain;
    pointer-events: none;
`;

const ClothingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const BaseFigure = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 400px;
  height: 800px;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 400px;
    left: 150px;
    width: 100px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
  }
`;

const ClothingLayer = styled.img`
  position: absolute;
  pointer-events: none;
  transition: all 0.3s ease;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  z-index: ${(props) => props.zIndex};
  transform-origin: center;
  animation: appear 0.3s ease;
  transform: scale(0.7);

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.7);
    }
    to {
      opacity: 1;
      transform: scale(0.9);
    }
  }
`;

const CharacterName = styled.div`
    position: absolute;
    top: 5px;
    left: 32%;
    transform: translateX(-50%);
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    z-index: 0;
`;

const MoodImage = styled.img`
    position: absolute;
    left: ${props => props.x || '159px'};
    top: ${props => props.y || '29px'};
    object-fit: contain;
    z-index: 1;
    transform: scale(0.68);
`;

const getMoodConfig = (character, mood) => {
  const moodConfigs = {
    KNT: {
      Default: { image: null },
      Happy: { 
        image: KntHappy,
        x: '169px',
        y: '37px'

      },
      Serious: { 
        image: KntSerious,
        x: '169px',
        y: '33.5px'
      },
      Pride: { 
        image: KntPride,
        x: '159px',
        y: '29px'
      },
      SpeechLess: { 
        image: KntSpeechLess,
        x: '152px',
        y: '21.5px'
      }
    },
    NYT: {
      Default: { image: null },
      Sad: { 
        image: NytSad,
        x: '131px',
        y: '43.5px'
      },
      Shock: { 
        image: NytShock,
        x: '134.5px',
        y: '9px'
      },
      Happy: { 
        image: NytHappy,
        x: '131px',
        y: '24.5px'
      },
      SpeechLess: { 
        image: NytSpeechLess,
        x: '131px',
        y: '34.5px'
      }
    }
  };

  return moodConfigs[character]?.[mood] || { image: null };
};

const Figure = ({ character, hideName = false }) => {
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
  
  const outfit = outfitState[character];
  const clothingItems = CLOTHING_ITEMS;
  const moodConfig = getMoodConfig(character, outfit.mood);

  const renderClothingLayers = () => {
    const layers = [];
    const layerOrder = [
      "inner",
      "socks",
      "lower",
      "top",
      "middleCoat",
      "outerCoat",
      "shoes",
      "hat",
      "chain1",
      "chain2",
      "choker",
    ];

    layerOrder.forEach((slot) => {
      const itemId = outfit[slot];
      if (itemId === "0") return;

      const item = clothingItems.find((i) => i.id === itemId);
      if (!item) return;

      if (item.baseImage) {
        layers.push(
          <ClothingLayer
            key={`${item.id}-base`}
            src={item.baseImage}
            x={item.basePosition?.x || 0}
            y={item.basePosition?.y || 0}
            zIndex={item.basePosition?.zIndex || 0}
            alt={`${item.name} base layer`}
          />
        );
      }

      layers.push(
        <ClothingLayer
          key={item.id}
          src={item.mainImage}
          x={item.position.x}
          y={item.position.y}
          zIndex={item.position.zIndex}
          alt={item.name}
        />
      );
    });

    return layers;
  };

  return (
    <FigureContainer>
      <BaseFigure />
      {!hideName && <CharacterName>{character === "KNT" ? 'KANATA' : 'NAYUTA'}</CharacterName>}
      <CharacterImage src={character === "KNT" ? KNT : NYT} alt={character} />
      {moodConfig.image && (
        <MoodImage 
          src={moodConfig.image} 
          alt={`${character} mood`}
          x={moodConfig.x}
          y={moodConfig.y}
        />
      )}
      <ClothingContainer>{renderClothingLayers()}</ClothingContainer>
    </FigureContainer>
  );
};

export default Figure;