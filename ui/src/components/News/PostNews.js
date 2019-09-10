import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { Button, Comment, Form, Header, Input} from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import './PostNews.css'
import {getEmailAddress} from "../../services/Auth";


class PostNews extends React.Component {
    
    state = {
        author: '',
        text: '',
        subject: '',
    };

    handleSubmit(event) {
        event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/news',
                data: {
                    author: this.state.author,
                    text: this.state.text,
                    subject: this.state.subject
                }
            })
    }

    componentDidMount() {
        this.setAuthorName();
    }

    setAuthorName() {
        const emailAddress = getEmailAddress();
        axios.get('http://localhost:4000/user', {
            params: {
                email: emailAddress
            }
        })
            .then(res => {
                const name = res.data.firstName + ' ' + res.data.lastName;
                this.setState({ author: name })
            })
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };
    
    render(){
    return(
        <React.Fragment postnewsdiv>
    <Navbar />
        <Header as='h3'>
        Post News!
        </Header>
        
        <Form>
        <Form.Input                        
            label="Subject"
            placeholder="Subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleOnChange}
        />
        <Form.Input                    
            label="Text"
            placeholder="Text"
            name="text"
            value={this.state.text}
            onChange={this.handleOnChange}
        />
        <Button onClick={this.handleSubmit} content='Post News' labelPosition='left' icon='edit' primary />
        </Form>
    </React.Fragment>
    )
    }
}
export default PostNews;