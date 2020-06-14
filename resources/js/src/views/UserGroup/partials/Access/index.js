import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";

import useAccess from './useAccess';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/layout/style/css';
import { 
    Row, Col, Layout, Table, Button
} from 'antd';

const { Content }   = Layout;

const access = props => {
    const history   = useHistory();
    const {
        state , setState,
    } = useAccess();

    useEffect(() => {
        getUserGroup();
    }, [])

    const getUserGroup = () => {
        if(props.location.state != undefined){
            let data = props.location.state;

            setState(prev => {
                return {
                    ...prev,
                    userGroup: data,
                }
            });
        }
    }

    const back = () => {
        history.push('/user-group');
    }

    return(
        <div>

            <Row className="header-content">
                <Col span="20">
                    <h1 className="title-content">Access</h1>
                </Col>
            </Row>
            <Row>
                <Col span={24}> 
                    <Content>
                        <Button 
                            size="large"
                            className="btn-success"
                            style={{marginBottom: 10}}
                            onClick={() => back()} 
                        >
                            Kembali
                        </Button>
                        <div className="site-layout-background" >
                            <Table
                                size="small"
                                columns={state.columns} 
                                style={{minHeight: 270}}
                                dataSource={state.data} 
                                locale={{ emptyText: 'Data Tidak Ada' }}
                            />
                        </div>
                    </Content>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(access);