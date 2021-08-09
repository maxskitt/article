import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '100%',
    },
  },
 containerButton: {
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

export default useStyles;
