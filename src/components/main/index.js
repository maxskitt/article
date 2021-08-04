import React, {useEffect, useState} from 'react';
import {Box, Grid, Link} from "@material-ui/core";
import {db} from "../../../firebase";
import {useRouter} from "next/router";
import map from 'lodash/map';

function MainComponent() {

  const [initialArticles, setInitialArticles] = useState([]);
  const route = useRouter();

  useEffect(() => {
    let arr = [];

    db.collection("articles").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        arr.push(doc.data());
      });
      setInitialArticles(arr);

    });

  }, [route])


  return (
    <Grid container justify="center">
      <Box mt={3} width={1} textAlign="center" p={1}>
        {map(initialArticles, (articles, index) =>
          <Grid container justify="center">
            <Grid key={index}><p>{articles.name}</p></Grid>
            <Grid key={index}><p>{articles.title}</p></Grid>
            <Grid key={index}><p>{articles.description}</p></Grid>
            <Link href="articles/1">
            <a>edit</a>
          </Link>
          </Grid>
        )}
      </Box>
    </Grid>
  );
}

export default MainComponent;
