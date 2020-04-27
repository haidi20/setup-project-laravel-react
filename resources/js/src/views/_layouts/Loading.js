import React from 'react';

import MainLayout from './index';
import { Spin } from 'antd';

const loading = props => {

    return(
        <Spin tip="Loading...">
            <MainLayout />
        </Spin>
    )
}

export default loading;