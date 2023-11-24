import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const MainDiv =styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const ImgDiv1=styled(MainDiv)`
  display: flex;
  flex-direction: column;
  background-image:url("./image 1.png");
  background-repeat:no-repeat;
  background-size: cover;
  background-position: center;
  width: 375px;
  height: 568px;
`;

const OpacityDiv = styled.div`
  display: flex;
  flex-direction: column;
  height : 250px;
  width: 100%;
  background-color: #FFFFFFAB;
  margin-top: 320px;
  align-items: center; // 세로 방향 가운데 정렬 
  justify-content: center; // 가로 방향 가운데 정렬 
`;

const TitleDiv =styled.div`
  display: flex;
  text-align: center;
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: NanumMyeongjoOTF;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 39.869px;
`;

const TextDiv =styled.div`
  color: #000;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: NanumMyeongjoOTF;
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
  color: black; //원하는 텍스트 색상으로 변경
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 328px;
  height: 48px;
  margin-top: 13px;

  font-feature-settings: 'clig' off, 'liga' off;
  font-family: NanumMyeongjoOTF;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    background-color: lightgray; //마우스 호버 시 배경색 변경
  }
`;

function MainPage() {
  return (
    <MainDiv>
      <ImgDiv1>
        <OpacityDiv>
          <TitleDiv>
            최애의 교수
          </TitleDiv>
          <TextDiv>
            지금까지 총 000,000명이 참여했습니다. 
          </TextDiv>
          <StartLink to={"/select"}>
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
