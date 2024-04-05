import React from 'react'
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function Product(props){
  
  const { id, title, description, price, rating, thumbnail } = props.data;

  return (
    <Card sx={{ maxWidth: 300, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <CardMedia
          component="img"
          alt={title}
          image={thumbnail}
          height={180}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Price: ${price.toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.primary">
            Rating: {rating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add to Cart</Button>
        </CardActions>
      </Card>
  )
}
