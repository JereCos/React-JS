import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ItemCount from './ItemCount';


const ExpandMore = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export function ItemDetail ({produc}) {

    const [expanded, setExpanded] = React.useState(false);

    console.log(produc);
    
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    
    return (
        <>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            D
          </Avatar>
        }
        action={
            <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={produc.title}
        subheader={produc.category}
        />
      <CardMedia
        component="img"
        height="194"
        image={produc.image}
        alt={produc.title}
        />
      <CardContent>
      <Typography variant="body2" color="text.secondary">
          {produc.description}
        </Typography>
        <Typography variant="h4">
          ${produc.price}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        {/* <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          >
          <ExpandMoreIcon />
        </ExpandMore> */}
      </CardActions>
      <ItemCount stock = {10} initial = {1} />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Detalle:</Typography>
          <Typography paragraph>
            {produc.rating}
          </Typography>
          <Typography paragraph>
            {produc.description}
          </Typography>
          <Typography paragraph>
            {produc.id}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </>
  );
}