import React from 'react';

import Select   from '../../_components/Select';
import Collapse from '../../_components/Collapse';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import {Row, Col} from 'antd';

const filterUser = props => {

    return(
        <Collapse title="Filter Data">
            <Row>
                <Col span="6">
                    <Select 
                        setKey='id'
                        setText='name'
                        name="name"
                        // data={props.data}
                        url="/user/show"
                        label="Nama User"
                        onChange={props.filterName}
                    />
                </Col>
                <Col span="6">
                    <Select 
                        setKey="id"
                        name="address"
                        // data={props.data}
                        label="Alamat"
                        url="/user/show"
                        setText="address"
                        onChange={props.filterAddress}
                    />
                </Col>
            </Row>
        </Collapse>
    )
}

export default filterUser;