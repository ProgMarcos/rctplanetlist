import React from "react";
import Planet from '../components/planetout/index'

import { Link } from "react-router-dom";

const NotFound = () =>{
    return (
        <div>
            <h3>Pagina Não Encontrada</h3>
            <Link to='/'>Voltar</Link>
        </div>
    )
}

export default NotFound;