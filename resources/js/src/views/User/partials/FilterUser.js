import React from 'react';

import Select   from '../../_components/Select';
import Collapse from '../../_components/Collapse';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/button/style/css';
import {Row, Col, Button} from 'antd';

const filterUser = props => {

    // console.log(props.addFilter);

    return(
        <Collapse title="Filter Data">
            <Row>
                <Col span="2">
                    <div style={{height: 25}} />
                    <Button 
                        // size="large"
                        className="bg-info"
                        onClick={() => props.handleResetFilter()} 
                    >
                        Reset
                    </Button> 
                </Col>
                <Col span="6">
                    <Select 
                        setKey='id'
                        setText='name'

                        name="name"
                        url="/user/show"
                        label="Nama User"
                        style={{paddingRight: 5}}
                        value={props.addFilter.name}
                        onChange={ e => props.handleAddFilter(e, 'name')}
                    />
                </Col>
                <Col span="6">
                    <Select 
                        setKey="id"
                        setText="address"

                        name="address"
                        label="Alamat"
                        url="/user/show"
                        value={props.addFilter.address}
                        onChange={ e => props.handleAddFilter(e, 'address')}
                    />
                </Col>
            </Row>
        </Collapse>
    )
}

export default filterUser;