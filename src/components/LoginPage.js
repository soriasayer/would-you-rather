import React, { Component } from 'react'
import { Row, Col, Select, Avatar, Button, Typography, Icon } from 'antd';
import Cards from './common/cards'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Link, Redirect } from 'react-router-dom';

const { Title } = Typography;
const { Option } = Select;

class LoginPage extends Component {
    state = {
        name: '',
        toHome: false
    }

    handleChange = (value) => {
        this.setState({ name: value})
    }  
    
    handleOnClick = () => {
        const { dispatch } = this.props
        const { name } = this.state
        dispatch(setAuthedUser(name))

        this.setState({
            toHome: true
        })
    }

    render() {
        
        const { from } = this.props.location.state || { from: { pathname: '/' }} 
        const { users } = this.props
        const { toHome } = this.state

        if(toHome === true) {
            return <Redirect to={from} />
        }

        return(
            <Cards title="Welcome to the Would You Rather App!" headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}} >
                <Row gutter={24} type='flex' justify='center' >
                    <Col span={24} >
                        <div className='imgContainer'>
                            <img alt="redux" src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" className="imgSize" />
                        </div>
                        <Title style={{fontSize: 14}} level={4}>Please login to view this page at {from.pathname}.</Title>
                        <Select 
                        placeholder="Select a User"
                        className="selectStyle" 
                        onChange={this.handleChange} >
                        {users.map(user => (
                           <Option key={user.id} value={user.id}>
                            <Avatar style={{marginRight: '5px'}} size="small" src={user.avatarURL} />
                            {user.name}
                            </Option>
                        ))}  
                        </Select>
                        <Button type="primary" htmlType="submit" 
                        className="login-form-button" block 
                        onClick={this.handleOnClick}>
                            Log in
                        </Button>
                        <div style={{marginTop: '24px'}}>
                            <p>Don't have an acount? <Link to='/sign-up'>
                                Sign Up <Icon type="arrow-right" />
                            </Link></p>
                        </div>
                        
                    </Col>
                </Row>    
            </Cards>
        )
    }
}

function mapStateToProps({users}) {
    const userObj = Object.keys(users).map(user => users[user])
    
    return{
        users: userObj,
    }
}

export default connect(mapStateToProps)(LoginPage)