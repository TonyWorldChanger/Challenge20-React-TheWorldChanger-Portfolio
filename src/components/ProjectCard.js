import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function ProjectCard({image, projectTitle, projectDescription, shareUrl, learnUrl}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="180"
        image={image}
        alt="Navigation App"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Navigation App {projectTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This project was the first javascript project I've ever done. {projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={shareUrl}>Share </Button>
        <Button size="small" href={learnUrl}>Learn More</Button>
      </CardActions>
    </Card>
  );
}


