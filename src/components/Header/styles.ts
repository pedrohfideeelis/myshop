import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #252525;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
`;

interface LoginButtonProps{
  isLogged: boolean
}

export const LoginButton = styled.button<LoginButtonProps>`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color:   ${(props) => props.isLogged ? "firebrick" : "darkcyan"};
  color: white;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const CartButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: dodgerblue;
  color: white;

  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
