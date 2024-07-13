import React from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import { Product } from "../Product";
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { useDispatch } from "react-redux";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {

  const dispatch = useDispatch();

  function handleAddProducToCart() {
    dispatch({
      type: "cart/add-product",
      payload: product,
    })
  }

  return (
    <S.Card>
      <S.ProductImg src={product.image} alt={product.title} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(product.rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          ({`${product.rating.rate}`})
        </S.Review>
        <S.Price>${product.price}</S.Price>
      </S.ReviewPriceContainer>
      <S.ButtonWrapper>
        <S.AddToCartButton onClick={handleAddProducToCart}>
          Adicionar ao Carrinho <FiShoppingCart />
        </S.AddToCartButton>
      </S.ButtonWrapper>
    </S.Card>
  );
};
