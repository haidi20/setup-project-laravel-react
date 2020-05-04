import React, {useState, useEffect} from 'react';
import useDatatable from './useDatatable';
import { useLocation } from "react-router-dom";
import './style.scss';

// IMPORTANT, how use tag datatable in below.

import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/table/style/css';
import 'antd/lib/modal/style/css';
import 'antd/lib/button/style/css';
import 'antd/lib/select/style/css';
import 'antd/lib/layout/style/css';
import 'antd/lib/pagination/style/css';
import { 
    Table, Button, Row, Col, Input, 
    Select, Pagination, Modal,
    Layout
} from 'antd';
import {
    PlusSquareOutlined, AudioOutlined,
} from '@ant-design/icons';

const { Content } = Layout;
const { Option } = Select;

const datatable = props => {
    const {
        // state
        pagination, source, loading, columns, 
        openPopup, selectItem,
        // function
        handleAdd, handleSearch, handleOpenPopup, 
        handleClosePopup, handleShowPage, handlePagination,
        allButtonAction,
    } = useDatatable(props);

    // useEffect(() => {
    //     console.log(pagination.current);
    // }, [pagination.current])

    return(
        <div>
            <Modal
                title="Detail Tombol Action"

                width={350}
                visible={openPopup}
                onCancel={handleClosePopup}
                okButtonProps={{ style: { display: 'none' } }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                {allButtonAction(selectItem, false)}
            </Modal>
            <Row>
                <Col span="4">
                    <Button 
                        size="large"
                        className="bg-success"
                        onClick={() => handleAdd()} 
                    >
                        Tambah
                    </Button> 
                </Col>
            </Row>
            <hr />
            {/* <Row>
                <Col span="24">
                    <h1 style={{fontSize: 25}}>Data</h1>
                    <hr />
                </Col>
            </Row>
            <br /> */}
            <Row type="flex">
                <Col xs={24} sm={24} md={6}>
                    Show &nbsp;
                    <Select defaultValue="5" style={{ width: 70 }} onChange={handleShowPage}>
                        <Option value="5">5</Option>
                        <Option value="10">10</Option>
                        <Option value="25">25</Option>
                        <Option value="50">50</Option>
                    </Select>
                    &nbsp; entries
                </Col>
                <Col xs={0} sm={0} md={12}>
                </Col>
                <Col xs={24} sm={24} md={2}>
                    <p style={{marginRight: 5, float: 'right'}}>Search :</p>
                </Col>
                <Col xs={24} sm={24} md={4}>
                    <Input
                        onChange={e => handleSearch(e)}
                    />
                </Col>
            </Row>
            <Table
                size="small"
                loading={loading}
                // handle column from useDatatable
                columns={columns} 
                // agar pagination bawaan hilang
                pagination={pagination} 
                style={{minHeight: 270}}
                dataSource={source.data} 
                locale={{ emptyText: 'Data Tidak Ada' }}
            />
            <Row className="pagination">
                <Col xs={24} sm={24} md={12}>
                    Showing {pagination.current} of {pagination.total} entries
                </Col>
                <Col xs={0} sm={0} md={12}>
                    {/* screen desktop */}
                    <Pagination 
                        style={{float: 'right'}}
                        total={pagination.total}
                        onChange={handlePagination}
                        current={pagination.current} 
                        pageSize={pagination.pageSize} 
                    />
                </Col>
                <Col xs={24} sm={24} md={0}>
                    {/* screen mobile */}
                    <Pagination 
                        size="small"
                        total={pagination.total}
                        onChange={handlePagination}
                        current={pagination.current} 
                        pageSize={pagination.pageSize} 
                    />
                </Col>
            </Row>
        </div>
    )
}

export default datatable;

// how use tag datatable
/*
    <Datatable
        title="name_datatable" // e.g. table user
        hideEdit // hide button edit
        hideDelete // hide button delete
        hideAction // hide button column action
        disabledEdit
        disabledDelete
        columns={columns} // insert all column table
        nameRoute={nameRoute} // name route modul e.g /user, /document, dll
    />
*/