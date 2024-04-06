import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { ProductContext } from "../context/product-context";

export default function CartItem(props) {
  const { id, title, description, price, rating, thumbnail } = props.data;

  const { cartItems, addToCart, removeFromCart, updateCartItemAmount } = useContext(ProductContext);

  return (
    <Card
      sx={{
        maxWidth: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia component="img" height={180} alt={title} image={thumbnail} />
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
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => removeFromCart(id)}
        >
          {" "}
          -{" "}
        </Button>
        <TextField
          size="small"
          type="number"
          value={cartItems[id]}
          inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          onChange={(e) => updateCartItemAmount(e.target.value, id)}
        />
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() => addToCart(id)}
        >
          {" "}
          +{" "}
        </Button>
      </CardActions>
    </Card>
  );
}
