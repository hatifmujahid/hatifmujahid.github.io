import React from "react";
import "./AboutMe.css";
import { useEffect } from "react";

export default function AboutMe() {
    const mouseEnter1 = () => {
        const elements = document.querySelectorAll(".word");
        elements.forEach((element) => {
            element.style.opacity = 0.2;
        });
        document.querySelector(".fancy1").style.opacity = 0.2;
    };
    const mouseLeave1 = () => {
        const elements = document.querySelectorAll(".word");
        elements.forEach((element) => {
            element.style.opacity = 1;
        });
        document.querySelector(".fancy1").style.opacity = 1;
    };
    const mouseEnter2 = () => {
        const elements = document.querySelectorAll(".word");
        elements.forEach((element) => {
            element.style.opacity = 0.2;
        });
        document.querySelector(".fancy2").style.opacity = 0.2;
        
    };
    const mouseLeave2 = () => {
        const elements = document.querySelectorAll(".word");
        elements.forEach((element) => {
            element.style.opacity = 1;
        });
        document.querySelector(".fancy2").style.opacity = 1;
    };
    return (
        <div className="text">
                <div className="line">
                  <a className="word" href="hatifmujahid08@gmail.com">→Email</a>
                  <p className="word">→Social</p>
                </div>
                <div className="line">
                  <p className="word">A</p>
                  <p className="fancy1" id='dev' onMouseEnter={mouseEnter2} onMouseLeave={mouseLeave2}>
                    <span className="letter">D</span>
                    <span className="letter">E</span>
                    <span className="letter">V</span>
                    <span className="letter">E</span>
                    <span className="letter">L</span>
                    <span className="letter">O</span>
                    <span className="letter">P</span>
                    <span className="letter">E</span>
                    <span className="letter">R</span>
                    </p>
                </div>
                <div className="line">
                  <p className="word">&</p>
                  <p className="word">Problem Solver</p>
                </div>
                <div className="line">
                  <p className="word">@</p>
                  <p className="fancy2" id='uni' onMouseEnter={mouseEnter1} onMouseLeave={mouseLeave1}>
                    <span className="letter">F</span>
                    <span className="letter">A</span>
                    <span className="letter">S</span>
                    <span className="letter">T</span>
                    <span className="letter">N</span>
                    <span className="letter">U</span>
                    <span className="letter">C</span>
                    <span className="letter">E</span>
                    <span className="letter">S</span>
                </p>
                </div>
              </div>
    );
}