import styled from "styled-components";
import "./fonts/font.css";
import { useState } from "react";
import axios from "axios";

const ScreenContainer = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  background-image: url("/Rectangle 12.png");
  background-size: cover;
`;

const ResultPart = styled.div`
  /* box-sizing: border-box; */
  width: 375px;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const ResultContainer = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 916px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 24px;
  background-color: rgba(255, 255, 255, 0.8);
  border: 2px solid transparent;
  border-radius: 27px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 1),
      rgba(255, 255, 255, 1)
    ),
    linear-gradient(to bottom, #efefef, #c6c6c6);

  background-origin: border-box;
  background-clip: content-box, border-box;
`;

const Title = styled.div`
  width: 335px;
  height: 28px;
  color: #ff79f2;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 27.84px; /* 77.333% */
  margin: 0 auto;
  margin-top: 87px;
`;

const ImgContainer = styled.div`
  width: 335px;
  height: 508px;
  margin: 0 auto;
  margin-top: 26px;
`;

const ResultImg = styled.img`
  width: 335px;
  height: 508px;
  margin: 0 auto;
  /* margin-top: 46px; */
  /* border: 1px solid blue; */
`;

const WordPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "NanumMyeongjo";
  width: 335px;
  height: 138px;
  background: rgba(255, 255, 255, 0.67);
  top: 452px;
  /* bottom: 0; */
  position: absolute;
  flex-shrink: 0;
  z-index: 1;
  text-align: center;
  color: #010101;
  font-feature-settings: "clig" off, "liga" off;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

function Result() {
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [selectedProf, setSelectedProf] = useState("");

  const changeWriter = (e) => {
    setWriter(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const changeProf = (e) => {
    setSelectedProf(e.target.value);
  };

  const Userupload = () => {
    const usercontent = {
      writer: writer,
      selectedProf: selectedProf,
      content: content,
    };
    console.log(usercontent);

    axios
      .post("http://172.18.157.205:8080/api/comments", usercontent)
      .then((response) => {
        console.log("PATCH response:", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ScreenContainer>
      <Title>당신의 최애 교수는?</Title>
      <ResultPart>
        <ResultContainer>
          <ImgContainer>
            <ResultImg src={process.env.PUBLIC_URL + "/image 1.png"} />
            <WordPart>"너, 우리 랩실에 들어오지 않을래?"</WordPart>
          </ImgContainer>
        </ResultContainer>
      </ResultPart>
      <input type="text" value={writer} onChange={changeWriter}></input>
      <input type="text" value={content} onChange={changeContent}></input>
      <input type="text" value={selectedProf} onChange={changeProf}></input>
      <button onClick={Userupload}>제출</button>
    </ScreenContainer>
  );
}

export default Result;
