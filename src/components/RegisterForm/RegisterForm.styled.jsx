import styled from "@emotion/styled";


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    /* margin-left: 600px; */
    border: 1.5px solid ${props => props.theme.colors.secondBgColor};
    border-radius: 6px;
    width: 350px;
    padding: 30px;
    background-color: ${props => props.theme.colors.whiteColor};
    margin-top: 50px;   
`

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`
  
export const Label = styled.label`
    display: inline;
    margin-bottom: 5px;
    font-size: 14px;
    margin-left: 2px;    
`
  
export const Input = styled.input`
    width: 100%;
    border-radius: 6px;
    border: ${props => props.theme.colors.secondBgColor} solid 1.5px;
    outline: none;
    padding: 4px 8px;
    font-size: 14px;
    :focus {
    border-color: #fff;
    outline: ${props => props.theme.colors.mainBgColor} solid 2px;
    }    
`
  
export const Button = styled.button`
    padding: 8px 20px;
    width: 100%;
    font-size: 14px;
    border: none;
    border-radius: 6px;
    font-weight: 400;
    color: ${props => props.theme.colors.whiteColor};
    background-color: ${props => props.theme.colors.mainButtonColor};
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);;
    cursor: pointer;  
    :hover {
    background-color: ${props => props.theme.colors.mainBgColor};
  }  
`

export const ErrorMessage = styled.p`
    color: ${props => props.theme.colors.errorColor};
    text-align: center;
`