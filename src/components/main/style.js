import {makeStyles} from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
