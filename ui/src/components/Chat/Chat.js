import React from 'react';
import { Container, Button, Comment, Form, Header } from 'semantic-ui-react';
import './Chat.css'
import Navbar from "../Navbar/Navbar";

export const Chat = () => {
  return (
      <div>
          <Navbar />
          <Container>
              <Comment.Group className="container-transparent">
                  <Header as='h3' dividing>
                      All chat
                  </Header>

                  <Comment>
                      <Comment.Content>
                          <Comment.Author as='a'>Matt</Comment.Author>
                          <Comment.Metadata>
                              <div>Today at 5:42PM</div>
                          </Comment.Metadata>
                          <Comment.Text>How artistic!</Comment.Text>
                      </Comment.Content>
                  </Comment>

                  <Form reply>
                      <Form.TextArea />
                      <Button content='Send' labelPosition='left' icon='edit' primary />
                  </Form>
              </Comment.Group>
          </Container>
      </div>
  );
};
