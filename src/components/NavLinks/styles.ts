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
  display: flex;
  height: 100%;
  list-style: none;
`

export const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: ${props => props.theme.colors.textMedium};
  font-weight: ${FONTWEIGHT.MEDIUM};
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid transparent;

  transition: all 230ms ease-in-out;
  
  &&:hover {
    border-bottom: 2px solid ${props => props.theme.colors.mainText};

  }
`

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`