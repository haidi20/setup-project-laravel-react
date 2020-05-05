import React, {useState, useEffect} from 'react';
// import Select from 'react-select';

// IMPORTANT, how use tag datatable in below.

import axios from '../../../supports/axios';

import 'antd/lib/select/style/css';
import {Select, Spin} from 'antd';

const { Option } = Select;

const CustomSelect = props => {
    let typingTimer                 = null;
    const [data, setData]           = useState([]);
    const [search, setSearch]       = useState();
    const [allItem, setAllItem]     = useState(false);
    const [loading, setLoading]     = useState(false);

    const notFoundContent   = loading ? <Spin size="small" /> : 'Data Tidak Ada';

    useEffect(() => {
        if(props.data) setData(props.data);

        if(props.url) fetchData();
    }, [search]);

    const handleSearch = (input, option) => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(() => {
            setSearch(input);
        }, 300);
    }

    const handleOnChange = e => {
        setSearch(null);

        if(Array.isArray(e.label)){
            setAllItem(true);
            e.label = e.label.join().replace(',', '');
        }

        // setAllItem(false);

        return props.onChange(e);
    }

    const anotherOption = () => {
        if(props.nullable){
            return <Option key={0} value={null}>Tidak Pilih</Option>
        }else if(!props.required){
            return <Option key={0} value={null}>Semua {props.label}</Option>
        }
    }

    const value = () => {
        // return props.value ? {key: props.value} : undefined;
        if(props.value || allItem){
            return {key: props.value};
        }else{
            return undefined;
        }
    } 

    const fetchData = async () => {
        let params = {
            search: search,
        }

        setLoading(true);
        await axios.get(props.url, {params: params})
            .then(response => {
                let data = response.data;

                setData(data);
                setLoading(false);
            })
            .catch(e => {
                handleError(e);
                setLoading(false);
            });
    }

    return(
        <div>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <Select 
                showSearch
                labelInValue
                value={value()}
                id={props.name}
                loading={loading}
                name={props.name}
                optionFilterProp="children"
                onChange={e => handleOnChange(e)}
                notFoundContent={notFoundContent}
                placeholder={`Pilih ${props.label}`}
                style={{ width: '100%', ...props.style }} 
                // defaultValue={{key: 0, label: `Pilih ${props.label}`}}
                onSearch={(input, option) => handleSearch(input, option)}
            >
                {anotherOption()}
                {data.map((item, index) => 
                    <Option
                        key={index + 1}
                        value={item[props.valueOption ? props.valueOption : 'id']} 
                    >
                        {item[props.textOption ? props.textOption : 'name']}
                    </Option>    
                )}
            </Select>
        </div>
    )
}

export default CustomSelect;

{/* <Select 
    // fot set option
    valueOption='id'
    textOption='name'

    nullable
    name="name"
    label="Nama"
    url="/user/show"
    style={{paddingRight: 5}}
    value={props.addFilter.id}
    onChange={e => props.handleAddFilter(e, 'id')}
    required
    data={data} // if data static
    url="/user/search" // if data from API
/> */}