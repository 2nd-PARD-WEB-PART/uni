import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./MainPage";
import Select from "./Select";
import Result from "./Result";
import Name from "./Name";
import Select2 from "./Select2";
import Select3 from "./Select3";
import Select4 from "./Select4";
import Select5 from "./Select5";
import Select6 from "./Select6";
import Select7 from "./Select7";
import { Context, createContext } from "react";
import { useState } from "react";

export const MyContext = createContext();

function App() {
  const [MyData, setUser] = useState({
    hwang: 0, //황성수
    seok: 0, //김기석
    yong: 0, //용환기
    jang: 0, //장소연
    jung: 0, //김인중
    gwang: 0, //김광
    hong: 0, //홍참길
    seob: 0, //김영섭
    ho: 0, //김호준
    go: 0, //고윤민
    jc: 0, //남재창
    sin: 0, //홍신
  });
  
  const [PhdInfo, setPhdInfo] =useState({
    major: '',
    lab: '',
    call: '',
    email: '',
  });

  const [Subject, setSubject] = useState({
    subject1: '',
    subject2: '',
    subject3: '',
    subject4: '',
    subject5: '',
    subject6: '',
  })
  
  return (
    <div>
      <MyContext.Provider value={{MyData,setUser,PhdInfo,setPhdInfo,Subject,setSubject}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/name" element={<Name/>} />
            <Route path="/select" element={<Select />} />
            <Route path="/select2" element={<Select2 />} />
            <Route path="/select3" element={<Select3 />} />
            <Route path="/select4" element={<Select4 />} />
            <Route path="/select5" element={<Select5 />} />
            <Route path="/select6" element={<Select6 />} />
            <Route path="/select7" element={<Select7 />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
