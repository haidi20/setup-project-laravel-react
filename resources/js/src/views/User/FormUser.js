import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";

// support
import axios from '../../supports/axios';
import {alert, handleError} from '../../supports/helper';
// components
import Form from '../_components/Form';
//partials
import rules from './partials/Rules';

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
        name: 'mantab',
        email: null,
        address: null,
        password: null,
    });

    useEffect(() => {
        insertDataEdit();
    }, [])

    const attributeForm = {
        back: '/user',
        state: state,
        rules: rules,
        onSubmit:e => onSubmit(e),
    }

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
            console.log(error.response);
            handleError(error);
        });
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
                                <Input name="name" label="Nama" />
                                <Input type="password" name="password" label="Password" />  
                                <Input type="password" name="rePassword" label="Confirm Passowrd" />   
                                <InputNumber name="age" label="Umur" />
                                <Input name="email" label="Email" />
                                <Input name="address" label="Alamat" />
                            </Form>
                        </div>
                    </Content>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(formUser);