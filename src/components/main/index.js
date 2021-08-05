import React, {useEffect} from 'react';
import {Box, Button, Card, CardActions, CardContent, Grid, Link, Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import {articlesRequested} from "../../redux/slices/articles";
import {useDispatch, useSelector} from "react-redux";
import {map} from "lodash";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function MainComponent() {

  const route = useRouter();
  const classes = useStyles();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.collection);

  useEffect(() => {
    dispatch(articlesRequested({status: 'admin'}));
  }, [dispatch])

  return (
    <Box mt={3} width={1} textAlign="center" justifyContent="center" p={1}>
      {map(articles, (article, index) =>
        <Card key={index} className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {article.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/articles/${article.id}/edit`}>
              <a>Home</a>
            </Link>
          </CardActions>
        </Card>
      )}
      <Button>next</Button>
    </Box>
  );
}

export default MainComponent;
