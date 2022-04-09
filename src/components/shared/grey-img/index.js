import React, {Fragment} from 'react'

import '../../../css/style.css'

const Greyimg =(props) => {
    return (
        <Fragment>
            <img className={props.gray ? "gray-img" : 'color-img'} src={props.img_url}></img>
        </Fragment>
    ) //Devemos utilizar o Fragment pq sempre se deve retornar apenas um unico bloco, poderia ser uma div ou simplesmente o fragment
}

export default Greyimg