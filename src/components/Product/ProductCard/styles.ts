import { styled } from "styled-components";

export const Card = styled.article`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProductImg = styled.img`
  width: 250px;
  height: 400px;
  object-fit: contain;
  border-radius: 4px;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 1rem;
`;

export const Review = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.7rem;

  svg {
    font-size: 1rem;
  }
`;

export const Price = styled.strong``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  align-items: center;
  width: 100%;
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 250px;
  padding: 0 1rem;
  background-color: #6095ed;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  svg {
    width: 16px;
    height: 16px;
    padding-bottom: 1px;
  }
`;

export const RemoveFromCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 250px;
  padding: 0 1rem;
  background-color: #ae474c;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;

  svg {
    color: black;
    width: 16px;
    height: 16px;
    padding-bottom: 1px;
  }
`;
