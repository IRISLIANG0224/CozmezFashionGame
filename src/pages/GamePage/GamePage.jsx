import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import menuClick from "../../assets/audio/cute-click.mp3";
import BG from "../../assets/img/Game/back.png";
import CustomHeader from "../../components/CustomHeader";
import { CLOTHING_TYPES, CHARACTERS } from "../../constants";
import {
  setClothingItem,
  clearOutfit,
  switchCharacter,
} from "../../redux/outfitSlice";
import ClothingGrid from "../../components/ClothingGrid";
import Figure from "../../components/Figure";
import CLOTHING_ITEMS from "../../constants/clothes";
import { useNavigate } from 'react-router-dom';

const PageContainer = styled.div`
  width: 1024px;
  height: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  transform: translateX(-50%);
  background: url(${BG}) no-repeat center center;
  overflow: hidden;
  margin-left: 50%;
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
  flex: 0 1 60px;
  background: ${(props) =>
    props.active ? "rgb(144 106 179 / 46%)" : "rgb(7 187 189 / 39%)"};
  color: #ffffff;
  border: 2px solid white;
  border-radius: 10px;
  cursor: pointer;
  font-size: 13px;
  text-transform: uppercase;
  transition: all 0.2s ease;
  padding: 0 15px;
  height: 40px;
  font-weight: bold;
  margin: 0 5px;

  &:hover {
    background: ${(props) =>
      props.active ? "rgb(250 237 235 / 90%)" : "rgba(255, 255, 255, 0.2)"};
  }
`;

const ActionBar = styled.div`
  width: 430px;
  position: absolute;
  bottom: 50px;
  left: 33px;
  right: 20px;
  height: 48px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  gap: 80px;
`;

const ActionButton = styled.button`
  flex: 1;
  height: 100%;
  background: ${(props) => {
    if (props.confirm) return "rgb(144 106 179 / 46%)";
    if (props.back) return "rgb(7 187 189 / 39%)";
    return "rgb(7 187 189 / 39%)";
  }};
  color: white;
  border: 2px solid white;
  border-radius: 10px;
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
  const navigate = useNavigate();

  const outfitState = useSelector(state => ({
    currentCharacter: state.outfit.currentCharacter,
    KNT: state.outfit.KNT,
    NYT: state.outfit.NYT
  }));

  useEffect(() => {
    dispatch(switchCharacter(CHARACTERS.KNT));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
   setTimeout(() => {
    navigate('/share');
   }, 1000);
  };

  const handleItemSelect = (item) => {
    new Audio(menuClick).play();
    const currentOutfit = outfitState[outfitState.currentCharacter];
    
    // If this item is already equipped in its slot, remove it
    if (currentOutfit[item.slot] === item.id) {
      dispatch(setClothingItem({ 
        slot: item.slot, 
        itemId: '0' // '0' represents empty slot
      }));
    } else {
      // Otherwise, equip the item in its slot
      dispatch(setClothingItem({ 
        slot: item.slot, 
        itemId: item.id 
      }));
    }
  };

  const filteredItems = CLOTHING_ITEMS.filter(
    (item) =>
      item.type === currentCategory &&
      item.character === outfitState.currentCharacter
  );

  const getEquippedItemId = (slot) => {
    return outfitState[outfitState.currentCharacter][slot];
  };


  return (
    <PageContainer>
      <CustomHeader />
      <GameContainer>
        <LeftPanel>
          <Figure
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
                  NEXT
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
    </PageContainer>
  );
};

export default GamePage;
