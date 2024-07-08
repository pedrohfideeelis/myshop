import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImg src="" alt="" />
      <S.ProductTitle></S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review></S.Review>
        <S.Price></S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButton>
        Adicionar ao Carrinho <FiShoppingCart />
      </S.AddToCartButton>
    </S.Card>
  );
};
