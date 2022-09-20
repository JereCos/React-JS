import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { maxWidth } from '@mui/system';

const Item = ({prod}) => {

  return (
    <>
      <div className = 'column' style={styles.column} >
      <Card className = 'card' style={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={prod.image}
            alt={prod.title}
            />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {prod.description} */}
            </Typography>
            <Typography variant="h4" color="div">
              ${prod.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Ver más
          </Button>
        </CardActions>
      </Card>
      </div>
  </>
  )
}

const styles = {
/*   column: {
    float: 'left',
    width: '25%',
    padding: '10px 10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
    gridGap: '20px',
  }, */
/*   card: {
    maxWidth: 200,
    height: 500,
    display: 'grid',
    gridTemplateRows: 'max-content 1fr',
  }, */
}
      
export default Item