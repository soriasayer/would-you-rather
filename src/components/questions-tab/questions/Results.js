import React, { Component } from 'react'
import { Row, Col, Typography, Avatar, Progress,Divider } from 'antd';
import Cards from '../../common/cards'
import { connect } from 'react-redux';

const { Title } = Typography;

class Results extends Component {
    render() {
        const { question, user } = this.props
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
                            <div className={`container ${optionOne === 3 ? "activeContainer" : "pasiveContainer" }`}
                                style={{marginBottom: '10px'}}>
                                <span className={optionOne === 3 ? "notify-badge" : "" }>Your vote</span>
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
                            <div className={`container ${optionTwo === 3 ? "activeContainer" : "pasiveContainer" }`}>
                                <span className={optionTwo === 3 ? "notify-badge" : "" }>Your vote</span>
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

function mapStateToProps({questions, users}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    
    return {
        question,
        user
    }
}

export default connect(mapStateToProps)(Results)

