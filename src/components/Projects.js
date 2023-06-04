import { Card, CardActionArea } from '@mui/material';
import React from 'react';
import { CardContent, CardMedia, Typography } from '@mui/material';
import Project_card from './Project_card';
import Navbar from './Navbar';

export default function Projects() {
    return(
        <div>
            <Navbar />
            <Project_card title='Inventory Management System'/>
            <Project_card title='Spam Email Classifier'/>
        </div>
    );
}