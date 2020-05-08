import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";

// support
import axios from '../../supports/axios';
import {alert, handleError} from '../../supports/helper';
// components
import Form from '../_components/Form';
//partials
// import rules from './partials/Rules';

import './styles.scss';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/breadcrumb/style/css';
import 'antd/lib/input-number/style/css';
import { 
    Row, Col, Layout, Breadcrumb,
    Input, Button, InputNumber,
} from 'antd';
import {
    BarsOutlined
} from '@ant-design/icons';

const { Content }   = Layout;

const formUser = props => {
    const history   = useHistory();
    const [state, setState] = useState({
        age: null,
        name: null,
        email: null,
        address: null,
        password: null,
    });

    const min       = min => ({ min: min });
    const number    = { type: 'number' };
    const minNumber = min => ({...number, min: min});
    const email     = { type: 'email' };
    const required  = { required: true };

    useEffect(() => {
        insertDataEdit();
    }, [])

    const insertDataEdit = () => {
        if(props.location != undefined){
            let data = props.location.state;

            setState(prev => {
                return {...prev, ...data}
            });
        }
    }

    const onSubmit = e => {
        if(e.outOfDate === false) return false;

        axios({
            method: 'post',
            url: '/user/store',
            data: e,
        }).then(response => {
            alert(response);
            history.push('/user');
        }).catch(function (error) {
            handleError(error);
        });
    }

    const handleRePass = (rule, value) => {
        return new Promise((resolve, reject) => {
            if(value !== state.password){
                reject('Maaf, tidak sama dengan password');
            }

            resolve();
        });
    }

    const handleOnChange = e => {
        if(e != null && e.currentTarget != null){
            const { name, value } = e.currentTarget;
            setState(prev => {
                return {...prev, [name]: value}
            });
        }
    }

    const rules = {
        name: [required],
        password: [required, min(8)],
        rePassword: [{validator: handleRePass}, min(8)],
        age: [required, number],
        email: [required, email],
        address: [required],
    }

    const attributeForm = {
        back: '/user',
        state: state,
        rules: rules,
        onSubmit:e => onSubmit(e),
    }

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">Form User</h1>
                </Col>
                <Col span="4">
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Table</Breadcrumb.Item>
                    </Breadcrumb> */}
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Content>
                        <div className="site-layout-background" >
                            <Form {...attributeForm} >
                                <Input name="name" label="Nama" onChange={handleOnChange}/>
                                <Input type="password" name="password" label="Password" onChange={handleOnChange}/>  
                                <Input type="password" name="rePassword" label="Confirm Password" onChange={handleOnChange}/>   
                                <InputNumber name="age" label="Umur" onChange={handleOnChange}/>
                                <Input name="email" label="Email" onChange={handleOnChange}/>
                                <Input name="address" label="Alamat" onChange={handleOnChange}/>
                            </Form>
                        </div>
                    </Content>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(formUser);