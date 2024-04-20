import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './InfoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info}){
    const RAIN_URL = "https://media.istockphoto.com/id/1409305530/photo/monsoon-season-india.webp?b=1&s=170667a&w=0&k=20&c=3Jd5JlkTv-P6a5VT3lfdBiOMzGrCEDddvlXyQXvMHjc="
    const HOT_URL = "https://media.istockphoto.com/id/453477435/photo/hot.webp?b=1&s=170667a&w=0&k=20&c=Vg9Ibca6xS_APaHriWj_Wko9Pqn9zq1peyEiGnUx3Yg="
   const COLD_URL = "https://images.unsplash.com/photo-1608259158285-3ea03e3105d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3VtbWVyJTIwc2Vhc29ufGVufDB8fDB8fHww"
    return(
        <div className="InfoBox">
          <h1>Weather Info In {info.name}</h1>
          <div className='Info-card'>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL :  COLD_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
            {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/>:<AcUnitIcon/> }
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <div>Temperature: {info.temp}&deg;C</div>
          <div>Humidity: {info.humidity}</div>
          <div>Min. Temperature: {info.tempMin}&deg;C</div>
          <div>Max. Temperature: {info.tempMax}&deg;C</div>
          <div>Weather Type: {info.weather}</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card></div>
        </div>
    )
}