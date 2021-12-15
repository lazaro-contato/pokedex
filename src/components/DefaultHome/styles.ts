import styled from "styled-components";
import { FONTWEIGHT, MAXMEDIA } from "../../themes/global";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  justify-content: center;
  align-items: center;
  
`

export const AstronautImg = styled.img`
  
  width: 100vw;

    
  ${MAXMEDIA.SMALL_SCREEN} {
    width: 640px;
    height: 494px;
  }
    
`

export const MainText = styled.p`
  font-size: 1.2em;
  font-weight: ${FONTWEIGHT.SEMIBOLD};
  color: ${props => props.theme.colors.textMedium};
  margin-bottom: 20px;

  ${MAXMEDIA.SMALL_SCREEN} {
    font-size: 24px;
  }
`

export const SecondaryText = styled.p`
  font-size: 1em;
  color: ${props => props.theme.colors.contentTheme};
  width: 300px;
  text-align: center;
  margin-bottom: 39px;

  ${MAXMEDIA.SMALL_SCREEN} {
    font-size: 18px;
    width: 500px;
  }
`

export const SearchPokemonButton = styled.button`
  cursor: pointer;
  
  height: 45px;
  width: 233px;
  
  background: transparent;
  color: ${props => props.theme.colors.border};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  
  &&:hover{
 color: ${props => props.theme.colors.textMedium};
  }
  
`