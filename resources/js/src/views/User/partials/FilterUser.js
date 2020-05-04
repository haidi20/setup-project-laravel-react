import React from 'react';

import Select   from '../../_components/Select';
import Collapse from '../../_components/Collapse';

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import {Row, Col} from 'antd';

const filterUser = props => {

    const data = [
        {label: 'Nata', value: 0},
        {label: 'Risky', value: 1},
        {label: 'Andi', value: 2},
    ];

    return(
        <Collapse title="Filter Data">
            <Row>
                <Col span="6">
                    <Select 
                        name="name"
                        // data={data}
                        label="Nama User"
                        url="/user/search"
                    />
                </Col>
            </Row>
        </Collapse>
    )
}

export default filterUser;