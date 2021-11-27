import styled from "styled-components";
import {FONTWEIGHT, COLORS} from "../../themes/global";

export const LoginTextStyle = styled.p`
    font-weight: ${FONTWEIGHT.BOLD};
    font-size: 36px;
    margin-bottom: 48px;
  
    color: ${props => props.theme.colors.mainText};
  
`