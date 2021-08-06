import React, {useEffect, useState} from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  Link, MobileStepper, Select,
  Typography, useTheme
} from "@material-ui/core";
import {useRouter} from "next/router";
import {
  articlesDefault,
  articlesRequested, articlesSortFirst,
  articlesSortLast, articlesStepsBack, articlesStepsNext
} from "../../redux/slices/articles";
import {useDispatch, useSelector} from "react-redux";
import {map} from "lodash";
import useStyles from "./style";
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {DataGrid} from "@material-ui/data-grid";

function MainComponent() {

  const dispatch = useDispatch();
  const handleNext = () => dispatch(articlesStepsNext());
  const handleBack = () => dispatch(articlesStepsBack());
  const route = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  const articles = useSelector((state) => state.articles);
  console.log(articles.param.page, Math.pow(articles.param.per, articles.param.page), "dsfsd")
  const currentArticles = articles.collection.slice(articles.param.page, articles.param.per, articles.param.page);

  const [state, setState] = useState({
    articles: 'articles',
    name: 'default',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
    if (event.target.value === '10') {
      dispatch(articlesSortLast());
    } else if (event.target.value === '20') {
      dispatch(articlesSortFirst());
    }
  };

  useEffect(() => {
    dispatch(articlesRequested());
  }, [dispatch])

  return (
    <Box mt={3} width={1} textAlign="center" justifyContent="center" p={1}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Articles</InputLabel>
        <Select
          native
          value={state.articles}
          onChange={handleChange}
          inputProps={{
            name: 'articles',
            id: 'articles-native-simple',
          }}
        >
          <option aria-label="None" value=""/>
          <option value={10} onChange={handleChange}>Last</option>
          <option value={20} onChange={handleChange}>First</option>
        </Select>
      </FormControl>
      {map(currentArticles, (article, index) =>
        <Card key={index} variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              {article.title}
            </Typography>
            <Typography variant="h5" component="h2">
              {article.name}
            </Typography>
            <Typography color="textSecondary">
              {article.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/articles/${article.id}/edit`}>
              Home
            </Link>
          </CardActions>
        </Card>
      )}
      <Grid container justifyContent="center">
        <MobileStepper
          variant="dots"
          steps={articles.param.total}
          position="static"
          activeStep={articles.param.page}
          className={classes.root}
          nextButton={
            <Button size="small" onClick={handleNext} disabled={articles.param.page === articles.param.total - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={articles.param.page === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
              Back
            </Button>
          }
        />
      </Grid>
    </Box>
  );
}

export default MainComponent;
