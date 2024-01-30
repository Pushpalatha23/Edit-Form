import React from 'react';
import { Row, Col, Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

const TitleBar = ({ onBack, title }) => {
  return (
    <Row justify="space-between" align="middle" style={{ padding: '10px', borderBottom: '1px solid #f0f0f0' }}>
      <Col span={4}>
        <Button type="primary" icon={<ArrowLeftOutlined />} onClick={onBack}>
        
        </Button>
      </Col>
      <Col span={18}>TITLE</Col>
    </Row>
  );
};

export default TitleBar;
