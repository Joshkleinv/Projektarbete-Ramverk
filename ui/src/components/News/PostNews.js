import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import './PostNews.css'


class PostNews extends React.Component {
    
    state = {
        text: '',
        subject: '',
        errors: []
    };

    handleSubmit(event) {
        this.setState({ errors: [] })
        event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/news',
                data: {
                    firstName: this.state.firstName,
                    text: this.state.text,
                    subject: this.state.subject
                }
            }).then((result) => {
                if (result && result.data) {
                    this.props.history.replace('/')
                }
            }).catch((err) => {
                err.response.data.errors.forEach(error => {
                    this.setState({ errors: [...this.state.errors, error]})
                });
                console.log(err.response.data);
            })
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };
    
    render(){
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
}
export default PostNews;