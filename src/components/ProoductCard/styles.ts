import { styled } from "styled-components";

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;
`;

export const ProductImg = styled.img`
  width: 90%;
`;

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
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
`;

export const AddToCartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: cornflowerblue;
  color: white;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;
