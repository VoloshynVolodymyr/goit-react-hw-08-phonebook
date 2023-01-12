import styled from "@emotion/styled";

export const Input = styled.input`
width: 300px;
height: 30px;
font-size: 24px;
color: ${props => props.theme.colors.titleColor};
margin: 20px;
`

export const Label = styled.label`
  font-weight: bold;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.titleColor};
  width: 300px;
height: 30px;
font-size: 24px;
  margin: 20px;
  margin-top: 300px;
`