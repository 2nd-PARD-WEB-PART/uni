import styled from "styled-components";
import "./fonts/font.css";
import { useState, useEffect } from "react";
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
  top: 537px;
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

const ProfComment = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: auto;
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

const ProfCommentTitle = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: auto;
  padding: 26px 20px;
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 39.869px; /* 166.119% */
`;

const CommentOtherProf = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 100px;
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

const CommentContainer = styled.div`
  box-sizing: border-box;
  width: 328px;
  display: flex;
  padding: 12px 16px 8px 16px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  background: var(--White, #fff);
`;

const TextOnBorder = styled.span`
  position: absolute;
  top: -20px; /* 텍스트의 위치를 조정할 수 있습니다. */
  left: 50%; /* 텍스트의 가로 위치를 가운데로 조정합니다. */
  transform: translateX(
    -50%
  ); /* 가로 위치를 조정한 위치의 50%만큼 왼쪽으로 이동합니다. */
  background-color: white; /* 텍스트 배경색을 조정할 수 있습니다. */
  padding: 0 5px; /* 텍스트 주변의 여백을 조정할 수 있습니다. */
`;

function Result() {
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [selectedProf, setSelectedProf] = useState("");
  const [ismore, setIsMore] = useState(false);
  let comments = [];

  const changeWriter = (e) => {
    setWriter(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const changeProf = (e) => {
    setSelectedProf(e.target.value);
  };

  useEffect(() => {
    //비동기식 함수를 사용해야함
    async function getData() {
      try {
        axios
          .get("http://172.18.157.205:8080/api/comments")
          .then((response) => {
            //서버측 데이터 보면 실제 데이터는 response.data.data에 저장되어 있음.
            console.log("response: ", response.data);
            //데이터 업데이트.
            comments = response.data;
          });
      } catch (error) {
        console.log("error: " + error);
      }
    }
    getData();
  }, []); //한번만 수행

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

  const getComment = () => {
    async function getData() {
      try {
        axios
          .get("http://172.18.157.205:8080/api/comments")
          .then((response) => {
            //서버측 데이터 보면 실제 데이터는 response.data.data에 저장되어 있음.
            console.log("response: ", response.data);
            //데이터 업데이트.
            comments = response.data;
          });
      } catch (error) {
        console.log("error: " + error);
      }
    }
    getData();
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
      <ProfComment>
        <ProfCommentTitle>
          우리 교수님은요...
          <CommentContainer>
            dkdkdkdkdkdk
            <TextOnBorder></TextOnBorder>
          </CommentContainer>
        </ProfCommentTitle>
      </ProfComment>
      <CommentOtherProf>
        <ProfCommentTitle>전체 순위</ProfCommentTitle>
      </CommentOtherProf>
      <input type="text" value={writer} onChange={changeWriter}></input>
      <input type="text" value={content} onChange={changeContent}></input>
      <input type="text" value={selectedProf} onChange={changeProf}></input>
      <button onClick={Userupload}>제출</button>
    </ScreenContainer>
  );
}

export default Result;