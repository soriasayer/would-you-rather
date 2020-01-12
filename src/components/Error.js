import React from 'react'
import { Row, Col } from 'antd';
import Cards from './common/cards'

const Error = ({ location }) => {
    return(
        <Cards>
            <Row gutter={16} type='flex' justify='center'>
            <Col sm={24} >
                <p style={{fontWeight: 'bold'}}>Whoops!</p>
                <p>404-Page not found.<code>{location.pathname}</code></p>
            </Col>
            </Row>
        </Cards>
    )
}

export default Error