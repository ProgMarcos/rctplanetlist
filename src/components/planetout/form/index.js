import React, {Fragment, useState} from "react";
import '../../../css/style.css'

const initialState = {
    name:'',
    description:'',
    link:'',
    img_url:'',
    id: ''
}

const Form=(props) =>{
    const [fields, setFields] = useState(initialState) //cria o state
    const handleFieldsChange = (e) => setFields({...fields, [e.currentTarget.name]: e.currentTarget.value}) 
                                //para alterar o state fields, ele passa o conteudo atual do campo
                                //e altera o valor baseado no NAME do input
                                //usamos a função setName para alterar o state NAME
                                //passando como parametro o o valor do elemento do parametro

    const handleSubmit = e => { //função para o botao submit
        props.addPlanet(fields)//adiociona o planeta baseado no input, usando a função do arquivo PLANETS
        e.preventDefault();//previne que  a pagina de reload quando o botao for clicado
        setFields(initialState);//zera novamente o objeto para que seja passado na proxima
    }

    return(
        <Fragment>
            <form onSubmit={handleSubmit} className="divs"> 
                <div className="divform">
                    <input placeholder=" " className="input" type="text" id="name" name="name" value={fields.name} onChange={handleFieldsChange}/>
                    <div class="cut"></div>
                    <label htmlFor="name" className="placeholder">Nome </label>
                </div>
                <div className="divform">
                    <input placeholder=" " className="input" type="text" id="description" name="description" value={fields.description} onChange={handleFieldsChange}/>
                    <div class="cut"></div>
                    <label htmlFor="description" className="placeholder">Descrição </label>
                </div>
                <div className="divform">
                    <input placeholder=" " className="input" type="text" id="link" name="link" value={fields.link} onChange={handleFieldsChange} />
                    <div class="cut"></div>
                    <label htmlFor="link" className="placeholder">Fonte </label>
                </div>
                <div className="divform">
                    <input placeholder=" " className="input" type="text" id="img_url" name="img_url" value={fields.img_url} onChange={handleFieldsChange}/>
                    <div class="cut"></div>
                    <label htmlFor="img_url" className="placeholder">URL da imagem </label>
                </div>
                <div className="divform">
                    <input placeholder=" " className="input" type="text" id="id" name="id" value={fields.id} onChange={handleFieldsChange}/>
                    <div class="cut cut-short"></div>
                    <label htmlFor="id" className="placeholder">Id </label>
                </div>
                <br/>
                <input className="button" type="submit"/>
            </form>
        </Fragment>
        //onSubmit é quando o submit for acionado e ele chamar a função handleSubmit
        //onChange é quando o input for mudado, ele vai chamando o state e alterando
    )
}

export default Form;