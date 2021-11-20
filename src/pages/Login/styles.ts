import styled from "styled-components";
import {MAXMEDIA} from "../../themes/global";


export const BackgroundImage = styled.img`
  position: absolute;
  right: 0;
  height: 100%;
  z-index: -1;
  
  display: none;

  ${MAXMEDIA.MEDIUM_SCREEN}{
  display: block;
  }
    
`