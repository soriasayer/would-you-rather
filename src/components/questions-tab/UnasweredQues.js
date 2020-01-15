import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, Avatar, Typography, Button, Divider, Icon, Modal } from 'antd';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import { handleDeleteQuestion } from '../../actions/questions'


const { Title } = Typography;

class UnansweredQues extends Component {
    state = { visible: false };

    showModal = () => {
        this.setState({visible: true})
    }

    handleCancel = e => {
        this.setState({visible: false})
    }

    handleClick = (e, id) => {
        e.preventDefault()

        this.props.history.push(`/questions/${id}`)
    }

    handleRemoveButton = () => {
        const { question, dispatch } = this.props
        
        dispatch(handleDeleteQuestion({
            authedUser: question.author,
            removedQuestion: question
        }))
    }

    render(){
        const { user, question, userQuestions } = this.props
        const isMyQuestions = userQuestions.filter(userQuestion => userQuestion === question.id)
        
        return(
            <Row>
                <Col  span={22} offset= {1} sm={{ span: 24, offset: 0 }} >
                    <Card title={`${user.name} asks:`} headStyle={{backgroundColor: '#ECECEC'}} bordered={true} >
                    {!!isMyQuestions.length && <Icon type="close-circle" className="close-btn" onClick={this.showModal} /> }
                        <Modal
                            title="Please confirm!"
                            visible={this.state.visible}
                            onOk={this.handleRemoveButton}
                            onCancel={this.handleCancel}
                        >
                            <p>This question will be permanently deleted.</p>
                        </Modal>
                        <Row gutter={16} type='flex' justify='center'>
                            <Col sm={8} span={24} >
                                <div className="avatarContainer">
                                    <Avatar className="avatarStyle" size={150} icon="user" src={user.avatarURL} />
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
                                    <p style={{fontSize: '20px'}} >
                                    {`...${(question.optionOne.text).substring(0, 15)}...`}
                                    </p>
                                    <Link to={`/questions/${question.id}`} >
                                        <Button type="primary" block ghost onClick={(e) => this.handleClick(e,question.id)} >
                                            View Poll
                                        </Button>
                                    </Link> 
                                </div>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

function mapStateToProps({questions, users, authedUser}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    const userQuestions = users[authedUser].questions
    
    return {
        question,
        user,
        userQuestions,
    }
   
}

export default withRouter(connect(mapStateToProps)(UnansweredQues))