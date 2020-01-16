import React, { Component } from 'react'
import { Row, Col, Avatar, Typography, Radio, Button, Divider } from 'antd';
import Cards from '../../common/cards'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAnswerQuestions } from '../../../actions/questions'

const { Title } = Typography

class Answer extends Component {
    state = {
        value: null
    }

    handleChange = (e) => {
        this.setState({value: e.target.value}) 
    }  
    
    handleClick = () => {
        const { dispatch, authedUser, question } = this.props
    
        dispatch(handleAnswerQuestions({
            authedUser,
            qid: question.id,
            answer: this.state.value
        })) 
    }

    render() {
        const { question, user } = this.props

        if(user === null) {
            return <Redirect to='/404' />
        }

        return(
            <Cards title={`${user.name} asks:`} headStyle={{backgroundColor: '#ECECEC'}}>
                <Row gutter={16} type='flex' justify='center'>
                    <Col sm={8} span={24} >
                        <div className="avatarContainer">
                            <Avatar className="avatarStyle" size={160} icon="user" src={user.avatarURL} />
                        </div>
                    </Col>
                    <Col span={1} >
                        <span className="divider">
                            <Divider type="vertical" style={{height: '100%'}} />
                        </span>
                    </Col>
                    <Col sm={15} span={24} >
                        <div className="detailContainer">
                            <Title level={3}>Would You Rater...</Title>
                            <Radio.Group 
                            style={{paddingBottom: '15px'}} 
                            onChange={this.handleChange}
                            value={this.state.value}>
                                <div>
                                    <Radio style={{fontSize: '20px'}}  value="optionOne">
                                       {question.optionOne.text}
                                    </Radio>
                                </div>
                                <div>
                                    <Radio style={{fontSize: '20px'}} value="optionTwo">
                                    {question.optionTwo.text}
                                    </Radio>
                                </div>
                            </Radio.Group>
                            <Button type="primary" block onClick={this.handleClick}>
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

function mapStateToProps({questions, authedUser, users}, {id}) {
    const question = questions[id]
    const user = question ? users[question.author] : null
      
    return {
        question,
        authedUser,
        user
    }
}

export default connect(mapStateToProps)(Answer)


