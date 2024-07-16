import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from "../../redux/root-reducer";
import * as S from "./styles";

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const isLogged = user !== null;

  function handleUserAuth() {
    if (user === null) {
      dispatch({
        type: "user/login",
        payload: {
          name: 'Pedro Henrique',
          email: 'pedro@gmail.com'
        },
      });
    } else {
      dispatch({
        type: "user/logout"
      })
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.LoginButton isLogged={isLogged} onClick={handleUserAuth}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.LoginButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} setShowCart={setShowCart} />
    </S.StyledHeader>
  );
};
