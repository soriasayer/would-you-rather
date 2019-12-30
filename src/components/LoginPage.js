import React, { Component } from 'react'
import { Row, Col, Select, Button, Typography } from 'antd';
import Cards from './common/cards'

const { Title } = Typography;
const { Option } = Select;

class LoginPage extends Component {
    render() {
        return(
            <Cards title="Welcome to the Would You Rather App!" headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}} >
                <Row gutter={24} type='flex' justify='center' >
                    <Col sm={24} >
                        <div className='imgContainer'>
                            <img alt="redux" src="https://www.clker.com/cliparts/N/0/4/q/4/R/react-redux.svg" className="imgSize" />
                        </div>
                        <Title style={{fontSize: 14}} level={4}>Please login to continue...</Title>
                        <Select placeholder="Select a person" className="selectStyle" >
                            <Option value="sarahedo">Sarah Edo</Option>
                            <Option value="tylermcginnis">Tyler McGinnis</Option>
                            <Option value="johndoe">John Doe</Option>
                        </Select>
                        <Button type="primary" htmlType="submit" className="login-form-button" block>
                            Log in
                        </Button>
                    </Col>
                </Row>    
            </Cards>
        )
    }
}

export default LoginPage