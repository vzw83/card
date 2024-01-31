import styled, {css} from "styled-components";

type ButtonPropsType = {
    color?: string,
    fontSize?: string,
    btnType: "primary" | "outlined"
    active?: boolean
}
export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    border: 2px solid ;
    //background-color: #5959a8;
    // background-color: ${props=> props.color || "#4E71FE"};
    
    //color: #fff;
    font-family: Inter;
    //font-size: 10px;
    font-size: ${props=> props.fontSize || "10px"};
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
           
   
    
    //&:hover{
    //    background-color: red;
    //}
    
    ${props => props.btnType === "outlined" && css<ButtonPropsType>`
        border: 2px solid ${props=> props.color || "#4E71FE"};
        color: ${props=> props.color || "#4E71FE"};
        background-color: transparent;
        
        &:hover{
            border-color: red;
            color: red;
            background-color: transparent;
        }
    `}

    
    ${props => props.btnType=== "primary" && css<ButtonPropsType>`
        background-color: ${props=> props.color || "#4E71FE"};
        // border: 2px solid ${props=> props.color || "#4E71FE"};
        color: #fff;
        
        &:hover{
        background-color: red;
    }
    `}
    
    // ${props => props.active && css<ButtonPropsType>`
    //     box-shadow: 2px 2px 2px 2px #adb5e0;
    // `}
    
`