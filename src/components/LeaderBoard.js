import React, { Component } from 'react'
import { Row, Col, Card, Avatar, Divider } from 'antd';
import Cards from './common/cards'

class LeaderBoard extends Component{
    render() {
        return(
            <Cards>
                <Row gutter={16} type='flex' justify='center'>
                    <Col sm={6} sx={24} >
                        <div className=" avatarContainer">
                            <Avatar className="avatarStyle" size={110} icon="user" src='https://i.pinimg.com/originals/f1/a3/6a/f1a36a8bf241e6deaa66c268d22b5035.jpg'/>
                        </div>
                    </Col>
                    <Col sm={1} >
                        <div className="divider">
                            <Divider type="vertical" style={{height: '100%'}} />
                        </div>
                    </Col>
                    <Col sm={11} sx={16} >
                        <h2>Sarah Edo</h2>
                        <div className="answered">
                            <div>Answered questions</div>
                            <div>6</div>
                        </div>
                        <Divider type='horizontal'/>
                        <div className="answered">
                            <div>Created questions</div>
                            <div>4</div>
                        </div>
                    </Col>
                    <Col sm={1} >
                        <Divider type="vertical" style={{height: '100%'}} />
                    </Col>
                    <Col sm={5} sx={8}>
                        <Card headStyle={{backgroundColor: '#ECECEC'}} bodyStyle={{display: 'flex', justifyContent: 'center'}} title="Score" bordered={true}>
                            <div className="scoreStyle">
                                10
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

export default LeaderBoard