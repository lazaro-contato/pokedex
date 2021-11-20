import styled from "styled-components";
import {MAXMEDIA} from "../../themes/global";

export const MainContainerLogin = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  ${MAXMEDIA.MEDIUM_SCREEN}{
    display: block;
    margin-left: 200px;
  }
`

export const FormContainer = styled.div`
  width: 400px;
`

export const PokemonMainImage = styled.img`
  width: 206px;
  height: 76px;
  margin: 100px auto 79px auto;
  
`