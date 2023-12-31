import React , {useState} from "react";
import {Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
const MainDiv =styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const BgImg =styled.div`
  position: absolute;
  width: 40%;
  height: 40%;
  background-image:url("./flower.png");
  background-repeat:no-repeat;
  background-size: contain;
  top: 20%;
  left: 0px;
  z-index: -1;
  opacity: 0.8;
  filter: blur(10px);
`;

const BgImg2 =styled(BgImg)`
  background-image:url("./green.png");
  top: 0;
  left: 60%;
`

const BgImg3 =styled(BgImg)`
  background-image:url("./heart.png");
  top: 60%;
  left: 55%;
`

const ImgDiv1=styled(MainDiv)`
  display: flex;
  flex-direction: column;
  background: #FFF;
  width: 375px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;


const Title =styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin-bottom: 46px;
`;

const TitleCover =styled.img`
  display: flex;
  width: 5px;
  height: 24px;
`;

const TitleDiv =styled.div`
  display: flex;
  text-align: center;
  color: #000;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'NanumMyeongjo';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.869px;
`;

const InputDiv =styled.div`
    display: flex;
    flex-direction: row;
    gap:17px;
    align-items:center;
`;

const InputName =styled.input`
    border: none;
    outline: none;
    color: #000;
    width: 121px;

    font-feature-settings: 'clig' off, 'liga' off;
    font-family: 'NanumMyeongjo';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 39.869px;
`;

const StartButton =styled.button`
  background-color: white; // 원하는 배경색으로 변경 
  color:#010101;
  border: 1px solid #B3B3B3;;
  border-radius: 4px;
  cursor: pointer;
  width: 328px;
  height: 48px;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'NanumMyeongjo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 28px;

  &:hover {
     background-color: #f0f0f0;
  }
`;

function Name() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue(e.target.value); 
    console.log(e.target.value)
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 기본 동작 방지
    localStorage.setItem("name", inputValue);
    navigate("/select");
    console.log(inputValue)
  };

  const isInputEmpty = inputValue.trim() === "";

  return (
    <MainDiv>
      <BgImg></BgImg>
      <BgImg2></BgImg2>
      <BgImg3></BgImg3>
      <ImgDiv1>  
          <Title>
            <TitleDiv>
              당신의 이름은?
            </TitleDiv>
          </Title>
          <InputDiv>
            <TitleCover src="Rectangle 3.png" alt="타이틀 대괄호 왼쪽"/>
            <InputName type="text" onChange={handleChange} placeholder="__________">
            </InputName>
            <TitleCover src="Rectangle 2.png" alt="타이틀 대괄호 왼쪽"/>
            </InputDiv>
      </ImgDiv1>
      <footer>
            <StartButton type="button" onClick={handleSubmit} disabled={isInputEmpty}>
              입력완료
            </StartButton>
        </footer>
      
    </MainDiv>
  );
}

export default Name;