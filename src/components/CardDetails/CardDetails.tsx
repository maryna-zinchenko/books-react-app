import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ICard } from '../../helpers/type'
import { useStyles } from './styles';
import PovCharacters from '.././PovCharacters'

type DetailsProps = {
  book: ICard,
};

export const CardDetails: React.FC<DetailsProps> = ({ book }) => {
  const classes = useStyles();
  const [ isListVisible, setIsListVisible] = useState(false)
  const chars = book.povCharacters;

  const handleClick = () => {
    setIsListVisible(! isListVisible)
  }
 
  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {book.country}
            <br></br>
            {book.numberOfPages} pages
          </Typography>
          <Typography variant="h5" component="h2">
            {book.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {book.authors}
          </Typography>
          <Typography variant="body2" component="p">
            Publisher: {book.publisher}
            <br></br>
            Mediatype: {book.mediaType}
          </Typography>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            released :{book.released.slice(0, 10)}
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
            size="small"
            onClick={handleClick}
          >
            Show characters
          </Button>
        </CardActions>
        <div>
          { isListVisible && chars.map((url: string) => <PovCharacters url={url}/>)}
        </div>
      </Card>
      <Link to="/" className="link_home">
        <Button size="small">Back to all books</Button>
      </Link>
    </>
  );
}
