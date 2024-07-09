import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { Product } from "../Product";
import { ProductCard } from "../ProductCard/ProductCard";

export const ProductsList: React.FC = () => {
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
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
