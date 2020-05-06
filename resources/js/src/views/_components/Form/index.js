import React, {useEffect, useState} from 'react';

import 'antd/lib/form/style/css';
import 'antd/lib/input/style/css';
import 'antd/lib/button/style/css';
import { 
    Form, Input, Button,
} from 'antd';
import {
    BarsOutlined
} from '@ant-design/icons';

const layout = {
    // labelCol: {
    //     span: 8,
    // },
    // wrapperCol: {
    //     span: 16,
    // },
};

const tailLayout = {
    // wrapperCol: {
    //   span: 16,
    // },
};

const customForm = props => {

    const rules         = props.rules ? props.rules : null;
    const setMessage    = props.message ? props.message : validateMessages;

    const validateMessages = {
        required: 'Maaf, ${label} harus diisi.',
        types: {
          email: 'Maaf, ${label} harus berupa E-mail.',
          number: 'Maaf, ${label} harus berupa Nomor.',
        },
        number: {
          range: '${label} harus di antara ${min} and ${max}',
        },
    };

    const attributeForm = {
        name:"user",
        size:'middle',
        layout:'vertical',
        initialValues:props.state,
        validateMessages: setMessage,
        onFinish:e => props.onSubmit(e),
        onFinishFailed:e => props.onSubmit(e),
    }

    const handleRules = () => {
        
        let result = {};
        let validation = {};
        
        props.children && React.Children.map(props.children, (child, index) => {
            const {number, name, email, userequired} = child.props;

            const setRequired = () => {
                return userequired === 'true' ? {required: true} : {required: false};
            }

            const setType = () => {
                if(number === 'true'){
                    return {type: 'number'};
                }else if(email === 'true'){
                    return {type: 'email'};
                }else{
                    return null;
                }
            }
            
            result = {
                ...result,
                [name] : [
                    setRequired(),
                    setType()
                ],
            }
        });

        console.log(result);
        setRules(result);  
    }

    return(
        <div>
            <Form {...attributeForm}>
                {React.Children.map(props.children, (child, index) => {
                    let attributes  = child.props;
                    let name        = attributes.name;
                    // console.log(attributes);
                    return(
                        <Form.Item
                            {...attributes}
                            rules={rules[name]}
                        >
                            {child}
                        </Form.Item>
                    )
                })}
                <Button type="success" htmlType="submit">
                    Submit
                </Button>
            </Form>
            
        </div>
    )
}

export default customForm;