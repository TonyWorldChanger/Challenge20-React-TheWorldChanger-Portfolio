import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Project1 from "../styles/Project1.PNG";


export default function ImagMediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={Project1}
        alt="Navigation App"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project 1
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This project was the first javascript project I've ever done. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href="https://github.com/ADBLOW-TEAM-1/Project-ADBLOW">Share </Button>
        <Button size="small" href= "https://github.com/TonyWorldChanger">Learn More</Button>
      </CardActions>
    </Card>
  );
}


