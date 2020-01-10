import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Avatar, Divider } from 'antd';
import Cards from './common/cards'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
    render() {
        const { users } = this.props
        console.log(users)
        return(
            <Fragment>
                {users.map(user => (
                    <div style={{marginBottom: '20px'}} key={user.id}>
                        <Cards>
                            <Row gutter={16} type='flex' justify='center'>
                                <Col sm={6} sx={24} >
                                    <div className=" avatarContainer">
                                        <Avatar className="avatarStyle" size={130} icon="user" src={user.avatarURL} />
                                    </div>
                                </Col>
                                <Col sm={1} >
                                    <div className="divider">
                                        <Divider type="vertical" style={{height: '100%'}} />
                                    </div>
                                </Col>
                                <Col sm={11} sx={16} >
                                    <h2>{user.name}</h2>
                                    <div className="answered">
                                        <p>Answered questions</p>
                                        <div>{Object.keys(user.answers).length}</div>
                                    </div>
                                    <Divider type='horizontal'/>
                                    <div className="answered">
                                        <p>Created questions</p>
                                        <div>{user.questions.length}</div>
                                    </div>
                                </Col>
                                <Col sm={1} >
                                    <Divider type="vertical" style={{height: '100%'}} />
                                </Col>
                                <Col sm={5} sx={8} >
                                    <div className='scorContainer'>
                                        <Card headStyle={{backgroundColor: '#ECECEC'}} bodyStyle={{display: 'flex', justifyContent: 'center', width: 185}} title="Score" bordered={true}>
                                            <div className="scoreStyle">
                                                {(Object.keys(user.answers).length + (user.questions.length))}
                                            </div>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>
                        </Cards>
                    </div>
                   
                ))}
            </Fragment>
        )
    }
}

function mapStateToProps({users}) {

    function sortedUser() {
        const sortedUsers = Object.keys(users).sort((a,b) => 
        Object.keys(users[b].answers).length - Object.keys(users[a].answers)
        .length)

       return sortedUsers.sort((a,b) => users[b].questions.length - users[a].questions.length)
       .map(sortedUser => users[sortedUser])
      
    }
    
    return {
        users: sortedUser()
    }
}

export default connect(mapStateToProps)(LeaderBoard)

