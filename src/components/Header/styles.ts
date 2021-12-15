import styled from "styled-components";
import { MAXMEDIA } from "../../themes/global";


export const HeaderContainer = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5em;
  height: 50px;
  background-color: ${props => props.theme.colors.primaryTheme};
  
  ${MAXMEDIA.MEDIUM_SCREEN} {
    padding: 0 100px;
    
  }
`

export const LeftSection = styled.div`
  display: flex;
`

export const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`

export const RightSection = styled.div`
  display: flex;

`

export const PokeLogoImage = styled.img`
  height: 30px;
  width: 75px;
`

