import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardDetails from './/..//CardDetails/'
import { ICard } from '../../helpers/type'

import { useStyles } from './styles'
import './Card.css'

interface CardProps {
  book: ICard,
};

export const SimpleCard: React.FC<CardProps> = ({ book }) => {
  const classes = useStyles();

  return (
    <Switch>
      <Route path="/" exact>
      <Link to={`/info${book.name}`} className="link">
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {book.name}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {book.authors}
            </Typography>
            <Typography variant="body2" component="p">
              {book.numberOfPages} pages
            </Typography>
          </CardContent>
        </Card>
      </Link>
      </Route>
      <Route path={`/info${book.name}`}>
        <CardDetails book={book}/>
      </Route>
    </Switch>
  );
}