import React, {useEffect, useState} from 'react';
import {withRouter, useHistory} from "react-router-dom";

import useAccess from './useAccess';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/layout/style/css';
import { 
    Row, Col, Layout, Table
} from 'antd';

const { Content }   = Layout;

const access = props => {
    const {
        state , setState,
    } = useAccess();

    useEffect(() => {
        insertDataEdit();
    }, [])

    const insertDataEdit = () => {
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