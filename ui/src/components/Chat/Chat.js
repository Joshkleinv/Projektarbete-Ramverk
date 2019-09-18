import React from 'react';
import io from "socket.io-client";
import axios from 'axios';
import { Button, Comment, Container, Form, Header, Input, Message, Divider } from 'semantic-ui-react';
import './Chat.css'
import { setAuthorName } from '../../services/Requests';
import { convertDate } from "../../services/ConvertDate";


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: '',
            name: '',
            message: '',
            messages: [],
            errors: [],
        };

        this.chatWindow = React.createRef();

        this.sendMessage = event => {
            this.setState({ errors: [] });
            event.preventDefault();
            axios({
                method: 'post',
                url: 'http://localhost:4000/messages',
                data: {
                    author: this.state.name,
                    message: this.state.message,
                    date: convertDate()
                }
            }).then(result => {
                if (result.status === 200) {
                    this.socket.emit('SEND_MESSAGE', {
                        author: this.state.name,
                        message: this.state.message,
                        date: convertDate()
                    });
                    this.setState({message: ''})
                }
            }).catch(err => {
              err.response.data.errors.forEach(error => {
                    this.setState({ errors: [...this.state.errors, error]})
                });
            });
        };

        this.socket = io('localhost:4000');
        this.socket.on('RECEIVE_MESSAGE', (data) => {
            addMessage(data);
        });

        const addMessage = (data) => {
            this.setState({ messages: [...this.state.messages, data]})
        };
    }

    componentDidMount() {
        this.getChatHistory();
        this.setNameOfAuthor();
    }

    getChatHistory() {
        axios.get('http://localhost:4000/messages')
            .then(res => {
                for (let i = 0; i < res.data.length; i++) {
                    this.setState({ messages: [...this.state.messages, res.data[i]]});
                }
            }).then(() => {
                this.scrollToBottom();
            });
    }

    setNameOfAuthor = () => {
        setAuthorName()
        .then(res => {
            const name = res.data.firstName + ' ' + res.data.lastName;
            this.setState({ name: name })
        })
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom = () => {
        this.chatWindow.current.scrollTop = this.chatWindow.current.scrollHeight;
    };

    dateToDisplay(date) {
        return date.slice(0, 15);
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Comment.Group className="container-transparent">
                        <Header as='h2'>
                            All chat
                        </Header>
                        <p>
                            A chat for all of us to gossip about the latest after work.
                        </p>
                    <Divider />
                    <div className="chatWindow" ref={this.chatWindow}>
                        {this.state.messages.map(message => {
                            return (
                                <Comment key={message.date}>
                                    <Comment.Content>
                                        <Comment.Author as='a'>{message.author}</Comment.Author>
                                        <Comment.Metadata>
                                            <div>{this.dateToDisplay(message.date)}</div>
                                        </Comment.Metadata>
                                        <Comment.Text>{message.message}</Comment.Text>
                                    </Comment.Content>
                                </Comment>
                            )
                        })}
                    </div>
                        <Form error reply>
                            <Input
                                placeholder='Message'
                                onChange={event => this.setState({message: event.target.value})}
                                value={this.state.message}
                            />
                            <Button className="ml-2"
                                onClick={this.sendMessage}
                                content='Send'
                                primary />
                            {this.state.errors.map(error => {
                            return (
                                <Message key={error.param}
                                    error
                                    header={error.msg}
                                />
                            )
                        })}
                        </Form>
                    </Comment.Group>
                </Container>
            </React.Fragment>
        );
    }
}

export default Chat;
