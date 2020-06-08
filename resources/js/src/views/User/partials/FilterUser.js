import React from 'react';

import Select   from '../../_components/Select';
import Collapse from '../../_components/Collapse';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/button/style/css';
import {Row, Col, Button} from 'antd';

const filterUser = props => {

    return(
        <Collapse title="Filter Data">
            <Row>
                {/* <Col span="2">
                    <div style={{height: 25}} />
                    <Button 
                        // size="large"
                        className="bg-info"
                        onClick={() => props.handleResetFilter()} 
                    >
                        Reset
                    </Button> 
                </Col> */}
                <Col span="6">
                    <Select 
                        valueOption='id' // harus sama dengan addFilter
                        textOption='name'

                        name="name"
                        label="Nama"
                        url="/user/search-option"
                        value={props.filterUser}
                        style={{paddingRight: 5}}
                        onChange={ e => props.handleAddFilter(e, 'id')} // harus sama dengan addFilter
                    />
                </Col>
                {/* <Col span="6">
                    <Select 
                        valueOption="id"
                        textOption="address"
                        
                        nullable
                        name="address"
                        label="Alamat"
                        url="/user/show"
                        value={props.addFilter.address}
                        onChange={ e => props.handleAddFilter(e, 'id')}
                    />
                </Col> */}
            </Row>
        </Collapse>
    )
}

export default filterUser;