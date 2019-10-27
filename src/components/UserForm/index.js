  
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './styles.css';
import UserTable from '../UserTable';
import {
    Form,
    Input,
    Button,
  } from 'antd';
  import { userRegisterAction } from '../../redux/action';
  
  const useRegisterForm = (props) => {
    const { data } = useSelector(state => ({
        ...state.registerReducer
      }));
      const dispatch = useDispatch();
    let datum;    
    const handleSubmit = e => {
      
      e.preventDefault();
      props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          if(data.length !== 0){
            values.key = parseInt(data.length) + 1;
            datum = [ ...data, values ]
          } else {
            values.key = 1;
            datum = [ ...data, values ]
          }
          dispatch(userRegisterAction(datum))
        }
      });
    };

      const { getFieldDecorator } = props.form;
  
      const formItemLayout = {
        labelCol: {
          xs: { span: 16 },
          sm: { span: 4},
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 18 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 11
          },
        },
      };
  
      return (
        <div className="formWrapper">
          <div  className="main-form">
            <h2 className="register-title">Registration</h2>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
              <Form.Item label="First Name">
                {getFieldDecorator('firstname', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your First Name!',
                    },
                  ],
                })(<Input
                />)}
              </Form.Item>
              <Form.Item label="Last Name">
                {getFieldDecorator('lastname', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid name',
                    },
                    {
                      required: true,
                      message: 'Please input your Last Name!',
                    },
                  ],
                })(<Input 
                />)}
              </Form.Item>
              <Form.Item label="Birthday">
                {getFieldDecorator('birthday', {
                  rules: [
                    {
                      
                      message: 'The input is not valid date',
                    },
                    {
                      required: true,
                      message: 'Please input your Birthday!',
                    },
                  ],
                })(<Input
                type="date"
                />)}
            </Form.Item>
              <Form.Item label="Age">
                {getFieldDecorator('age', {
                  rules: [
                    {
                      
                      message: 'The input is not valid Age',
                    },
                    {
                      required: true,
                      message: 'Please input your Age!',
                    },
                  ],
                })(<Input type="Number" />)}
              </Form.Item>
              <Form.Item label="Hobby">
                {getFieldDecorator('hobby', {
                  rules: [
                    {
                      type: 'string',
                      message: 'The input is not valid text',
                    },
                    {
                      required: true,
                      message: 'Please input your Hobby!',
                    },
                  ],
                })(<Input />)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
              <div className="submit-button">
                <Button type="primary" htmlType="submit">
                  Register
                </Button>
                </div>
              </Form.Item>
            </Form>
          </div>
          <UserTable data={data} />
        </div>
      );
    }

  const UserForm = Form.create({ name: 'register' })(useRegisterForm);

export default UserForm;