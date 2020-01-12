import React, { Component } from 'react'
import { Row, Col, Tabs} from 'antd';
import './style.css'
import { connect } from 'react-redux'
import UnansweredQues from './UnasweredQues'
import AnsweredQues from './AnsweredQues'


const { TabPane } = Tabs;

class QuestionsTab extends Component {
    render() {
        const { unansweredQuestions, answeredQuestions } = this.props
        return(
            <Row style={{marginTop: '20px'}}>
                <Col xs={{ span: 22, offset: 1}} lg={{ span: 20, offset: 2 }}>
                    <Tabs tabBarStyle={{display: 'flex', justifyContent: 'center'}} type="card">
                        <TabPane tab="Unanswered Questions" key="1" >
                        {unansweredQuestions.map(id => (
                            <div key={id} style={{marginBottom: '15px'}} >
                                <UnansweredQues id={id} />
                            </div>
                        ))}
                        </TabPane>
                        <TabPane tab="Answered Questions" key="2" >
                        {answeredQuestions.map(id => (
                            <div key={id} style={{marginBottom: '15px'}} >
                                <AnsweredQues id={id} />
                            </div>
                        ))}
                        </TabPane>
                    </Tabs> 
                </Col>
            </Row>
        )
    }
}

function mapStateToProps({ questions, users, authedUser }) {
    const answeredQuestions = Object.keys(users[authedUser].answers)
    const questionsId = Object.keys(questions)

       const unansweredQuestions = questionsId.filter(question => {
           const answers = answeredQuestions.filter(answer => {
                return question === answer
           })
           return !answers.length
       })
    return{
        unansweredQuestions: unansweredQuestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
        answeredQuestions: answeredQuestions.sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(QuestionsTab)





