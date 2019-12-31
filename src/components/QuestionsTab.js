import React, { Component } from 'react'
import { Row, Col, Tabs} from 'antd';
import Questions from './Questions';

const { TabPane } = Tabs;

class QuestionsTab extends Component {
    render() {
        return(
            <Row>
                <Col xs={{ span: 22, offset: 1}} lg={{ span: 20, offset: 2 }}>
                    <Tabs tabBarStyle={{display: 'flex', justifyContent: 'center'}} type="card">
                        <TabPane tab="Unanswered Questions" key="1">
                            <Questions />
                        </TabPane>
                        <TabPane tab="Answered Questions" key="2">
                            <Questions />
                        </TabPane>
                    </Tabs> 
                </Col>
            </Row>
            
        )
    }
}

export default QuestionsTab



