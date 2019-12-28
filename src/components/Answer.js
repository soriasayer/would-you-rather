import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Typography, Radio, Button } from 'antd';

const { Title } = Typography;

class Answer extends Component {
    render() {
        return(
            <Row>
                <Col xs={24} md={{ span: 12, offset: 6 }} >
                    <Card headStyle={{backgroundColor: '#ECECEC'}} title="Soria asks:" bordered={true}>
                        <Row gutter={16} type='flex' align='middle'>
                            <Col sm={8} sx={24} >
                                <Avatar size={100} icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg'/>
                            </Col>
                            <Col className='borderLeft' sm={16} sx={24} >
                                <Title level={3}>Would You Rater...</Title>
                                <Radio.Group style={{paddingBottom: '15px'}}>
                                    <div>
                                        <Radio value='optionOne'>
                                            a
                                        </Radio>
                                    </div>
                                    <div>
                                        <Radio value='optionTwo'>
                                           b
                                        </Radio>
                                    </div>
                                </Radio.Group>
                                <Button type="primary" block>
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default Answer


