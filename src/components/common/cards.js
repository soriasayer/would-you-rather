import React from 'react'
import { Row, Col, Card } from 'antd';

function cards ({ headStyle, title, children} ) {
    return(
        <Row>
            <Col xs={{ span: 22, offset: 1}} md={{ span: 16, offset: 4 }} >
                <Card headStyle={headStyle} title={title} bordered={true}>
                    {children}
                </Card>
            </Col>
        </Row>
    )
}

export default cards