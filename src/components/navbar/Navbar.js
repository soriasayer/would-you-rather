import React, { Component } from 'react'
import {Row, Col, Button, Layout, Drawer, Icon} from 'antd';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';


const { Header } = Layout;

class Navbar extends Component {
    state = { visible: false };

    showDrawer = () => {
      this.setState({
        visible: true,
      });
    };
  
    onClose = () => {
      this.setState({
        visible: false,
      });
    };

    render() {
        return(
            <Header className="header"  style={{marginBottom: '20px', padding: 0 }}>
                <Row>
                    <Col xs={{ span: 22, offset: 1}} lg={{ span: 20, offset: 2 }}>
                        <Row gutter={16}>
                        <div className="leftMenu">
                            <LeftMenu />
                        </div>
                        <div className="rightMenu">
                            <RightMenu />
                        </div>

                        <Button type="primary" onClick={this.showDrawer} style={{ marginBottom: 16 }}>
                            <Icon type="menu-unfold" />
                        </Button>
                        <Drawer 
                            title="Basic Drawer"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                        <LeftMenu />
                        <RightMenu />
                        </Drawer>
                        </Row>
                    </Col>
                </Row>
            </Header>
        )
    }
}

export default Navbar

{/*<div>
<div>Hello, Tyler McGinnis</div>
<Button style={{ marginTop: '10px' }} size='small' type="primary" shape="round" >
    Log in
</Button>
</div>
);*/}