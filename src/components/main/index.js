import React, {useEffect, useState} from 'react';
import {
  Box, Button,
  Card,
  CardActions,
  CardContent, CircularProgress, FormControl,
  Grid, InputBase, InputLabel,
  Link, MenuItem, Select,
  Typography, useTheme
} from "@material-ui/core";
import {useRouter} from "next/router";
import {
  articlesPagination,
  articlesRequested, articlesSearch, articlesSortDefault, articlesSortFirst, articlesSortLast
} from "../../redux/slices/articles";
import {useDispatch, useSelector} from "react-redux";
import {map} from "lodash";
import useStyles from "./style";
import collect from "collect.js";
import Pagination from '@material-ui/lab/Pagination';
import {deleteArticles} from "../../saga/articles/api";
import SearchIcon from '@material-ui/icons/Search';

function MainComponent() {

  const articles = useSelector((state) => state.articles.choiceCollection);
  const param = useSelector((state) => state.articles.param);
  const collection = collect(articles);
  const forPage = collection.forPage(param.page, param.per);
  const isLoading = useSelector((state) => state.articles.loading);
  const [sort, setSort] = useState('');
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();
  const route = useRouter();
  const classes = useStyles();
  const theme = useTheme();

  const handleChangeSort = (event) => {
    setSort(event.target.value);
    if (event.target.value === 10) {
      dispatch(articlesSortLast());
    } else if (event.target.value === 20) {
      dispatch(articlesSortFirst());
    } else {
      dispatch(articlesSortDefault());
    }
  };

  const handleCloseSort = () => {
    setOpen(false);
  };

  const handleOpenSort = () => {
    setOpen(true);
  };

  const handleChange = (event, value) => {
    dispatch(articlesPagination(value));
  };

  useEffect(() => {
    dispatch(articlesRequested(param.page));
  }, [param.page])

  const handleChangeSearch = (event) => {
    setSearch(event.target.value);
    console.log(search, "handleChangeSearch")
    dispatch(articlesSearch(search));
  };

  return (
    <Box mt={3} width={1} textAlign="center" justifyContent="center" p={1}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          value={search}
          onChange={handleChangeSearch}
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
      <Grid>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label"/>
          <Select
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleCloseSort}
            onOpen={handleOpenSort}
            value={sort}
            onChange={handleChangeSort}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Last time</MenuItem>
            <MenuItem value={20}>First time</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid>
        {map(forPage.all(), (article, index) =>
          <Card key={index} className={classes.containerCard} variant="outlined">
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
                Edit
              </Link>
              <Button onClick={()=>{deleteArticles(article.id)}}>Delete</Button>
            </CardActions>
          </Card>
        )}
        {isLoading && <CircularProgress/>}
      </Grid>
      <Grid container justifyContent="center">
        <Pagination count={param.total} page={param.page} onChange={handleChange} variant="outlined"/>
      </Grid>
    </Box>
  );
}

export default MainComponent;
