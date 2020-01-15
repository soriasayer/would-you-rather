import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Typography, Button, Divider } from 'antd';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const { Title } = Typography;

class AnsweredQues extends Component {
    handleClick = (e, id) => {
        e.preventDefault()

        this.props.history.push(`/questions/${id}`)
    }

    render(){
        const { user, question } = this.props
       
        return(
            <Row>
                <Col span={22} offset= {1} sm={{ span: 24, offset: 0 }} >
                    <Card title={`${user.name} asks:`} headStyle={{backgroundColor: '#ECECEC'}} bordered={true}>
                        <Row gutter={16} type='flex' justify='center'>
                            <Col sm={8} span={24} >
                                <div className="avatarContainer">
                                    <Avatar className="avatarStyle" size={150} icon="user" src={user.avatarURL}/>
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
                                    <Link to={`/questions/${question.id}`}>
                                        <Button type="primary" block ghost onClick={(e) => this.handleClick(e, question.id)}>
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

function mapStateToProps({questions, users}, {id}) {
    const question = questions[id]
    const user = users[question.author]
    
    return {
       question,
       user
    }
   
}

export default withRouter(connect(mapStateToProps)(AnsweredQues))