import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(to left, #Edefee, #C9c9c9);',
    minWidth: 275,
    minHeight: 160,
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