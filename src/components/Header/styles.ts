import styled from "styled-components";

export const HeaderContainer = styled.header`
`

export const HeaderElement = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0 200px;
  height: 50px;
  background-color: ${props => props.theme.colors.primaryTheme};
`

export const PokeLogoImage = styled.img`
  height: 30px;
  width: 75px;
`

