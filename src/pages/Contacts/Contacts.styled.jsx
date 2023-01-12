import styled from "@emotion/styled"



export const Header = styled.h1`
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    margin-bottom: 20px;
    `

export const Text = styled.span`
    color: ${props => props.theme.colors.titleColor}; 
`

export const Loading = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;   
`
  
