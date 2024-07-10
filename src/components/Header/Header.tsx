import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";

export const Header: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function toggleLogin() {
    setIsLogged(!isLogged)
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.LoginButton isLogged={isLogged} onClick={toggleLogin}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.LoginButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart ={showCart}/>
    </S.StyledHeader>
  );
};
