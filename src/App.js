import React from 'react';
import { useState } from "react";
import './App.css';

function CalcButton({ label, onClick, buttonClassName = "CalcButton" }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function CalcDisplay({ display }) {
  return (
    <div className="CalcDisplay">
      {display}
    </div>
  );
}

export default function App() {
  const [disp, setDisp] = useState('C-PEITEL3 EXPECTATIONS');

  const clickHandler = (e) => {
    e.preventDefault();
    const param = e.target.innerHTML;
    switch (param) {
      case '1':
        setDisp('Being On Time'); break;
      case '2':
        setDisp('Making An Effort'); break;
      case '3':
        setDisp('Being High Energy'); break;
      case '4':
        setDisp('Having A Positive Attitude'); break;
      case '5':
        setDisp('Being Passionate'); break;
      case '6':
        setDisp('Using Good Body Language'); break;
      case '7':
        setDisp('Being Coachable'); break;
      case '8':
        setDisp('Doing A Little Extra'); break;
      case '9':
        setDisp('Being Prepared'); break;
      case '0':
        setDisp('Having A Strong Work Ethic'); break;
      case 'RESET':
        setDisp('10 Things That Require Zero Talent'); break;
      case 'NAME':
        setDisp('JORDAN MICKO DELORIA'); break;
      case 'What I learned?':
        setDisp('I’ve learned both frontend and backend development. On the frontend, I’ve worked with React, HTML, and CSS to create websites. For the backend, I’ve learned how to build APIs and handle data. Overall, I’ve gained a solid understanding of how the frontend and backend work together to create full web applications.'); break;
      case 'What I want to learn?':
        setDisp('I want to improve my skills in full-stack development, especially with Node.js and React. I also want to learn more about working with databases and deploying apps to the cloud.'); break;
      case 'How will I learn?':
        setDisp('I will stay focused, be passionate, and put more effort into my work. I’ll learn through hands-on projects and keep improving my skills by staying dedicated and consistent.'); break;
      default:
        setDisp('C-PEITEL3 EXPECTATIONS');
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <h1>JORDAN MICKO DELORIA - IT3A</h1>
        <CalcDisplay display={disp} />
        <CalcButton label={"What I learned?"} onClick={clickHandler} buttonClassName={"TextButton"} />
        <CalcButton label={"What I want to learn?"} onClick={clickHandler} buttonClassName={"TextButton"} />
        <CalcButton label={"How will I learn?"} onClick={clickHandler} buttonClassName={"TextButton"} />
        <div className="ButtonContainer">
          <CalcButton label={7} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={8} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={9} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={4} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={5} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={6} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={1} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={2} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={3} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"RESET"} onClick={clickHandler} />
          <CalcButton label={0} onClick={clickHandler} buttonClassName={"NumButton"} />
          <CalcButton label={"NAME"} onClick={clickHandler} />
        </div>
      </div>
    </div>
  );
}
