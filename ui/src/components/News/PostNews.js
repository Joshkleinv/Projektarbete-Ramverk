import React from 'react'
import axios from 'axios';
import { Button, Form, Header, Container, Message } from 'semantic-ui-react'
import './PostNews.css'
import { setAuthorName } from '../../services/Requests'
import { convertDate } from "../../services/ConvertDate";

class PostNews extends React.Component {
    state = {
        author: '',
        text: '',
        subject: '',
        postSuccess: false
    };

    handleSubmit(event) {
        this.setState({ postSuccess: false });
        event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/news',
                data: {
                    author: this.state.author,
                    text: this.state.text,
                    subject: this.state.subject,
                    date: convertDate()
                }
            }).then((result) => {
                this.onPostSuccess();
                console.log(result)
            }).catch((err) => {
                console.log(err)
            })
    }

    handleOnChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    componentDidMount() {
        this.setNameOfAuthor();    
    }

    setNameOfAuthor = () => {
        setAuthorName()
        .then(res => {
            const name = res.data.firstName + ' ' + res.data.lastName;
            this.setState({ author: name })
        })
    };

    onPostSuccess = () => {
        this.setState({ text: '' });
        this.setState({ subject: '' });
        this.setState({ postSuccess: true })
    };
    
    render(){
        return(
            <React.Fragment>
                <Container className="container-transparent">
                <Header as='h2'>
                Post News
                </Header>
                <p>
                    Please post something relevant.
                </p>
                <Form success
                    onSubmit={event => this.handleSubmit(event)}>
                    <Form.Input          
                        placeholder="Subject"
                        name="subject"
                        value={this.state.subject}
                        onChange={this.handleOnChange}
                    />
                    <Form.TextArea     
                        placeholder="News text"
                        name="text"
                        value={this.state.text}
                        onChange={this.handleOnChange}
                    />
                    <Button
                        type='submit' 
                        content='Post News' 
                        primary 
                    />
                    {this.state.postSuccess ?
                        <Message
                            success
                            header="Success!"
                            content="The news has been posted."
                        />
                        :
                    null}
                </Form>
                </Container>
            </React.Fragment>
        )
    }
}
export default PostNews;
