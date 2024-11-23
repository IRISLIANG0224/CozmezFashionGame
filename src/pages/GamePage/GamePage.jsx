import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import menuClick from "../../assets/audio/menu-click.mp3";
import BG from "../../assets/img/Game/back.png";
import CustomHeader from "../../components/CustomHeader";
import { CLOTHING_TYPES, CHARACTERS, TYPE_TO_SLOT_MAP } from "../../constants";
import {
  clearOutfit,
  setClothingItem,
  switchCharacter,
} from "../../redux/outfitSlice";
import { generateShareUrl } from "../../utils/shareToken";
import ClothingGrid from "../../components/ClothingGrid";
import Figure from "../../components/Figure";

const PageContainer = styled.div`
  width: 1024px;
  height:  720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  background: url(${BG}) no-repeat center center;
  overflow: hidden;
  margin-left:50%
`;

const GameContainer = styled.div`
  width: 1024px;
  height: 720px;
  position: relative;
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 20px;
  overflow: hidden;
  padding: 20px;
`;


const LeftPanel = styled.div`
  position: relative;
  width: 380px;
  height: 100%;
`;

const RightPanel = styled.div`
  position: relative;
  width: 600px;
  height: 100%;
  padding: 20px;
`;



const CategoryBar = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  height: 48px;
  display: flex;
  gap: 10px;
`;

const CategoryButton = styled.button`
  flex: 1;
  height: 100%;
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"};
  color: white;
  border: 2px solid
    ${(props) => (props.active ? "white" : "rgba(255, 255, 255, 0.3)")};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  text-transform: uppercase;
  transition: all 0.2s ease;
`;

const ActionBar = styled.div`
  position: absolute;
  bottom: 16px;
  left: 20px;
  right: 20px;
  height: 48px;
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  flex: 1;
  height: 100%;
  background: ${(props) => {
    if (props.confirm) return "#4CAF50";
    if (props.back) return "#2196F3";
    return "#f44336";
  }};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.2s ease;
`;



const GridContainer = styled.div`
  position: absolute;
  top: 90px;
  left: 20px;
  right: 20px;
  bottom: 90px;
  overflow-y: auto;
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

const GamePage = () => {
  const dispatch = useDispatch();
  const [currentCategory, setCurrentCategory] = useState(CLOTHING_TYPES.TOPS);
  const [showToast, setShowToast] = useState(false);
  const [isSecondStep, setIsSecondStep] = useState(false);

  const outfitState = useSelector((state) => ({
    currentCharacter: state.outfit.currentCharacter,
    KNT: state.outfit.KNT,
    NYT: state.outfit.NYT,
  }));

  useEffect(() => {
    dispatch(switchCharacter(CHARACTERS.KNT));
  }, []);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const handleCategoryChange = (category) => {
    new Audio(menuClick).play();
    setCurrentCategory(category);
  };

  const handleClear = () => {
    new Audio(menuClick).play();
    dispatch(clearOutfit());
  };

  const handleConfirmOrBack = () => {
    new Audio(menuClick).play();

    if (isSecondStep) {
      setIsSecondStep(false);
      dispatch(switchCharacter(CHARACTERS.KNT));
    } else {
      setIsSecondStep(true);
      dispatch(switchCharacter(CHARACTERS.NYT));
    }
  };

  const handleShare = () => {
    new Audio(menuClick).play();

    const outfitData = {
      KNT: outfitState.KNT,
      NYT: outfitState.NYT,
    };

    const shareUrl = generateShareUrl(outfitData);

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(shareUrl)
        .then(() => {
          setShowToast(true);
        })
        .catch((err) => {
          console.error("Failed to copy share URL:", err);
        });
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setShowToast(true);
      } catch (err) {
        console.error("Failed to copy share URL:", err);
      }
      document.body.removeChild(textArea);
    }
  };

  const handleItemSelect = (item) => {
    const slots = TYPE_TO_SLOT_MAP[item.type];
    if (slots && slots.length > 0) {
      new Audio(menuClick).play();
      dispatch(
        setClothingItem({
          slot: slots[0],
          itemId: item.id,
        })
      );
    }
  };

  const filteredItems = SAMPLE_CLOTHING_ITEMS.filter(
    (item) =>
      item.type === currentCategory &&
      item.character === outfitState.currentCharacter
  );

  return (
    <PageContainer>
      <CustomHeader />
      <GameContainer>
        <LeftPanel>
          <Figure
            clothingItems={SAMPLE_CLOTHING_ITEMS}
            character={outfitState.currentCharacter}
          />
        </LeftPanel>
        <RightPanel>
          <CategoryBar>
            {Object.values(CLOTHING_TYPES).map((type) => (
              <CategoryButton
                key={type}
                active={currentCategory === type}
                onClick={() => handleCategoryChange(type)}
              >
                {type}
              </CategoryButton>
            ))}
          </CategoryBar>
          <GridContainer>
            <ClothingGrid
              items={filteredItems}
              onSelect={handleItemSelect}
              selectedItemId={
                outfitState[outfitState.currentCharacter][currentCategory]
              }
            />
          </GridContainer>
          <ActionBar>
            <ActionButton onClick={handleClear}>CLEAR</ActionButton>
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
      <GameFooter />
      {showToast && <Toast>Share URL copied to clipboard! 🎉</Toast>}
    </PageContainer>
  );
};

const SAMPLE_CLOTHING_ITEMS = [
  {
    id: "T001",
    type: CLOTHING_TYPES.TOPS,
    character: CHARACTERS.KNT,
    name: "Basic T-Shirt",
    uiImage: "/path/to/ui-image.png",
    mainImage: "/path/to/main-image.png",
    position: { x: 0, y: 0, zIndex: 1 },
  },
];

export default GamePage;