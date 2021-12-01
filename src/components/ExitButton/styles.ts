import styled from "styled-components";

export const ExitBtn = styled.div`

  width: 89px;
  height: 28px;
  padding: 0 10px;
  border-radius: 8px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.border};
  
  cursor: pointer;
  
`

export const LogoutText = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.textMedium};
`

export const LogoutImg = styled.img`
  
  width: 15px;
  height: 15px;
`
