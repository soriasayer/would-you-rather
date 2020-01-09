import React, { Component } from 'react'
import './nav.css'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Row, Col, Button, Drawer, Icon } from 'antd'

class MobileNav extends Component {
	state = {
		visible: false
	}
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
		return (
			<Row type="flex" align="middle">
				<Col xs={{ span: 4, offset: 1 }} >
					<Button type="primary" onClick={this.showDrawer} className="showInMobile">
						<Icon type="menu-unfold" />
					</Button>
					<Drawer
						placement="left"
						drawerStyle={{ backgroundColor: '#001428' }}
						bodyStyle={{ padding: '0px' }}
						closable={false}
						onClose={this.onClose}
						visible={this.state.visible}
					>
						<LeftMenu />
					</Drawer>
				</Col>
				<Col xs={{ span: 15 }}>
					<div className="logo" style={{ textAlign: 'center' }}>Would You Rather?</div>
				</Col>
				<Col xs={{ span: 3 }}>
					<RightMenu />
				</Col>
			</Row>
		);
	}
}

export default MobileNav