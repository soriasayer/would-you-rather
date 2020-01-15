import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Icon } from 'antd';
import Cards from './common/cards'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { handleAddUser } from '../actions/users'

class AddUser extends Component {
    state = {
        userId: '',
        userName: '',
        userURL: '',
        userInput: false
    }

    handleUserIdChange = (e) => {
        this.setState({userId: e.target.value.trim()})
    }

    handleUserNameChange = (e) => {
        this.setState({userName: e.target.value.trim()})
    }

    handleUserURLChange = (e) => {
        this.setState({userURL: e.target.value})
    }

    handleBlur = () => {
        const { users } = this.props
        const { userId } = this.state

        const userExists = users.filter(user => {
            return user.id === userId
        })
        console.log(userExists)
        this.setState({userInput: !!userExists.length})
    }

    handelSubmit = (e) => {
        e.preventDefault()

        const { userId, userName, userURL } = this.state
        const { dispatch } = this.props

        dispatch(handleAddUser({
            id: userId,
            name: userName,
            avatarURL: userURL
        }))
        
        this.props.history.push('/login')
    }

    isDisabled = () => {
        const { userId, userName, userInput } = this.state
    
        if((userId === '' || userName === '') || userInput)  {
            return true
        } else {
            return false 
        }
    }

    render() {
        const { userInput } = this.state
        return(
            <Cards title="Create New Acount" headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}}>
                <Row gutter={24} type='flex' justify='center' >
                    <Col span={24} >
                        <Form onSubmit={this.handelSubmit}>
                            <Form.Item label="Username" required={true}>
                                <Input placeholder="Please input your username"
                                    onChange={this.handleUserIdChange}
                                    onBlur={this.handleBlur}
                                />
                                {userInput === true 
                                    ? <p style={{color: 'red', lineHeight: '20px'}}>
                                        <Icon type="info-circle" /> The username you provided is already taken, please try another username. 
                                    </p> : '' }
                            </Form.Item>
                            <Form.Item label="Name" required={true}>
                                <Input placeholder="Please input your name"
                                    onChange={this.handleUserNameChange}
                                />
                            </Form.Item >
                            <Form.Item label="URL">
                                <Input placeholder="Please input your profile picture" 
                                    onChange={this.handleUserURLChange}
                                />
                                <Button disabled={this.isDisabled() } type="primary" htmlType="submit" block>
                                    Sign Up
                                </Button>
                            </Form.Item> 
                        </Form>
                        <p>Have already an acount? <Link to='/login'>
                            Login here <Icon type="arrow-right" />
                        </Link></p>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

function mapStateToProps({ users }) {
    const userObject = Object.keys(users).map(user => users[user])
    
    return{
        users: userObject,
    }
}

export default withRouter(connect(mapStateToProps)(AddUser))

