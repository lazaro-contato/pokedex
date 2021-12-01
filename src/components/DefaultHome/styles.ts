import styled from "styled-components";
import {FONTWEIGHT} from "../../themes/global";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
  
  justify-content: center;
  align-items: center;
`

export const AstronautImg = styled.img`
  width: 696px;
  height: 494px;
    
`

export const MainText = styled.p`
  font-size: 28px;
  font-weight: ${FONTWEIGHT.SEMIBOLD};
  color: ${props => props.theme.colors.textMedium};

  margin-bottom: 20px;
`

export const SecondaryText = styled.p`
  font-size: 18px;
  color: ${props => props.theme.colors.contentTheme};
  width: 500px;
  text-align: center;

  margin-bottom: 39px;
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
    background-color: red;
  }
  
`