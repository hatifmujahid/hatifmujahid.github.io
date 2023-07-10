import React from "react";
import { LinearProgress } from "@mui/material";
import { Box, Stack } from "@mui/system";

const languages = [
  {
    title: "C++",
    rating: 100,
  },
  {
    title: "React.js",
    rating: 95,
  },
  {
    title: "Python",
    rating: 95,
  },
  {
    title: "JavaScript",
    rating: 90,
  },
  {
    title: "PostgreSQL",
    rating: 95,
  },
  {
    title: "HTML",
    rating: 100,
  },
  {
    title: "Material UI",
    rating: 100,
  },
  {
    title: "Node.js",
    rating: 80,
  },
  {
    title: "Express.js",
    rating: 80,
  },
  {
    title: "CSS",
    rating: 90,
  },
];

const Tech = () => {
  return (
    <div style={{ marginLeft: "10%", marginRight: "30px", display:'flex'}}>
      {languages.map((language) => (
        <div key={language.title}>
          <h2 style={{color:'white', fontWeight:'lighter', marginRight:'20px'}}>{language.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Tech;
