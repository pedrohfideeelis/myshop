import { styled } from "styled-components";

export const StyledHeader = styled.header`
  background-color: #252525;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.6rem;
`;

export const LoginButton = styled.button`
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: royalblue;
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
  background-color: firebrick;
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
