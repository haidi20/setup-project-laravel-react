import React, {useEffect} from 'react';
import { withRouter } from "react-router-dom";

const formUser = props => {

    useEffect(() => {
        if(props.location.state != undefined){
            let data = props.location.state;
 
            console.log(data);
        }
     }, []);

    return(
        <div>
            form user
        </div>
    )
}

export default withRouter(formUser);