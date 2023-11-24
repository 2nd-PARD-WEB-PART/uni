import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useContext } from "react";
import { MyContext } from "./App";

const Container =styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Balsamiq Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
  background-image: url('/Rectangle 12.png');
  background-size: cover;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: beige;
  width: 435px;
  height: 100vh;
  background-image: url('/image 1.png');
  background-size: cover;
`;

const Question = styled.footer`
  width: 435px;
  max-height: 177px;
  text-align: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  margin-top: 39px;
  color:#010101;
`;
const Question_dtail = styled.div`
  width:394px;
  height:132px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #FFFFFFAB;
`;

const Footer = styled.footer`
  width: 435px;
  text-align: center;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const Answer_Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const AnswerA = styled.div`
  width: 380px;
  margin-bottom: 8px;
`;
const AnswerA_detail = styled.button`
  background-color: white;
  color:#010101;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  height: 48px;
  &:hover {
    cursor: pointer; /* 마우스가 요소 위에 있을 때 pointer 스타일 변경 */
    background-color: #f0f0f0; /* 마우스가 요소 위에 있을 때 배경색 변경 */
  }
`;
const TextA = styled.div`
  padding-left: 16px;
`

const AnswerB = styled.div`
  width: 380px;
  height: 48px;
`;
const AnswerB_detail = styled.button`
  background-color: white;
  color:#010101;
  border: 1px solid #B3B3B3;
  border-radius: 4px;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  height: 48px;
  &:hover {
    cursor: pointer; /* 마우스가 요소 위에 있을 때 pointer 스타일 변경 */
    background-color: #f0f0f0; /* 마우스가 요소 위에 있을 때 배경색 변경 */
  }
`;
const TextB = styled.div`
  padding-left: 16px;
  
`

export default function Select() {
    const {MyData, setUser} = useContext(MyContext);

    const handleAnswerAClick = () => {
        // MyData를 복제해서 새로운 객체를 만듬
        const updatedData = { ...MyData };
    
        updatedData.Hwang += 1;
        updatedData.kwang += 1;
        updatedData.ho += 1;
        updatedData.jc += 1;
        updatedData.yong += 1;
        updatedData.jang += 1;
        updatedData.sin += 1;
        updatedData.jung += 1;
    
        setUser(updatedData);
      };
    
      const handleAnswerBClick = () => {
        // MyData를 복제해서 새로운 객체를 만듬
        const updatedData = { ...MyData };
    
        updatedData.go += 1;
        updatedData.seok += 1;
        updatedData.hong += 1;
        updatedData.seob += 1;
    
        setUser(updatedData);
      };

  return(
    <Container>
      <Body>

        <Question>
          <Question_dtail>
            <div>
              <p>교수님과 면담을 하기 위해 오피스 앞으로 찾아갔다.</p>
              
              <p>오피스에서 요즘 수업이 너무 어려움을 토로하는데…</p>
            </div>
            
          </Question_dtail>
        </Question>
        <Footer>
          <Answer_Container>

            <AnswerA>
              <Link to='/Select6'>
                <AnswerA_detail onClick={handleAnswerAClick}>
                  <div>
                    <TextA>
                      <div>“그게 왜 어려워? 한 학점당 1시간 이상은</div>
                      <div>공부해야 해 너가 열심히 공부하긴 했어?</div>
                    </TextA>
                  </div>
                </AnswerA_detail>
              </Link>     
            </AnswerA>

            <AnswerB>
              <Link to='/Select6'>
                <AnswerB_detail onClick={handleAnswerBClick}>
                <div>
                  <TextB>
                    <div>“아이구,,, 아니야 열심히 하고 있어..</div>
                    <div>조금만 더 힘내자 화이팅~!</div>
                  </TextB>
                </div>
              </AnswerB_detail>
              </Link> 
            </AnswerB>

          </Answer_Container>
        </Footer>

      </Body>

    </Container>
  );
}
