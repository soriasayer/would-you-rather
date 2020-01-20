import React, { Component } from 'react';
import './nav.css'
import LeftMenu from './LeftMenu'
import RightMenu from './RightMenu'
import { Row, Col } from 'antd';

class DesktopNav extends Component {

  render() {
    return (
        <Row type="flex" justify='space-between'>
			<Col span={17} >
				<div style={{ display: 'flex' }}>
					<div className="logo" style={{ textAlign: 'left', marginRight: '8px' }}>
						Would You Rather?
					</div>
					<LeftMenu />
				</div>
			</Col>
			<Col span={7}>
				<RightMenu />
			</Col>
		</Row>
    );
  }
}

export default DesktopNav;
