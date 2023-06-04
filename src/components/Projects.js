import React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from './Project_card';
import Navbar from './Navbar';

export default function Projects() {
  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={10}
        alignItems="center"
        justifyContent="center" // Added justifyContent to center the container
      >
        <Grid item>
          <ProjectCard title="Inventory Management System" />
        </Grid>
        <Grid item>
          <ProjectCard title="Spam Email Classifier" />
        </Grid>
        <Grid item>
          <ProjectCard title="Pwned Passwords" />
        </Grid>
      </Grid>
    </div>
  );
}
