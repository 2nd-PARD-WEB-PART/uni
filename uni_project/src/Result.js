import styled from "styled-components";
import "./fonts/font.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "./App";

const ScreenContainer = styled.div`
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.2);
  background-image: url("/Rectangle 12.png");
  background-size: cover;
`;

const ResultPart = styled.div`
  width: 375px;
  height: auto;
  margin: 0 auto;
  display: flex;
`;

const ResultContainer = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 916px;
  display: flex;
  justify-content: center;
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
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
`;

const TextOnBorder = styled.span`
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  background-color: white; /* 텍스트 배경색을 조정할 수 있습니다. */
  padding: 0 5px; /* 텍스트 주변의 여백을 조정할 수 있습니다. */
`;

const ProfNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const ProfName = styled.div`
  color: #ff79f2;
  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 39.869px;
`;

const ProfInfoBox = styled.div`
  margin: 0 auto;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfInfo = styled.div`
  width: auto;
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const MajorContainer = styled.div`
  box-sizing: border-box;
  text-align: center;
  width: 287px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 36px;
  margin-bottom: 36px;
`;
const MajorTitle = styled.div`
  width: 287px;
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
`;

const Subjects = styled.div`
  color: #010101;

  font-feature-settings: "clig" off, "liga" off;
  font-family: "NanumMyeongjo";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const SubmitContainer = styled.div`
  width: 328px;
  display: flex;
  flex-direction: row;
`;
const CommentInput = styled.input`
  box-sizing: border-box;
  width: 280px;
  height: 48px;
  display: flex;
  padding: 12px 16px;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;
  margin-top: 26px;
`;

const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  margin-top: 26px;
  font-family: "NanumMyeongjo";
`;

function Result() {
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");
  const [selectedProf, setSelectedProf] = useState("");
  const [comments, setComments] = useState([]);
  const { MyData, setUser, PhdInfo, setPhdInfo, Subject, setSubject } =
    useContext(MyContext);
  const maxScoreName = Object.keys(MyData).reduce((a, b) =>
    MyData[a] > MyData[b] ? a : b
  );
  let subjectArray;

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
        await axios
          .get(`http://172.18.157.205:8080/api/comments/${maxScoreName}`)
          .then((response) => {
            //서버측 데이터 보면 실제 데이터는 response.data.data에 저장되어 있음.
            console.log("response: ", response.data);
            //데이터 업데이트.
            setComments(response.data);
          });
      } catch (error) {
        console.log("error: " + error);
      }
    }
    getData();

    if (maxScoreName == "gwang") {
      setPhdInfo({
        name: "김광",
        major: "전자계산학 Ph.D",
        lab: "뉴턴홀 204호",
        call: "054-260-1307",
        email: "wyong@handong.edu",
      });
      setSubject({
        subject1: "코딩 스튜디오 (1학점)",
        subject2: "실전프로젝트 (3학점)",
        subject3: "직업과 진로설계 (1학점)",
        subject4: "창조와 진화 (2학점)",
        subject5: "캡스톤디자인 (4학점)",
        subject6: "프로그래밍 (3학점)",
      });
    } else if (maxScoreName == "yong") {
      setPhdInfo({
        name: "용환기",
        major: "컴퓨터공학 Ph.D.",
        lab: "오석관 315호",
        call: "054-260-1864",
        email: "sshwang@handong.edu",
      });
      setSubject({
        subject1: "데이터구조 (3학점)",
        subject2: "컴퓨터구조 (3학점)",
        subject3: "알고리듬 (3학점)",
      });
      subjectArray = Object.entries(Subject);
      console.log(subjectArray);
    }
  }, []); //한번만 수행

  const Userupload = () => {
    const usercontent = {
      writer: writer,
      selectedProf: PhdInfo.name,
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
          .get(`http://172.18.157.205:8080/api/comments/${maxScoreName}`)
          .then((response) => {
            //서버측 데이터 보면 실제 데이터는 response.data.data에 저장되어 있음.
            console.log("response: ", response.data);
            //데이터 업데이트.
            setComments(response.data);
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
          <ProfInfoBox>
            <ProfNameContainer>
              <ProfName>[</ProfName>
              <ProfName>{PhdInfo.name}</ProfName>
              <ProfName>교수님]</ProfName>
            </ProfNameContainer>
            <ProfNameContainer>
              <ProfInfo>전공:</ProfInfo>
              <ProfInfo>{PhdInfo.major}</ProfInfo>
            </ProfNameContainer>
            <ProfNameContainer>
              <ProfInfo>연구실:</ProfInfo>
              <ProfInfo>{PhdInfo.lab}</ProfInfo>
            </ProfNameContainer>
            <ProfNameContainer>
              <ProfInfo>전화:</ProfInfo>
              <ProfInfo>{PhdInfo.call}</ProfInfo>
            </ProfNameContainer>
            <ProfNameContainer>
              <ProfInfo>E-mail:</ProfInfo>
              <ProfInfo>{PhdInfo.email}</ProfInfo>
            </ProfNameContainer>
          </ProfInfoBox>

          <MajorContainer>
            <MajorTitle>전공수업</MajorTitle>
            {maxScoreName == "gwang" ? (
              <div>
                <Subjects>{Subject.subject1}</Subjects>
                <Subjects>{Subject.subject2}</Subjects>
                <Subjects>{Subject.subject3}</Subjects>
                <Subjects>{Subject.subject4}</Subjects>
                <Subjects>{Subject.subject5}</Subjects>
                <Subjects>{Subject.subject6}</Subjects>
              </div>
            ) : (
              <div>
                <Subjects>{Subject.subject1}</Subjects>
                <Subjects>{Subject.subject2}</Subjects>
                <Subjects>{Subject.subject3}</Subjects>
              </div>
            )}
          </MajorContainer>
        </ResultContainer>
      </ResultPart>
      <ProfComment>
        <ProfCommentTitle>
          우리 교수님은요...
          {comments.map((iter) => (
            <div>
              <TextOnBorder>{iter.writer}</TextOnBorder>
              <CommentContainer>{iter.content}</CommentContainer>
            </div>
          ))}
          <SubmitContainer>
            <CommentInput
              type="text"
              value={content}
              onChange={changeContent}
            ></CommentInput>
            <SubmitButton onClick={Userupload}>제출</SubmitButton>
          </SubmitContainer>
        </ProfCommentTitle>
      </ProfComment>
      <CommentOtherProf>
        <ProfCommentTitle>전체 순위</ProfCommentTitle>
      </CommentOtherProf>
    </ScreenContainer>
  );
}

export default Result;
