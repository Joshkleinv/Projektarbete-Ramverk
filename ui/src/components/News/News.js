import React from 'react';
import {Container, Feed, Header} from 'semantic-ui-react'
import Navbar from "../Navbar/Navbar";

export const News = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="container-transparent">
        <Header as="h2">Latest news!</Header>
        <Feed>
        <Feed.Event>
          <Feed.Content>
            <Feed.Summary>
              Joe Henderson posted on his page
              <Feed.Date>3 days ago</Feed.Date>
            </Feed.Summary>
            <Feed.Extra text>
              Ours is a life of constant reruns. We're always circling back to where
              we'd we started, then starting all over again. Even if we don't run
              extra laps that day, we surely will come back for more of the same
              another day soon.
            </Feed.Extra>
          </Feed.Content>
        </Feed.Event>
      </Feed>
      </Container>
  </React.Fragment>
  );
};
