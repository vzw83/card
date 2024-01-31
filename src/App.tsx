import './App.css';
import styled from 'styled-components';
import ImgTitle from './components/images/myImg.jpg'
import {Button} from "./components/buttons/Button";

import {Title} from "./components/Title/Title";
import React from "react";


function App() {
    return (
        <div className="App">
            <Card>
                <Img src={ImgTitle} alt="img"/>
                <ul>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""></a></li>
                </ul>
                <InfoCard>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Title> Headline</Title>
                    <Title>Приветик</Title>
                    <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
                    <WrapperBtn>
                        <Button btnType={"primary"} active>See more</Button>
                        <Button btnType={"outlined"} >Save</Button>
                    </WrapperBtn>
                </InfoCard>

            </Card>
        </div>
    );
}

export default App;



const Card = styled.div`
    width: 300px;
    border-radius: 15px;
    background-color: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
    padding: 10px;
`

const Img = styled.img`
    height: 170px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    display: block;
`

// const Title = styled.h1`
//     color: #000;
//     font-family: Inter;
//     font-size: 16px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: normal;
// `;

const InfoCard = styled.div`
    min-width: 260px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
`

const Text = styled.p`
    color: #ABB3BA;
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    //margin: 20px 0 20px;
`

const WrapperBtn = styled.div`
    display: flex;
    gap: 12px;
`

// const Button = styled.button`
//     width: 86px;
//     height: 30px;
//     font-family: Inter;
//     font-size: 10px;
//     font-style: normal;
//     font-weight: 700;
//     line-height: 20px;
//     border: none;
//     background: none;
//
// `