import React, {Component} from 'react'
import {Form, Input, Button, Icon} from 'antd'
import logo from '../../assets/images/logo.png'
import './index.less'

export default class Login extends Component {
    render() {
        return (
            <div className='login'>
                <div className="login-header">
                    <img src={logo} alt="硅谷后台管理系统"/>
                    React项目: 后台管理系统
                </div>
                <div className="login-content">
                    <div className="login-box">
                        <div className="title">用户登陆</div>
                        <Form className="login-form">
                            <Form.Item>
                                <Input placeholder="用户名" prefix={<Icon type="user"/>}/>
                            </Form.Item>
                            <Form.Item>
                                <Input type="password" placeholder="密码" prefix={<Icon type="safety"/>}/>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" onClick={this.loginSubmit} className="login-form-button">登录</Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

