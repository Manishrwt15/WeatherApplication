import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./Info.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';

const Info = ({info}) => {
    //URL for displaying the images in card
    const HOT_URL = "https://images.unsplash.com/photo-1525490829609-d166ddb58678?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    
    return (
        // Card display
        <div className='InfoBox'>
            <div className='Card'>
                <Card sx={{ Width: 10000 }}>
                    <CardMedia
                    component="img"
                    height="250"
                    width="500"
                    image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                    alt="green iguana"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='city'>
                        {info.city }  {info.humidity > 80 ? <WaterDropIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Humidity = {info.humidity}&deg;C</p>
                        <p>Speed = {info.speed}km/h</p>
                        <p>TimeZone = {info.timezone}</p>
                        <p>The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C </p>
                    </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
  )
}

export default Info