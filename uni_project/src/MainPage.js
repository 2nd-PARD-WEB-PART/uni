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

const MainDiv2=styled(MainDiv)`
  gap: 100px;
`;

const TextDiv =styled.div`
  display: flex;
  align-items: center; // 세로 방향 가운데 정렬 
  justify-content: center; // 가로 방향 가운데 정렬 
  text-align: center;
  width: 200px;
  height: 200px;
`;

const StartLink = styled(Link)`
  text-decoration: none; // 밑줄 제거 
`;

const StartButton =styled.button`
  display: flex;
  flex-direction: row;
  background-color: #3498db; // 원하는 배경색으로 변경 
  color: #fff; //원하는 텍스트 색상으로 변경
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9; //마우스 호버 시 배경색 변경
  }
`;

function MainPage() {
  return (
    <MainDiv>
      <MainDiv2>
        <TextDiv>
          최애의 교수
        </TextDiv>
        <input type="text" placeholder="이름을 입력하세요">
          
        </input>
        <StartLink to={"/select"}>
          <StartButton>
            시작!
          </StartButton>
        </StartLink>
      </MainDiv2>
    </MainDiv>
  );
}

export default MainPage;
