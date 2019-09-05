import React from 'react';
import io from "socket.io-client";
import axios from 'axios';
import {Button, Comment, Container, Form, Header, Input} from 'semantic-ui-react';
import './Chat.css'
import Navbar from "../Navbar/Navbar";
import { getEmailAddress } from "../../services/Auth";

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            name: '',
            message: '',
            messages: []
        };

        this.sendMessage = event => {
            event.preventDefault();
            this.socket.emit('SEND_MESSAGE', {
                author: 'hardCodedUseName',
                message: this.state.message,
                date: convertDate()
            });
            this.setState({message: ''})
        };

        const addMessage = (data) => {
            this.setState({ messages: [...this.state.messages, data]});
        };

        const convertDate = () => {
            let current_datetime = new Date();
            return current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes() + ":" + current_datetime.getSeconds();
        };

        this.socket = io('localhost:4000');
        this.socket.on('RECEIVE_MESSAGE', (data) => {
            addMessage(data);
        });
    }

    componentDidMount() {

    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Container>
                    <Comment.Group className="container-transparent">
                        <Header as='h3' dividing>
                            All chat
                        </Header>
                    <div>
                        {this.state.messages.map(message => {
                            return (
                                <Comment key={message.date}>
                                    <Comment.Content>
                                        <Comment.Author as='a'>{message.author}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{message.date}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>{message.message}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            )
                        })}
                    </div>
                        <Form reply>
                            <Input
                                placeholder='Message'
                                onChange={event => this.setState({message: event.target.value})}
                                value={this.state.message}
                            />
                            <Button
                                onClick={this.sendMessage}
                                content='Send'
                                primary />
                        </Form>
                    </Comment.Group>
                </Container>
            </React.Fragment>
        );
    }
}

export default Chat;
