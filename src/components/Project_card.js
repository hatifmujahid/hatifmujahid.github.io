import React from "react";
import { Card, CardActionArea } from '@mui/material';
import { CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export default function Project_card(props) {
    let description = '';
    if (props.title === 'Inventory Management System') {
        description = 'This is a web application that allows users to manage their inventory. It is built using React.js, Node.js, Express.js, and MongoDB. It is hosted on Heroku.'
    }
    else if (props.title === 'Spam Email Classifier') {
        description = 'This is a python program that uses KNN to classify emails as spam or not spam.'
    }
    else if (props.title === 'Pwned Passwords') {
        description = 'This is a C++ program that uses AVL trees to check if a password has been pwned.Multithreading Sha-1 encryption AVL tree searching Shows the pwned passwords as well the number of times they have been detected. It is easily adaptable to any other program. RESULTS Time achieved: 24 seconds on average for file reading, 0.000045 seconds average for searching value.'
    }

    const handleClick = () => {
        if (props.title === 'Inventory Management System') {
            window.open('https://github.com/hatifmujahid/Inventory-Management-System-PERN', '_blank');
        }
        else if (props.title === 'Spam Email Classifier') {
            window.open('https://github.com/hatifmujahid/Spam-Mail-Classification', '_blank');
        }
        else if (props.title === 'Pwned Passwords') {
            window.open('https://github.com/hatifmujahid/DS-Project.cpp', '_blank');
        }
    }
    const StyledCard = styled(Card)({
        width: '300px',
        backgroundColor: '#161616',
        color: '#808080',
        margin: '10%',
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: '#FF0FFF',
          color: 'white',
        },
      });
    return (
        <StyledCard sx={{width:'300px', backgroundColor:'#161616'}} variant="elevation">
            <CardActionArea onClick={handleClick} >
                <CardMedia
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}   
                    </Typography>
                    <Typography variant="body2" color="FFFFF">
                        {description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </StyledCard>
    );
    
}
