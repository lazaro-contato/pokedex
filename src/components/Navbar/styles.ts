import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 295px;
  height: 50px;
  
  display: flex;
  justify-content: space-between;
`

export const NavLinks = styled.a`
  color: ${props => props.theme.colors.textMedium};
  cursor: pointer;
  width: 100%;
  line-height: 50px;
  display: inline-block;
  align-items: center;
  text-align: center;
  
  &&:hover{
    background-color: red;
    
  }
`
