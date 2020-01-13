import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Avatar, Divider, Icon } from 'antd';
import Cards from './common/cards'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
    render() {
        const { users } = this.props
    
        return(
            <Fragment>
                {users.map((user, index) => (
                    <div style={{marginBottom: '20px'}} key={user.id}>
                        <Cards>
                            {index <= 2 && <span className={`medals-container medal-${index + 1}`}>
                                <Icon theme="outlined" type="trophy" />
                            </span>}
                            <Row type='flex' justify='space-between'>
                                <Col span={24} sm={5} >
                                    <div className=" avatarContainer">
                                        <Avatar className="avatarStyle" size={130} icon="user" src={user.avatarURL} />
                                    </div>
                                </Col>

                                <span className="divider">
                                    <Divider type="vertical" style={{height: '100%'}} />
                                </span>
                                
                                <Col span={24} sm={12} >
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
                                
                                <span className="divider">
                                    <Divider type="vertical" style={{height: '100%'}} />
                                </span>
                                
                                <Col span={24} sm={5} >
                                    <Card headStyle={{backgroundColor: '#ECECEC'}} bodyStyle={{display: 'flex', justifyContent: 'center' }} style={{height: '100%'}} title="Score" bordered={true}>
                                        <div className="scoreStyle">
                                            {(Object.keys(user.answers).length + (user.questions.length))}
                                        </div>
                                    </Card>
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

