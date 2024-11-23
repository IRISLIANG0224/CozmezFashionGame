// src/components/Figure.js
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

/**
 * Container for the character figure and clothing layers
 */
const FigureContainer = styled.div`
  position: relative;
  width: 400px;
  height: 600px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  overflow: hidden;
`;

/**
 * Base character figure/silhouette
 */
const BaseFigure = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05)
  );
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 400px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
  }
`;

/**
 * Container for clothing layers to ensure proper stacking
 */
const ClothingContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

/**
 * Individual clothing item layer
 */
const ClothingLayer = styled.img`
  position: absolute;
  pointer-events: none;
  transition: all 0.3s ease;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
  z-index: ${props => props.zIndex};
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

/**
 * Character name display
 */
const CharacterName = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  z-index: 1000;
`;

const Figure = ({ clothingItems, character }) => {
  // Get the current outfit configuration from Redux
  const outfit = useSelector(state => state.outfit[character]);

  /**
   * Renders all clothing layers in the correct order
   * @returns {Array} Array of JSX elements representing clothing layers
   */
  const renderClothingLayers = () => {
    const layers = [];
    const layerOrder = [
      'inner',
      'socks',
      'lower',
      'top',
      'middleCoat',
      'outerCoat',
      'shoes',
      'hat',
      'chain1',
      'chain2',
      'choker'
    ];

    // Render layers in specific order
    layerOrder.forEach(slot => {
      const itemId = outfit[slot];
      if (itemId === '0') return; // Skip empty slots

      const item = clothingItems.find(i => i.id === itemId);
      if (!item) return; // Skip if item not found

      // Add base layer if exists
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

      // Add main clothing layer
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
      <CharacterName>{character}</CharacterName>
      <ClothingContainer>
        {renderClothingLayers()}
      </ClothingContainer>
    </FigureContainer>
  );
};

export default Figure;