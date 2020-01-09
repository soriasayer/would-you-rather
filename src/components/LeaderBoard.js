import React, { Component, Fragment } from 'react'
import { Row, Col, Card, Avatar, Divider } from 'antd';
import Cards from './common/cards'
import { connect } from 'react-redux'

class LeaderBoard extends Component{
    render() {
        const { users } = this.props
        return(
            <Fragment>
                {Object.keys(users).map(user => (
                    <div style={{marginBottom: '20px'}} key={users[user].id}>
                        <Cards>
                            <Row gutter={16} type='flex' justify='center'>
                                <Col sm={6} sx={24} >
                                    <div className=" avatarContainer">
                                        <Avatar className="avatarStyle" size={130} icon="user" src={users[user].avatarURL} />
                                    </div>
                                </Col>
                                <Col sm={1} >
                                    <div className="divider">
                                        <Divider type="vertical" style={{height: '100%'}} />
                                    </div>
                                </Col>
                                <Col sm={11} sx={16} >
                                    <h2>{users[user].name}</h2>
                                    <div className="answered">
                                        <p>Answered questions</p>
                                        <div>{Object.keys(users[user].answers).length}</div>
                                    </div>
                                    <Divider type='horizontal'/>
                                    <div className="answered">
                                        <p>Created questions</p>
                                        <div>{users[user].questions.length}</div>
                                    </div>
                                </Col>
                                <Col sm={1} >
                                    <Divider type="vertical" style={{height: '100%'}} />
                                </Col>
                                <Col sm={5} sx={8} >
                                    <div className='scorContainer'>
                                        <Card headStyle={{backgroundColor: '#ECECEC'}} bodyStyle={{display: 'flex', justifyContent: 'center', width: 185}} title="Score" bordered={true}>
                                            <div className="scoreStyle">
                                                {(Object.keys(users[user].answers).length + (users[user].questions.length))}
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
    
    return {
        users
    }
}

export default connect(mapStateToProps)(LeaderBoard)

