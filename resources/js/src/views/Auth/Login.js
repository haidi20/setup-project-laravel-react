import React, {useState, useEffect} from 'react';

// support
import {
    required
} from '../../supports/validation';

// components
import Form from '../_components/Form';

import 'antd/lib/input/style/css';
import { Input } from 'antd';

const login = () => {
    const nameRoute = '/login';
    const [state, setState] = useState({
        name: null,
        password: null,
    });

    const rules = {
        name: [required],
        password: [required],
    }

    const attributeForm = {
        state: state,
        rules: rules,
        hideBack: true,
        // back: nameRoute,
        onSubmit:e => onSubmit(e),
    }

    const handleOnChange = e => {
        console.log(e);
    }

    return (
        <Form {...attributeForm} >
            <Input name="name" label="Username" onChange={handleOnChange}/>
            <Input type="password" name="password" label="Password" onChange={handleOnChange}/>
        </Form>
    );
};

export default login;