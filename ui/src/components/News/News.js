import React from 'react';
import {Container, Feed, Header} from 'semantic-ui-react'
import Navbar from "../Navbar/Navbar";
import axios from 'axios';

class News extends React.Component {
 state = {
    news: []
  }
  
  componentDidMount(){
    this.getNewsHistory();
  }

  getNewsHistory() {
    axios.get('http://localhost:4000/news')
        .then(res => {
            for (let i = res.data.length -1; i >= 0; i--) {
                this.setState({ news: [...this.state.news, res.data[i]]});
            }
        })
  }

  dateToDisplay(date) {
    return date.slice(0, 14);
  }

  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Container className="container-transparent">
          <Header as="h2">Latest news!</Header>
          <Feed>
            {this.state.news.map(news =>{
              return(
              <Feed.Event key={news.date}>
              <Feed.Content>
              <Feed.Extra as="h2">{news.subject}</Feed.Extra>
                <Feed.Summary>{news.author}
                  <Feed.Date><div>{this.dateToDisplay(news.date)}</div></Feed.Date>
                </Feed.Summary>
                <Feed.Extra text>{news.text}</Feed.Extra>
              </Feed.Content>
              </Feed.Event>
              )
            })}
        </Feed>
        </Container>
    </React.Fragment>
    )
  }
};
export default News;
