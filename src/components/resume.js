import React from 'react';
import './resume.css';


export default function Resume() {
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
  return (
    <div className='resume' style={{marginTop:'80px', marginBottom:'20px'}}>
      <a className='fancy3' href='https://drive.google.com/file/d/1eVv3tqRd2OFzfrfcBLTgkzqfkKx_Ue7p/view?usp=drive_link'>
        <span className="letter">R</span>
        <span className="letter">E</span>
        <span className="letter">S</span>
        <span className="letter">U</span>
        <span className="letter">M</span>
        <span className="letter">E</span>
      </a>
    </div>

  );
}

