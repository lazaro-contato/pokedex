import styled from "styled-components";
import {COLORS, MEDIA} from "../../themes/global";

export const FormInput = styled.input`
  box-sizing: border-box;
  padding-left : 20px;
  width: 365px;
  height: 50px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid ${COLORS.GREY300};
  outline: none;
  
  
  font-size: 12px;

  &&:focus {
    border: 1px solid #F9AA35;
    transition-duration: 0.7s
  }

  ${MEDIA.EXTRA_SMALL_SCREEN}{
    width: 80%;
  }

`
