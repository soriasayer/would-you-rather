import React, { Component } from 'react'
import { Row, Col, Card, Form, Input, Button, Typography } from 'antd';
const { Title, Text } = Typography;

class NewQuestion extends Component {
    render() {
        return(
            <Row>
                <Col xs={{ span: 22, offset: 1}} md={{ span: 14, offset: 4 }} >
                    <Card headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}} title="Create New Question" bordered={true}>
                        <Row gutter={24} type='flex' justify='center' >
                            <Col md={24} >
                            <Text style={{fontSize: 14}}>Complete the question:</Text>
                            <Title level={4}>Would You Rater...</Title>
                                <Form.Item >
                                    <Input placeholder="Enter option one" />
                                    <Title style={{textAlign: "center", fontSize: 14}} level={4}>OR</Title>
                                    <Input placeholder="Entr option two" />
                                    <Button type="primary" block>
                                        Submit
                                    </Button>
                                </Form.Item>  
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default NewQuestion