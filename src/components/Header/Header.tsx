import { useState } from "react";
import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);

  function toggleLogin(){
    setIsLogged(!isLogged)
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.LoginButton isLogged={isLogged} onClick={toggleLogin}>
            {isLogged ? "Logout" : "Login"}
            {isLogged? <FiLogOut/> : <FiLogIn />}
          </S.LoginButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart/>
            </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
