import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { FiShoppingCart } from "react-icons/fi";
import axios from "axios";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number, count: number };
}

export const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        const productsData: Product[] = response.data;
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching the products", error);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <S.Card key={product.id}>
          <S.ProductImg src={product.image} alt={product.title} />
          <S.ProductTitle>{product.title}</S.ProductTitle>
          <S.ReviewPriceContainer>
            <S.Review>{product.rating.rate}</S.Review>
            <S.Price>${product.price}</S.Price>
          </S.ReviewPriceContainer>
          <S.ButtonWrapper>
            <S.AddToCartButton>
              Adicionar ao Carrinho <FiShoppingCart />
            </S.AddToCartButton>
          </S.ButtonWrapper>
        </S.Card>
      ))}
    </>
  );
};
