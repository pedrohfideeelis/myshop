import styled from "styled-components";

export const Container = styled.div`
  max-width: 1240px;
  margin: 4rem auto;
  padding: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    flex: 1 300px;
  }
`;
