import React, { Component } from 'react'
import { Row, Col, Avatar, Typography, Radio, Button, Divider } from 'antd';
import Cards from './common/cards'

const { Title } = Typography;

class Answer extends Component {
    render() {
        return(
            <Cards title="Soria asks:" headStyle={{backgroundColor: '#ECECEC'}}>
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
                            <Radio.Group style={{paddingBottom: '15px'}}>
                                <div>
                                    <Radio value='optionOne'>
                                        be a front-end developer
                                    </Radio>
                                </div>
                                <div>
                                    <Radio value='optionTwo'>
                                        be a back-end developer
                                    </Radio>
                                </div>
                            </Radio.Group>
                            <Button type="primary" block>
                                Submit
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

export default Answer


