import React, { useState } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  flex-grow: 1;
`;

const ItemCell = styled.div`
  aspect-ratio: 1;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid ${props => props.selected ? '#4CAF50' : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  overflow: hidden;
  
  &:hover {
    transform: scale(1.02);
    border-color: ${props => props.selected ? '#4CAF50' : '#ffffff'};
  }

  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-top: 16px;
`;

const PageButton = styled.button`
  padding: 8px 16px;
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

const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  text-align: center;
  padding: 20px;
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
        {/* Fill empty cells to maintain grid structure */}
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
          <span style={{ color: 'white' }}>
            Page {currentPage + 1} of {totalPages}
          </span>
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