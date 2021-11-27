import styled from "styled-components";
import { FONTWEIGHT, MEDIA} from "../../themes/global";

export const LoginButton = styled.button`
  height: 54px;
  width: 365px;
  margin-top: 18px;
  border-radius: 8px;
  border: 1px solid transparent;
  background-color: ${props => props.theme.colors.primary};
  
  color: ${props => props.theme.colors.GREY500};
  font-weight: ${FONTWEIGHT.MEDIUM};
  
  cursor: pointer;

  ${MEDIA.EXTRA_SMALL_SCREEN}{
    width: 80%;
  }
  
`