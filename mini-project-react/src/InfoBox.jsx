import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function InfoBox(){
    const IMG_URL = "https://plus.unsplash.com/premium_photo-1661897016268-b77ad5186d02?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let info = {
        humidity: 30,
        temp: 31.9,
        tempMax: 31.9,
        tempMin: 31.9,
        weather:"scattered clouds",
        name : "Aurangabad"
        }

    return(
        <div className="InfoBox">
          <h1>Weather Info In {info.name}</h1>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={IMG_URL}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
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
    </Card>
        </div>
    )
}