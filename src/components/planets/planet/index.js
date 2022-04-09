import React, { useEffect, useState } from 'react'
import Desclink from '../../shared/descriptionwithlink';
import Greyimg from '../../shared/grey-img';

import { Link } from 'react-router-dom';


const Planet = (props) => {//CRIAÇÃO DE TODO O COMPONENTE PLANETA EM SI

    let title;
    if (props.title_with_underline) //SE A PROPRIEDADE FOR VERDADEIRA
        title = <h4><u>{props.name}</u></h4>//COLOCA O TITULO SUBLINHADO
    else
        title = title = <h4>{props.name}</h4>
    return (
        <div className="divs">
            <Link to={'planet/'+props.id}>{title}</Link>
            <Desclink description={props.description} link={props.link} />
            <Link to={'planet/'+props.id}> <Greyimg img_url={props.img_url} gray={props.gray} /></Link>
            <hr />
        </div>
    )

}





export default Planet;