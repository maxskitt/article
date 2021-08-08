import React, {useEffect, useState} from 'react';
import {
  Box,
  Card,
  CardActions,
  CardContent, FormControl,
  Grid, InputLabel,
  Link, MenuItem, Select,
  Typography, useTheme
} from "@material-ui/core";
import {useRouter} from "next/router";
import {
  articlesPagination,
  articlesRequested, articlesSortDefault, articlesSortFirst, articlesSortLast
} from "../../redux/slices/articles";
import {useDispatch, useSelector} from "react-redux";
import {map} from "lodash";
import useStyles from "./style";
import collect from "collect.js";
import Pagination from '@material-ui/lab/Pagination';

function MainComponent() {

  const dispatch = useDispatch();
  const route = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  const [Search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);

    if (event.target.value === 10) {
      dispatch(articlesSortLast());
    } else if (event.target.value === 20) {
      dispatch(articlesSortFirst());
    } else {
      dispatch(articlesSortDefault());
    }

  };

  const handleCloseSearch = () => {
    setOpen(false);
  };

  const handleOpenSearch = () => {
    setOpen(true);
  };

  const articles = useSelector((state) => state.articles.collection);
  const param = useSelector((state) => state.articles.param);
  const collection = collect(articles);
  const forPage = collection.forPage(param.page, param.per);

  const handleChange = (event, value) => {
    dispatch(articlesPagination(value));
  };

  useEffect(() => {
    dispatch(articlesRequested());
  }, [dispatch])

  return (
    <Box mt={3} width={1} textAlign="center" justifyContent="center" p={1}>
      <Grid>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">Search</InputLabel>
          <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleCloseSearch}
              onOpen={handleOpenSearch}
              value={Search}
              onChange={handleChangeSearch}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Last time</MenuItem>
            <MenuItem value={20}>First time</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      {map(forPage.all(), (article, index) =>
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
        <Pagination count={param.total} page={param.page} onChange={handleChange} variant="outlined" />
      </Grid>
    </Box>
  );
}

export default MainComponent;