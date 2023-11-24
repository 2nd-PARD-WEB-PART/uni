import React, {useState,useEffect} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components"
import axios from "axios";
import "./Fonts/Font.css";

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
  background-image:url("./image 1.png");
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  width: 435px;
  height: 100%;
  justify-content: space-between;
`;

const OpacityDiv = styled.div`
  display: flex;
  flex-direction: column;
  height : 250px;
  width: 100%;
  background-color: #FFFFFFAB;
  //margin-top: 450px;
  align-items: center; // 세로 방향 가운데 정렬 
  justify-content: center; // 가로 방향 가운데 정렬 
`;

const Opa2 =styled(OpacityDiv)`
  width: 340px;
  height: 160px;
  justify-content: center;
  align-items: center;
  gap: 11.6px;
  flex-shrink: 0;
  margin-top: 38px;
  margin-left: 20px;

  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'NanumMyeongjo';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

const Title =styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
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

const TextDiv =styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'NanumMyeongjo';
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 82px;
`;

const StartLink = styled(Link)`
  text-decoration: none; // 밑줄 제거 
`;

const StartButton =styled.button`
  background-color: white; // 원하는 배경색으로 변경 
  color:#010101;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  cursor: pointer;
  width: 328px;
  height: 48px;
  margin-top: 13px;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: 'NanumMyeongjo';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    background-color: #f0f0f0;  //마우스 호버 시 배경색 변경
  }
`;

function MainPage() {

  const [count, setCount] =useState(0);

  useEffect(() => {
    console.log("gld;")
    //GET 요청 보내기
    axios
      .get(`http://172.18.157.205:8080/api/rankings/count`)
      .then((response) => {
        console.log("response: " + JSON.stringify(response.data));

        //서버에서 받은 데이터 추출
        const suverName = response.data
        setCount(suverName);
      })
      .catch((error) => console.log("error: " + error));
  }, []);

  return (
    <MainDiv>
      <BgImg></BgImg>
      <BgImg2></BgImg2>
      <BgImg3></BgImg3>
      <ImgDiv1>
        <Opa2>
          “당신의 최애의 교수가 되어줄게!”
        </Opa2>
        <OpacityDiv>
          <Title>
            <TitleCover src="Rectangle 3.png" alt="타이틀 대괄호 왼쪽"/>
            <TitleDiv>
              최애의 교수
            </TitleDiv>
            <TitleCover src="Rectangle 2.png" alt="타이틀 대괄호 오른쪽"/>
          </Title>
          <TextDiv>
            지금까지 총 {count}명이 참여했습니다. 
          </TextDiv>
          <StartLink to={"/name"}>
            <StartButton>
              시작하기
            </StartButton>
          </StartLink>
        </OpacityDiv>
      </ImgDiv1>
    </MainDiv>
  );
}

export default MainPage;
