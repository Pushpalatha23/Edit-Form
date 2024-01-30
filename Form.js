import React, { useState } from 'react';
import { Button, Col, Form, Input, Row, Space,Select, DatePicker, Descriptions } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';


const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 16, offset: 8 },
  },
};
const App = () => {
  const [form] = Form.useForm();
  const [students, setStudents] = useState(['Student1']); // Initial student option

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  const onReset = () => {
    form.resetFields();
    setStudents(['Student1']);
  };

  const onRefresh = () => {
    form.refreshFields();
    setStudents(['Student1']);
  };

 
  return (
    <Row justify="Start" align="middle" style={{ minHeight: '100%'}}>
      <Col  xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          scrollToFirstError
          style={{ width: '100%' }}
    
        >
          <Descriptions column={3} bordered={true} style={{ border: '1px solid white',backgroundColor: 'white' }}>

            <Descriptions.Item label="ID"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="ID"
                rules={[
                  {
                    type: 'Number',
                    message: 'Please select ID NUMBER',
                    required:"true",
                    responsive: ['sm'],
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Name" style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="Name"
                rules={[
                  {
                    type: 'text',
                    message: 'Please input your Name!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Grade Number"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="Gradenumber"
                rules={[
                  {
                  
                    message: 'Please input your Gradenumber!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Descriptions.Item>
            <Descriptions.Item label="School Name"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="schoolName"
                rules={[
                  {
                    type: 'text',
                    message: 'Please select your Branch',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Board Type"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="boardType"
                rules={[
                  {
                    type: 'text',
                    message: 'Please select your Branch',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Status"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="status"
                rules={[
                  {
                    type: 'text',
                    message: 'Enter Your Status!',
                  },
                ]}
              >
                <Select placeholder="select Status">
                  <Option value="male">Active</Option>
                  <Option value="female">Inactive</Option>
                  <Option value="other">Pending</Option>
                </Select>
              </Form.Item>
            </Descriptions.Item >

            <Descriptions.Item label="Previous Score"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="previousScore"
                rules={[
                  {
              
                    message: 'Enter Your Previous Status!',
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Joining Date"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="joiningDate"
                rules={[
                  {
                    type: 'date',
                    message: 'Joining Date!',
                  },
                ]}
              >
                <DatePicker/>
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Amount"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="amount"
                rules={[
                  {
                  
                    message: 'Enter Amount!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Duration" style={{ border: '1px solid white', backgroundColor: 'white' }}>
  <Form.Item
    name="duration"
    rules={[
      {
       
        message: 'Please enter a valid number for Duration',
      },
    ]}
  >
    <Input  />
  </Form.Item>
</Descriptions.Item>


            <Descriptions.Item label="Guardian Name"style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="guardian Name"
                rules={[
                  {
                    type: 'text',
                    message: 'Please Guardian your Name!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Descriptions.Item>

            <Descriptions.Item label="Guardian Ph No."style={{ border: '1px solid white', backgroundColor: 'white' }}>
              <Form.Item
                name="guardian Ph No."
                rules={[
                  {

                    message: 'Please input your Guardian number!',
                  },
                ]}
              >
                <Input/>
              </Form.Item>
            </Descriptions.Item>
            </Descriptions>

<Form.Item {...tailFormItemLayout} style={{justify:"space-between" ,textAlign: 'Start' ,padding:"20px"}}>
            <Space>
            <Button type="primary" icon={<ReloadOutlined />} htmlType="button" onClick={onRefresh}>
                Refresh
              </Button>
              <Button type="primary" htmlType="button" onClick={onReset}>
                Reset
              </Button>
              <Button type="primary" htmlType="submit" onClick={onsubmit}style={{marginRight:"100px"}}>
                Submit
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default App;





