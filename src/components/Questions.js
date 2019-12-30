import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Typography, Button, Divider } from 'antd';

const { Title } = Typography;

class Questions extends Component {
    render(){
        return(
            <Row>
                <Col xs={{ span: 22, offset: 1}} md={{ span: 24, offset: 0 }} >
                    <Card title="Soria asks:" headStyle={{backgroundColor: '#ECECEC'}} bordered={true}>
                        <Row gutter={16} type='flex' justify='center'>
                            <Col sm={8} sx={24} >
                                <div className="avatarContainer">
                                    <Avatar className="avatarStyle" size={150} icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg'/>
                                </div>
                            </Col>
                            <Col sm={1} >
                                <div className="divider">
                                    <Divider type="vertical" style={{height: '100%'}} />
                                </div>
                            </Col>
                            <Col sm={15} sx={24} >
                            <div className="detailContainer">
                            <Title level={3}>Would You Rater...</Title>
                                 <p>Question</p>
                                <Button type="primary" block ghost>
                                    View Poll
                                </Button>
                            </div>
                                
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Questions