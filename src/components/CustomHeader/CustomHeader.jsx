import React from "react";
import styled from "styled-components";


const Header = styled.div`
  width: 1024px;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-bottom: 2px solid #1e40af;
  box-sizing: border-box;
`;

const Dot = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  margin-top: 2px;
  background-color: #1e40af;
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-left: 8px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FollowButton = styled.div`
  background: #1e40af;
  color: white;
  padding: 4px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(110%);
  }
`;

const Title = styled.div`
  color: #1e40af;
  font-size: 24px;
  font-weight: bold;
`;

const Dots = () => (
  <DotsContainer>
    <Dot />
  </DotsContainer>
);

const handleClickFollow = () => {
  window.open('https://x.com/IRISLI0224', '_blank');
};


const CustomHeader = () => {
  return (
    <Header>
      <LogoContainer>
        <Dots />
        <Title>COZMEZ</Title>
      </LogoContainer>
      <Title>FASHION GAME</Title>
      <FollowButton onClick={handleClickFollow}>FOLLOW IRISLIO224</FollowButton>
    </Header>
  );
};

export default CustomHeader;
