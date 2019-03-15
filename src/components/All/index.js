import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {firebaseAuth} from '../../firebase';

class All extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fetched: false
    }
  }
  componentDidMount(){
    this.props.fetchAllBooks();
  }
  render() {
    const books = this.props.books || [{page_amount:1243, title:"TEST"}, {page_amount:1243, title:"TEST"}];
      return (
        <div>
          {books.map((book,i) => {
            return (
              <Card key={book.title}>
                <CardActionArea onClick={() => this.props.history.push('/book/' + book.id)}>
                  <CardMedia
                    component="img"
                    alt="asakokaos"
                    width="30"
                    height="700"
                    image={book.img}
                    title="asakokaos"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {book.title}
                    </Typography>
                    <Typography component="p">
                      {book.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color={"secondary"}>
                    <FavoriteIcon />
                  </Button>
                </CardActions>
              </Card>
            )
          })}
          <button onClick={() => {
            this.setState({test:true});
          }}>{"Open"}</button>
          <button onClick={() => {
            console.log(firebaseAuth().currentUser);
          }}>{"Open"}</button>
        </div>
      )
  }
}

export default All;
