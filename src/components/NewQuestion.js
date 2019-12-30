import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import Cards from './common/cards'
const { Title, Text } = Typography;

class NewQuestion extends Component {
    render() {
        return(
            <Cards title="Create New Question" headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}}>
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
            </Cards>
        )
    }
}

export default NewQuestion

