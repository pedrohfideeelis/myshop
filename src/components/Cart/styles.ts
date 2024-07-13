import { styled } from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: fixed;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-400px")};
  width: 400px;
  height: 100vh;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.25);

  transition: right 0.5s;
`;

export const Title = styled.h1`
  font-weight: 800;
  font-size: 1.6rem;
  color: #252525;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
