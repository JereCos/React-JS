import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({prod}) => {

  return (
    <>
      <Card sx={{ maxWidth: 200 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image=""
            alt={prod.name}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Description
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver más
          </Button>
        </CardActions>
      </Card>
  </>
  )
}
      
export default Item