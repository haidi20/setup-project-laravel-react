import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";

// support
import axios from '../../supports/axios';
import {alert, handleError} from '../../supports/helper';
import {required} from '../../supports/validation';
// components
import Form from '../_components/Form';
//partials
// import rules from './partials/Rules';

import './styles.scss';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/layout/style/css';
import { 
    Row, Col, Layout, Input
} from 'antd';

const { Content }   = Layout;

const formUserGroup = props => {
    const nameRoute = '/user-group';
    const history   = useHistory();
    const [state, setState] = useState({
        id: null,
        name: null,
    });   

    useEffect(() => {
        insertDataEdit();
    }, [])

    const insertDataEdit = () => {
        if(props.location.state != undefined){
            let data = props.location.state;

            setState(prev => {
                return {...prev, ...data}
            });
        }
    }

    const url = () => {
        if(props.location.state != undefined){
            console.log('edit');
            return nameRoute+'/update/'+state.id;
        }else{
            return nameRoute+'/store';
        }
    }

    const onSubmit = e => {
        if(e.outOfDate === false) return false;

        axios({
            method: 'post',
            url: url(),
            data: e,
        }).then(response => {
            alert(response);
            history.push(nameRoute);
        }).catch(function (error) {
            handleError(error);
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
    }

    const attributeForm = {
        back: nameRoute,
        state: state,
        rules: rules,
        onSubmit:e => onSubmit(e),
    }

    return(
        <div>
            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">Form Organization</h1>
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
                            </Form>
                        </div>
                    </Content>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(formUserGroup);