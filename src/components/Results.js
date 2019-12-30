import React, { Component } from 'react'
import { Row, Col, Typography, Avatar, Progress,Divider } from 'antd';
import Cards from './common/cards'

const { Title } = Typography;

class Results extends Component {
    render() {
        return(
            <Cards title="Asked by tylermcginnis" headStyle={{backgroundColor: '#ECECEC'}}>
                <Row gutter={16} type='flex' justify='center' >
                    <Col sm={7} sx={24} >
                        <div className="avatarContainer">
                            <Avatar className="avatarStyle" size={140} icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg'/>
                        </div>
                    </Col>
                    <Col sm={1} >
                        <div className="divider">
                            <Divider type="vertical" style={{height: '100%'}} />
                        </div>
                    </Col>
                    <Col className='borderLeft' sm={16} sx={24} >
                    <div className="detailContainer">
                        <Title level={4}>Results:</Title>
                            <div className="container pasiveContainer" style={{marginBottom: '10px'}}>
                                <p>Would you rather be a front-end developer?</p>
                                <Progress
                                    strokeColor={{
                                        '0%': '#fa8c16',
                                        '100%': '#ffd591',
                                    }}
                                    percent={80}
                                    status="normal"
                                />
                            </div>
                            <div className="container activeContainer " >
                                <p>Would you rather be a back-end developer?</p>
                                <Progress
                                    strokeColor={{
                                        '0%': '#fa8c16',
                                        '100%': '#ffd591',
                                    }}
                                    percent={100}
                                    status="success"
                                />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

export default Results

/*<Card style={{backgroundColor: 'rgba(250, 140, 22, 0.05)', color: 'transparent'}}></Card>*/