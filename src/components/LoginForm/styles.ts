import styled from "styled-components";
import {MEDIA} from "../../themes/global";

export const FormInput = styled.input`
  box-sizing: border-box;
  color: ${props => props.theme.colors.textMedium};
  padding-left : 20px;
  width: 365px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.border};
  background-color: ${props => props.theme.colors.background};
  outline: none;
  
  
  font-size: 12px;

  ::placeholder { color: ${props => props.theme.colors.textRegular} };

  &&:focus {
    border: 1px solid ${props => props.theme.colors.warning};
    transition-duration: 0.7s
  }

  ${MEDIA.EXTRA_SMALL_SCREEN}{
    width: 80%;
  }

`
