import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./main";
import Join from "./join";
import Login from "./login";
import Tp from "./termspage";
import reportWebVitals from "./reportWebVitals";
import Joinsuccess from "./joinsuccess";
import Createhome from "./createhome";
import Find from "./find";
import Createai from "./createai";
import Questionsok from "./questionsok";
import Questionslist from "./questionslist";
import StudyRoom from "./studyroom";
import Aipreview from "./aipreview";
import Createaproblem from "./createaproblem";
import Infostudent from "./infostudent";
import Vocabularynote from "./vocabularynote";
import Membershipout from "./membershipout";
import StudentPage from "./studentPage";
import Outservice from "./outservice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/join" element={<Join />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tp" element={<Tp />} />
        <Route path="/js" element={<Joinsuccess />} />
        <Route path="/createhome" element={<Createhome />} />
        <Route path="/find" element={<Find />} />
        <Route path="/createai" element={<Createai />} />
        <Route path="/questionsok" element={<Questionsok />} />
        <Route path="/questionslist" element={<Questionslist />} />
        <Route path="/studyRoom" element={<StudyRoom />} />
        <Route path="/aipreview" element={<Aipreview />} />
        <Route path="/createaproblem" element={<Createaproblem />} />
        <Route path="/is" element={<Infostudent />} />
        <Route path="/note" element={<Vocabularynote />} />
        <Route path="/membershipout" element={<Membershipout />} />
        <Route path="/sp" element={<StudentPage />} />
        <Route path="/out" element={<Outservice />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
