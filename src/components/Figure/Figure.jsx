import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import KNT from "../../assets/img/Game/KNT/KNT.png";
import NYT from "../../assets/img/Game/NYT/NYT.png";

const FigureContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
  overflow: hidden;
`;

const CharacterImage = styled.img`
    position: absolute;
    left: 62%;
    top: 5px;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    height: 640px;
    object-fit: contain;
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
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
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

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
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
    z-index: 1000;
`;

const Figure = ({ clothingItems, character }) => {
  const outfit = useSelector((state) => state.outfit[character]);

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
      <CharacterName>{character === "KNT" ?'KANATA':'NAYUTA'}</CharacterName>
      <CharacterImage src={character === "KNT" ? KNT : NYT} alt={character} />
      <ClothingContainer>{renderClothingLayers()}</ClothingContainer>
    </FigureContainer>
  );
};

export default Figure;