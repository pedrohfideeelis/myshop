import { styled } from "styled-components";

export const Card = styled.article`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const ProductImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.5rem 0;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Review = styled.span``;

export const Price = styled.strong``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: #6095ed;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;

  &:hover {
    background-color: #3595ed;
  }
`;
