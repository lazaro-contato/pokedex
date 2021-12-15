import styled from "styled-components";
import { FONTWEIGHT } from "../../themes/global";

export const NavLinksContainer = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
`

export const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  top: 65px;
  left: 0;
  
  list-style: none;
  background-color: #fff;
  
  display: flex;
  flex-direction: column;
  position: fixed;
`

export const LinkItem = styled.li`
  width: 100%;
  margin-bottom: 10px;
  padding: 0 1.1em;
  
  color: ${props => props.theme.colors.textMedium};
  font-weight: ${FONTWEIGHT.MEDIUM};
  font-size: 16px;
  
  display: flex;
  align-items: center;
  
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`

export const HambButton = styled.img`
  width: 30px;
  height: 30px;
  border: none;
`