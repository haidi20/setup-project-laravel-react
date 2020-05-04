import React, {useState} from 'react';

import './styles.scss';

import 'antd/lib/layout/style/css';
import 'antd/lib/collapse/style/css';
import { 
    Layout, Collapse 
} from 'antd';

const { Panel }     = Collapse;
const { Content }   = Layout;

const boxCollapse = props => {
    const [activeKey, setActiveKey] = useState(1);

    const handleActiveKey = () => {
        console.log('click');
        setActiveKey(prev => prev === 0 ? 1 : 0);
    }

    return(
        <div>
            <Content>
                <div className="site-layout-background filter" >
                    <Collapse
                        activeKey={[activeKey]}
                        expandIconPosition={'right'}
                        onChange={() => handleActiveKey()}
                    >
                        <Panel 
                            key="1"
                            header={props.title} 
                        >
                            {props.children}
                        </Panel>
                    </Collapse>
                </div>
            </Content>
        </div>
    )
}

export default boxCollapse;