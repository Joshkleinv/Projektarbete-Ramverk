import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import './PostNews.css'


export const PostNews = () => {
    return(
        <div className="postnewsdiv" >
        <React.Fragment>
    <Navbar />
    <Comment.Group>
        <Header as='h3'>
        Post News!
        </Header>

        <Form postnews>
        <Form.TextArea />
        <Button content='Post News' labelPosition='left' icon='edit' primary />
        </Form>
    </Comment.Group>
    </React.Fragment>
    </div>
    )
}
