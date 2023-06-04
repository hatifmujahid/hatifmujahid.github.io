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

    const handleClick = () => {
        if (props.title === 'Inventory Management System') {
            window.open('https://github.com/hatifmujahid', '_blank');
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
        <StyledCard sx={{width:'300px', backgroundColor:'#161616'}} variant="elevation" >
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
