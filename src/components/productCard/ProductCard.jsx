import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export const ProductCard = ({ title, description, price, id, img }) => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        component={"img"}
        sx={{ height: 450, width: "100%" }}
        image={img}
        title="geen iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/itemDetail/${id}`}>
          <Button size="small" variant="outlined"
          sx={{
            color: '#7d590f', 
            borderColor: '#7d590f',
            '&:hover': {
              borderColor: 'black',
              backgroundColor: 'rgba(0, 0, 0, 0.1)' 
            }
          }}
          >
            Ver mas
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};
