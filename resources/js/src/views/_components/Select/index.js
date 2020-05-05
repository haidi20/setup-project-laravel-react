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
    const [loading, setLoading]     = useState(false);

    const notFoundContent = loading ? <Spin size="small" /> : 'Data Tidak Ada';

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

        return props.onChange(e);
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

    console.log(props.value);

    return(
        <div>
            <label htmlFor={props.name}>
                {props.label}
            </label>
            <Select 
                showSearch
                labelInValue
                id={props.name}
                name={props.name}
                value={{key: props.value}}
                optionFilterProp="children"
                onChange={e => handleOnChange(e)}
                notFoundContent={notFoundContent}
                placeholder={`Pilih ${props.label}`}
                style={{ width: '100%', ...props.style }} 
                onSearch={(input, option) => handleSearch(input, option)}
            >
                {/* <Option value="0">Pilih {props.label}</Option> */}
                {data.map((item, index) => 
                    <Option
                        key={index}
                        value={item[props.setKey ? props.setKey : 'id']} 
                    >
                        {item[props.setText ? props.setText : 'name']}
                    </Option>    
                )}
            </Select>
        </div>
    )
}

export default CustomSelect;

{/* <Select 
    required
    name="name"
    data={data} // if data static
    label="Nama User"
    url="/user/search" // if data from API
/> */}