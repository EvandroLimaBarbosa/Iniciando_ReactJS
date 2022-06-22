import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function item(props) {
  return (
    <Card
      sx={{
        maxWidth: 250,
        backgroundColor: "gray",
        margin: "auto",
        marginBottom: 5,
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.noticias}
        </Typography>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          bla bla bla
        </Typography>
        <Typography variant="body2">{props.coment}</Typography>
      </CardContent>
      <CardActions>
        <Button sx={{ color: "blue", fontWeight: "bold" }} size="small">
          Botão
        </Button>
      </CardActions>
    </Card>
  );
}
