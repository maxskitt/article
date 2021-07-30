import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import {Button, Grid} from "@material-ui/core";
import useStyles from "./style";

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      position="static"
      color="inherit"
      className={classes.headerBorder}
    >
      <Container disableGutters>
        <Grid container justify="center">
          <Button variant="contained" color="primary">
            New articles
          </Button>
        </Grid>
      </Container>
    </AppBar>
  );
}

export default Header;
