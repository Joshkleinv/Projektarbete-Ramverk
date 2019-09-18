import React from 'react';
import axios from 'axios';
import { Card, Container, Header } from 'semantic-ui-react';
import './Users.css';

class Users extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        this.getUsers();
    }

    getUsers() {
        axios.get('http://localhost:4000/users')
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const user = {
                    id: res.data[i]._id,
                    email: res.data[i].emailAddress,
                    firstName: res.data[i].firstName,
                    lastName: res.data[i].lastName
                }
                this.setState({ users: [...this.state.users, user ]})
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container className="container-transparent">
                <Header as='h2'>
                    User information
                </Header>
                <p>
                    All our real users togheter with their totally legit contact information.
                </p>
                {this.state.users.map(user => {
                    return (
                        <Card key={user.email}>
                        <Card.Content>
                          <Card.Header content={user.firstName + ' ' + user.lastName} />
                          <Card.Meta content={user.email} />
                        </Card.Content>
                      </Card>
                    )
                })}
                </Container>
            </React.Fragment>
        )
    }
}

export default Users;
