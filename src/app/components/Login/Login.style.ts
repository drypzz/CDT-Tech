import styled from "styled-components";

export const LoginContainer = styled.div`
   width: 100%;
   height: 100%;
`
export const LoginTitleH1 = styled.h1`
   font-size: 2rem;
   font-weight: 600;
`

export const LoginButton = styled.button`
   width: 8rem;
   height: 2rem;
   margin-top: 0.5rem;
   background-color: #000;
   color: #fff;
   font-size: 1.2rem;
   font-weight: 600;
   border: none;
   cursor: pointer;
   transition: background-color .4s;
   &:hover {
      background-color: #444;
   }
`