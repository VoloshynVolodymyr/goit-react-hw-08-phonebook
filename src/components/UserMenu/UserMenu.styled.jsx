import styled from "@emotion/styled";


export const Container = styled.div`
    display: flex;
    margin-left: auto;    
`
export const Text = styled.p`
    margin: 0 20px 0 0;
    font-weight: 500;
    font-size: 17px;
    padding: 0; 
    display: flex;
    align-items: center;   
`
  
export const UserName = styled.span`
    margin-left: 2px;
    color: ${props => props.theme.colors.titleColor}
`

  
export const Button = styled('button')`
  padding: ${props => props.theme.spacing(2)};
  background-color: ${props => props.theme.colors.secondBgColor};
  border-radius: ${props => props.theme.spacing(1)};
  margin: ${props => props.theme.spacing(3)};
  width: ${props => props.theme.spacing(25)};
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 4px rgba(0,0,0,0.3), -23px 0 20px -23px rgba(0,0,0,0.8), 23px 0 20px -23px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.1) inset; 
  &:hover {
    scale: 1.1;
  }
`