import React, { Component } from 'react'
import {Row, Col, Layout } from 'antd';
import Media from 'react-media'
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav'

const { Header } = Layout;
class Navbar extends Component {
    
    render() {
        return(
            <Header className="header"  style={{ padding: 0 }}>
                <Row>
                    <Media queries={{
                        small: "(max-width: 700px)",
                        medium: "(min-width: 600px) and (max-width: 1199px)",
                        large: "(min-width: 1200px)"
                    }}>
                        {matches => {
                            if (matches.small) {
                                return (
                                    <Col span={22} offset={1}>
                                        <MobileNav />
                                    </Col>
                                )
                            } else {
                                return (
                                    <Col span={20} offset={2}>
                                        <DesktopNav />
                                    </Col>
                                )
                            }
                        }}
                    </Media>
                </Row>
            </Header>
        )
    }
}

export default Navbar

