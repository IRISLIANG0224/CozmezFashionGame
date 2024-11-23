// src/pages/GamePage/GamePage.jsx
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import menuClick from '../../assets/audio/menu-click.mp3';
import BG from '../../assets/img/Game/back.png';
import CustomHeader from '../../components/CustomHeader';
import { CLOTHING_TYPES, CHARACTERS, TYPE_TO_SLOT_MAP } from '../../constants';
import { clearOutfit, setClothingItem, switchCharacter } from '../../redux/outfitSlice';
import { generateShareUrl } from '../../utils/shareToken';
import ClothingGrid from '../../components/ClothingGrid';
import Figure from '../../components/Figure';

/**
 * Main container for the entire page
 */
const PageContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  background-image: url(${BG});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  position: relative;
`;

/**
 * Main game area container
 */
const GameContainer = styled.div`
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 400px 1fr;
  gap: 24px;
  padding: 20px;
  margin-top: 20px;
`;

/**
 * Left panel containing the character figure
 */
const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

/**
 * Right panel for clothing selection
 */
const RightPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
`;

/**
 * Step indicator at the top of the page
 */
const StepIndicator = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
`;

/**
 * Container for category buttons
 */
const CategoryBar = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

/**
 * Individual category button
 */
const CategoryButton = styled.button`
  flex: 1;
  min-width: 120px;
  padding: 10px 16px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  border: 2px solid ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

/**
 * Container for action buttons
 */
const ActionBar = styled.div`
  display: flex;
  gap: 12px;
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

/**
 * Action button (Clear/Back/Confirm/Share)
 */
const ActionButton = styled.button`
  flex: 1;
  padding: 12px 24px;
  background: ${props => {
    if (props.confirm) return '#4CAF50';
    if (props.back) return '#2196F3';
    return '#f44336';
  }};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`;

/**
 * Toast notification for share URL copy
 */
const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #4CAF50;
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

/**
 * Footer component
 */
const GameFooter = styled.div`
  width: 100%;
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.8);
  color: rgba(255, 255, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
`;

/**
 * Main Game Page Component
 */
const GamePage = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(CLOTHING_TYPES.TOPS);
  const [showToast, setShowToast] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);
  
  // Get both characters' outfit data from Redux
  const outfitState = useSelector(state => ({
    currentCharacter: state.outfit.currentCharacter,
    KNT: state.outfit.KNT,
    NYT: state.outfit.NYT
  }));

  // Initialize with KNT character
  useEffect(() => {
    dispatch(switchCharacter(CHARACTERS.KNT));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle toast display
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  /**
   * Handle category button clicks
   */
  const handleCategoryChange = (category) => {
    new Audio(menuClick).play();
    setCurrentCategory(category);
  };

  /**
   * Handle clear button click
   */
  const handleClear = () => {
    new Audio(menuClick).play();
    dispatch(clearOutfit());
  };

  /**
   * Handle confirm/back button click
   */
  const handleConfirmOrBack = () => {
    new Audio(menuClick).play();
    
    if (isSecondStep) {
      // Go back to KNT
      setIsSecondStep(false);
      dispatch(switchCharacter(CHARACTERS.KNT));
    } else {
      // Move to NYT
      setIsSecondStep(true);
      dispatch(switchCharacter(CHARACTERS.NYT));
    }
  };

  /**
   * Handle share button click
   */
  const handleShare = () => {
    new Audio(menuClick).play();
    
    const outfitData = {
      KNT: outfitState.KNT,
      NYT: outfitState.NYT
    };
    
    const shareUrl = generateShareUrl(outfitData);
    
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl)
        .then(() => {
          setShowToast(true);
        })
        .catch(err => {
          console.error('Failed to copy share URL:', err);
        });
    } else {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand('copy');
        setShowToast(true);
      } catch (err) {
        console.error('Failed to copy share URL:', err);
      }
      document.body.removeChild(textArea);
    }
  };

  /**
   * Handle clothing item selection
   */
  const handleItemSelect = (item) => {
    const slots = TYPE_TO_SLOT_MAP[item.type];
    if (slots && slots.length > 0) {
      new Audio(menuClick).play();
      dispatch(setClothingItem({ 
        slot: slots[0], 
        itemId: item.id 
      }));
    }
  };

  // Get filtered items for current category and character
  const filteredItems = SAMPLE_CLOTHING_ITEMS.filter(
    item => item.type === currentCategory && 
    item.character === outfitState.currentCharacter
  );

  return (
    <PageContainer>
      <CustomHeader />
      <GameContainer>
        <LeftPanel>
          <StepIndicator>
            {isSecondStep ? 'Step 2/2: NYT' : 'Step 1/2: KNT'}
          </StepIndicator>
          <Figure 
            clothingItems={SAMPLE_CLOTHING_ITEMS}
            character={outfitState.currentCharacter}
          />
        </LeftPanel>
        <RightPanel>
          <CategoryBar>
            {Object.values(CLOTHING_TYPES).map(type => (
              <CategoryButton
                key={type}
                active={currentCategory === type}
                onClick={() => handleCategoryChange(type)}
              >
                {type}
              </CategoryButton>
            ))}
          </CategoryBar>
          <ClothingGrid
            items={filteredItems}
            onSelect={handleItemSelect}
            selectedItemId={outfitState[outfitState.currentCharacter][currentCategory]}
          />
          <ActionBar>
            <ActionButton onClick={handleClear}>
              CLEAR
            </ActionButton>
            {isSecondStep ? (
              <>
                <ActionButton back onClick={handleConfirmOrBack}>
                  BACK
                </ActionButton>
                <ActionButton confirm onClick={handleShare}>
                  SHARE
                </ActionButton>
              </>
            ) : (
              <ActionButton confirm onClick={handleConfirmOrBack}>
                CONFIRM
              </ActionButton>
            )}
          </ActionBar>
        </RightPanel>
      </GameContainer>
      <GameFooter>
        <span>COZMEZ Fashion Game</span>
        <span>Follow @IRISLIO224</span>
      </GameFooter>
      {showToast && (
        <Toast>Share URL copied to clipboard! 🎉</Toast>
      )}
    </PageContainer>
  );
};

// Temporary sample data - replace with your actual data
const SAMPLE_CLOTHING_ITEMS = [
  {
    id: 'T001',
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: 'Basic T-Shirt',
    uiImage: '/path/to/ui-image.png',
    mainImage: '/path/to/main-image.png',
    position: { x: 0, y: 0, zIndex: 1 }
  },
  // Add more sample items as needed
];

export default GamePage;