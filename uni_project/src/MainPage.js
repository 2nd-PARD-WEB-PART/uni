import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const StartButton =styled.button`
  display: flex;
  flex-direction: row;
`;

function MainPage() {
  return (
    <div>
      <Link to={"/select"}>
        <StartButton>
          시작하기
        </StartButton>
      </Link>
    </div>
  );
}

export default MainPage;
