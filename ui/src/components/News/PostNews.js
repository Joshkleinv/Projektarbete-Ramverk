import React from 'react'
import axios from 'axios';
import { Button, Form, Header, Container } from 'semantic-ui-react'
import Navbar from '../Navbar/Navbar'
import './PostNews.css'
import { getEmailAddress } from "../../services/Auth";

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
                    subject: this.state.subject,
                    date: this.convertDate()
                }
            }).catch((err) => {
                console.log
            })
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    componentDidMount() {
        this.setAuthorName();
    }

    setAuthorName = () => {
        const emailAddress = getEmailAddress();
        axios.get('http://localhost:4000/user', {
            params: {
                email: emailAddress
            }
        }).then(res => {
            const name = res.data.firstName + ' ' + res.data.lastName;
            this.setState({ author: name })
        })
    }

    convertDate = () => {
        let current_datetime = new Date();
        return current_datetime.getFullYear()
            + "-" + (current_datetime.getMonth() + 1)
            + "-" + current_datetime.getDate()
            + " " + current_datetime.getHours()
            + ":" + current_datetime.getMinutes()
            + ":" + current_datetime.getSeconds()
            + ":" + current_datetime.getMilliseconds();
    };
    
    render(){
        return(
            <React.Fragment>
                <Navbar />
                <Container className="container-transparent">
                <Header as='h2'>
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
                    <Form.TextArea                    
                        label="Text"
                        placeholder="News text"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    />
                    <Button onClick={this.handleSubmit} content='Post News' primary />
                </Form>
                </Container>
            </React.Fragment>
        )
    }
}
export default PostNews;