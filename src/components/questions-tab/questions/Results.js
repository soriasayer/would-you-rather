import React, { Component } from 'react'
import { Row, Col, Typography, Avatar, Progress,Divider } from 'antd';
import Cards from '../../common/cards'
import { connect } from 'react-redux';

const { Title } = Typography;

class Results extends Component {
    render() {
        const { question, user, isOptionOne, isOptionTwo } = this.props
    
        const optionOne = question.optionOne.votes.length
        const optionTwo = question.optionTwo.votes.length
        
        return(
            <Cards title={`Asked by ${user.name}`}headStyle={{backgroundColor: '#ECECEC'}}>
                <Row gutter={16} type='flex' justify='center' >
                    <Col sm={7} span={24} >
                        <div className="avatarContainer">
                            <Avatar className="avatarStyle" size={160} icon="user" src={user.avatarURL} />
                        </div>
                    </Col>
                    <Col span={1} >
                        <span className="divider">
                            <Divider type="vertical" style={{height: '100%'}} />
                        </span>
                    </Col>
                    <Col className='borderLeft' sm={16} span={24} >
                        <div className="detailContainer">
                            <Title level={4}>Results:</Title>
                            <div className={`container ${isOptionOne ? "activeContainer" : "pasiveContainer" }`}
                                style={{marginBottom: '10px'}}>
                                <span className={isOptionOne ? "notify-badge" : "" }>Your vote</span>
                                    <p>{`Would you rather ${question.optionOne.text}?`}</p>
                                    <Progress
                                        strokeColor={{
                                            from: '#fa8c16',
                                            to: '#ffd591',
                                        }}
                                    percent={Math.round((optionOne/3) * 100)}
                                    status="normal"
                                />
                                <p className="resultP">{`${optionOne} out of 3`}</p>
                            </div>
                            <div className={`container ${isOptionTwo ? "activeContainer" : "pasiveContainer" }`}>
                                <span className={isOptionTwo ? "notify-badge" : "" }>Your vote</span>
                                <p>{`Would you rather ${question.optionTwo.text}?`}</p>
                                <Progress
                                    strokeColor={{
                                        from: '#fa8c16',
                                        to: '#ffd591',
                                    }}
                                    percent={Math.round((optionTwo/3) * 100)} 
                                    status="normal"
                                />
                                <p className="resultP">{`${optionTwo} out of 3`}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    const isOptionOne = question.optionOne.votes.filter(userID => userID === users[authedUser].id)
    const isOptionTwo = question.optionTwo.votes.filter(userID => userID === users[authedUser].id)

    return {
        question,
        user,
        isOptionOne: !!isOptionOne.length,
        isOptionTwo: !!isOptionTwo.length
    }
}

export default connect(mapStateToProps)(Results)

