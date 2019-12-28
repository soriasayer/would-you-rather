import React, { Component } from 'react'
import { Row, Col, Card, Select, Button, Typography } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

class LoginPage extends Component {
    render() {
        return(
            <div>
                <Row>
                    <Col xs={24} md={{ span: 12, offset: 6 }} >
                        <Card headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}} title="Welcome to the Would You Rather App!" bordered={true}>
                            <Row gutter={24} type='flex' justify='center' >
                                <Col md={24} >
                                    <img alt="redux" src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" className="imgSize" />
                                    <Select placeholder="Select a person" className="selectStyle" >
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="John">John</Option>
                                    </Select>
                                    <Button type="primary" block>
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LoginPage