import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({ prod }) => {

  return (
    <>
      <Card style={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={prod.image}
            alt={prod.title}
          />
          <CardContent>
            <Typography gutterBottom variant="body1" component="div" style={styles.title}>
              {prod.title}
            </Typography>
            <Typography variant="h6" color="div">
              ${prod.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/producto/${prod.id}`}>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  )
}

const styles = {

  card: {
    maxWidth: 325,
    width: window.innerWidth > 500 ? '25%' : '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#dbadc4',
    padding: '10px 10px',
    margin: window.innerWidth > 500 ? 5 : 20,
  },
  title: {
    height: 50,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }

}

export default Item