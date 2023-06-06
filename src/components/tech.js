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
    <div style={{ marginLeft: "10%", marginRight: "30px" }}>
      {languages.map((language) => (
        <div key={language.title}>
          <Stack flexDirection={"row"} sx={{ alignContent: "center", alignItems: "center" }}>
            <div style={{ width: "400px" }}>
              <h2 style={{ color: "white" }}>{language.title}</h2>
            </div>
            <LinearProgress
              variant="determinate"
              value={language.rating}
              sx={{ width: "200px", height: "16px", backgroundColor: "#E0E0E0" }}
            >
              <Box
                sx={{
                  backgroundColor: "#1976d2",
                  height: "100%",
                  borderRadius: "4px",
                }}
              />
            </LinearProgress>
          </Stack>
        </div>
      ))}
    </div>
  );
};

export default Tech;
