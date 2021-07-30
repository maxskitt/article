import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Header from "./header";
import useStyles from "./style";

function MainLayout({children}) {
  const classes = useStyles();

  return (
    <>
      <Head/>
      <Header/>
      <Container id="__mainLayout" classes={{root: classes.mainLayout}}>
        {children}
      </Container>
    </>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
