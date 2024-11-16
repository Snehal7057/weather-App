
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import "./InfoBox.css";

export default function InfoBox({info}){
const INIT_URL="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const HOT_URL = "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://plus.unsplash.com/premium_photo-1670604649107-a0171e5f1bd0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://media.istockphoto.com/id/1011777484/photo/cloud-storm-sky-with-thunderbolt-over-rural-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=G8aN12QHfqH8ktSwUanoQNvyYx2anv7Saof78ppYTZw=";
    // let info={
    //         // city:"Delhi",
    //         // FeelsLike : 24.48,
    //         // temp:25.05,
    //         // tempMin:27.9,
    //         // tempMax:30.04,
    //         // humidity : 27,
    //         // weather:"haze",
    // };
    return(
    <div className="InfoBox">
<h1>Weather Info - {info.weather}</h1>
<div className='CardContainer'>
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : (info.temp >15)? HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
      {info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}&deg;C</p>
          <p>Max Temp = {info.tempMax}&deg;C</p>
          <p>The weather can be describe as <i>{info.weather}</i> and feels like = {info.FeelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
    </div>
    );
}