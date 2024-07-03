import { Button, Box, Typography } from "@mui/material";

export const Counter = ({ restar, contador, sumar }) => {
  return (
    <Box display="flex" alignItems="center">
      <Button
        onClick={restar}
        size="small"
        variant="outlined"
        sx={{
          color: '#7d590f', 
          borderColor: '#7d590f',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        -
      </Button>
      <Typography variant="h6" component="h2" mx={2}>
        {contador}
      </Typography>
      <Button
        onClick={sumar}
        size="small"
        variant="outlined"
        sx={{
          color: '#7d590f',
          borderColor: '#7d590f',
          '&:hover': {
            borderColor: 'black',
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }
        }}
      >
        +
      </Button>
    </Box>
  );
};
