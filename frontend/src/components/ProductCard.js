import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProductCard(props) {
  return (
    <Card sx={{
      maxWidth: 240,
      padding: '10px',
      margin: '10px',
      borderRadius: '20px'
    }}>
      <CardMedia
        component="img"
        alt={props.item.name}
        height="240"
        image={props.item.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.cost}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.item.quantity}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button variant="contained" sx={{ backgroundColor: '#B8A1A1', color: '#000000'}}>View Deal</Button>
      </CardActions>
    </Card>
  );
}
