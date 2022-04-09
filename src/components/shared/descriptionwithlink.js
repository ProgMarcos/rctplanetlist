import React, {Fragment} from 'react'

const Desclink =(props) => {
    if(props.link){ //condicionamento
        return (
            <Fragment>
                <p>{props.description}</p> 
                <p>Fonte: <a href={props.link}>{props.link}</a> </p>
            </Fragment>
        )
    }else {
        return (
            <Fragment>
                <p><u>{props.description}</u></p> 
            </Fragment>
        )
    }
}

export default Desclink