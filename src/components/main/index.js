import React from 'react';
import {Box, Button, Grid} from "@material-ui/core";
import {useRouter} from "next/router";
import InitializeFromStateForm from "../articaleForm";
import showResults from "../articaleForm/showResults";

function ArticlesComponent() {

  const router = useRouter();

  return (
    <Grid container justify="center">
      <Box mt={3} width={1} textAlign="center" p={1}>
        <InitializeFromStateForm onSubmit={showResults} />
      </Box>
    </Grid>
  );
}

export default ArticlesComponent;
