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
			<Row>
				<Col span={10}>
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
						<div className="logo" style={{ textAlign: 'center', margin: '10px'}}>
							Would You Rather?
						</div>
						<LeftMenu />
					</Drawer>
				</Col>
				<Col span={14}>
					<RightMenu />
				</Col>
			</Row>
		);
	}
}

export default MobileNav