import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom";

import './style.scss';
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
    const [form]    = Form.useForm();
    const history   = useHistory();

    useEffect(() => {
        form.setFieldsValue({...props.state});
    }, [props.state]);

    const rules = props.rules ? props.rules : null;

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
        form: form,
        name:"user",
        size:'middle',
        layout:'vertical',
        validateMessages: validateMessages,
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

    const back = () => {
        history.push({
            pathname: props.back,
        });
    }

    return(
        <div>
            <Button 
                className="btn-info" onClick={() => back()} style={{marginBottom: 20}}
            > Kembali </Button>
            <Form {...attributeForm}>
                {React.Children.map(props.children, (child, index) => {
                    let attribute  = child.props;
                    let name        = attribute.name;
                    // console.log(attribute);
                    return(
                        <Form.Item
                            {...attribute}
                            rules={rules[name]}
                        >
                            {child}
                        </Form.Item>
                    )
                })}
                <div style={{marginTop: 20}}>
                    <Button className="btn-info" onClick={() => back()}> Kembali </Button>
                    <Button className="btn-success" style={{float: 'right'}} htmlType="submit"> Kirim </Button>
                </div>
            </Form>
            
        </div>
    )
}

export default customForm;