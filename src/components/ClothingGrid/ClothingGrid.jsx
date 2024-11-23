import React, { useState } from 'react';
import styled from 'styled-components';

const FigureContainer = styled.div`
  position: absolute;
  width: 380px;
  height: 100%;
  overflow: hidden;
`;

const CharacterImage = styled.img`
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  height: 600px;
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

// ClothingGrid.jsx
const GridContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 580px;
  height: calc(100% - 80px);
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
`;

const Grid = styled.div`
  position: absolute;
  top: 80px;
  left: 20px;
  right: 20px;
  height: calc(100% - 140px);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 12px;
`;

const ItemCell = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${props => props.selected ? '#4CAF50' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  overflow: hidden;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
`;





const Pagination = styled.div`
  position: absolute;
  bottom: 16px;
  left: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const PageButton = styled.button`
  width: 80px;
  height: 36px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const PageInfo = styled.span`
  position: absolute;
  width: 120px;
  text-align: center;
  color: white;
`;

const EmptyState = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  text-align: center;
  width: 100%;
`;

const ClothingGrid = ({ items = [], onSelect, selectedItemId = null }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(0, prev - 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
  };

  if (items.length === 0) {
    return (
      <GridContainer>
        <EmptyState>
          No items available for this category
        </EmptyState>
      </GridContainer>
    );
  }

  return (
    <GridContainer>
      <Grid>
        {currentItems.map(item => (
          <ItemCell
            key={item.id}
            selected={item.id === selectedItemId}
            onClick={() => onSelect(item)}
          >
            <img
              src={item.uiImage}
              alt={item.name}
              title={item.name}
            />
          </ItemCell>
        ))}
        {[...Array(9 - currentItems.length)].map((_, index) => (
          <ItemCell key={`empty-${index}`} style={{ visibility: 'hidden' }} />
        ))}
      </Grid>
      {totalPages > 1 && (
        <Pagination>
          <PageButton
            onClick={handlePrevPage}
            disabled={currentPage === 0}
          >
            ←
          </PageButton>
          <PageInfo>
            Page {currentPage + 1} of {totalPages}
          </PageInfo>
          <PageButton
            onClick={handleNextPage}
            disabled={currentPage === totalPages - 1}
          >
            →
          </PageButton>
        </Pagination>
      )}
    </GridContainer>
  );
};

export default ClothingGrid;