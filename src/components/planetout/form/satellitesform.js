import React, {Fragment, useState} from "react";
import '../../../css/style.css'
const initialState = {
    name:''
}

const SForm=(props) =>{
    const [fields, setFields] = useState(initialState) //cria o state
    const handleFieldsChange = (e) => setFields({...fields, [e.currentTarget.name]: e.currentTarget.value}) 
                                //para alterar o state fields, ele passa o conteudo atual do campo
                                //e altera o valor baseado no NAME do input
                                //usamos a função setName para alterar o state NAME
                                //passando como parametro o o valor do elemento do parametro

    const handleSubmit = e => { //função para o botao submit
        props.addSatellites(fields)//adiociona o planeta baseado no input, usando a função do arquivo PLANETS
        e.preventDefault();//previne que  a pagina de reload quando o botao for clicado
        setFields(initialState);//zera novamente o objeto para que seja passado na proxima
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit}> 
                    <h3>Escreva os satélites desse planeta:</h3>
                <div className="divformst">
                    <input placeholder=" " className="input" type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}/>
                    <div class="cut cut-short"></div>
                    <label htmlFor="name" className="placeholder">Name: </label>
                </div>
                <br/>
                <input className="button" type="submit"/>
            </form>
        </Fragment>
        //onSubmit é quando o submit for acionado e ele chamar a função handleSubmit
        //onChange é quando o input for mudado, ele vai chamando o state e alterando
    )
}

export default SForm;