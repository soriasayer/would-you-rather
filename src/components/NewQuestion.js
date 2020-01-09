import React, { Component } from 'react'
import { Row, Col, Form, Input, Button, Typography } from 'antd';
import Cards from './common/cards'
const { Title } = Typography;

class NewQuestion extends Component {
    state = {
        optionOne: '',
        optionTwo: ''
    }

    handleOptionOneChange = (e) => {
        this.setState({optionOne: e.target.value})
    }

    handleOptionTwoChange = (e) => {
        this.setState({optionTwo: e.target.value})
    }



    handelSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.optionOne)
        console.log(this.state.optionTwo)
    }

    render() {
        const { optionOne, optionTwo } = this.state
        return(
            <Cards title="Create New Question" headStyle={{backgroundColor: '#ECECEC', textAlign: "center"}}>
                <Row gutter={24} type='flex' justify='center' >
                    <Col md={24} >
                    <p>Complete the question:</p>
                    <Title level={4}>Would You Rater...</Title>
                    <Form onSubmit={this.handelSubmit}>
                        <Form.Item>
                            <Input placeholder="Enter option one"
                                onChange={this.handleOptionOneChange}
                            />
                            <Title style={{textAlign: "center", fontSize: 14}} level={4}>OR</Title>
                            <Input placeholder="Entr option two" 
                                onChange={this.handleOptionTwoChange}
                            />
                            <Button /*disabled={optionOne && optionTwo === ''*/ type="primary" htmlType="submit" block>
                                Submit
                            </Button>
                        </Form.Item> 
                    </Form>
                    </Col>
                </Row>
            </Cards>
        )
    }
}

export default NewQuestion

