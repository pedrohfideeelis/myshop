import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;

    body{
        background-color: #f7f7f7;
    }

    body, button, input{
        font-family: 'Inter', sans-serif;
    }

    button{
        cursor: pointer;

        &:hover{
            filter: brightness(1.1);
            transition: filter 0.3s;
        }
    }
}
`;
