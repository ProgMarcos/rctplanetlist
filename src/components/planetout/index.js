import React, {useEffect, useState} from 'react'
import Desclink from '../shared/descriptionwithlink';
import Greyimg from '../shared/grey-img';
import SForm from '../planetout/form/satellitesform';
import { useParams, useNavigate, Navigate } from 'react-router-dom';


async function getPlanet(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`) //pega a resposta da requisição pra API, baseado no ID passado
    let data = await response.json() //transforma em um JSON
    return data; //retorna esse JSON
}



const Planet=(props)=>{//CRIAÇÃO DE TODO O COMPONENTE PLANETA EM SI
    const [satellites, setSatellites]=useState([]) //cria o state satellites e a função que vai altera-lo
    const [planet, setPlanet] = useState({})
    const [redirect, setRedirect] = useState(false)
    let {id} = useParams(); //chama o id baseado no parametro da route
    const history = useNavigate(); //variavel para o hook navigate
    
    useEffect(()=> { //toda vez que o componente for iniciado ou atualizado
        getPlanet(id).then(data => { //chama a função get que retorna o json da api, baseado no id
            setSatellites(data['satellites'])//coloca dentro do state satellites
            setPlanet(data['data'])
        }, error => {
            setRedirect(true);
        })

    }, [])//array vazio para indicar que só vai fazer efeito quando for iniciado o componente
    
    const goToPlanet = () =>{
        history('/') //metodo para usar o botao, vai direto para a rota inicial /
    }

    const addSatellites = new_Satellites => { //função para adicionar satellite
        setSatellites([...satellites, new_Satellites]) //adiociona o novo planeta baseado no parametro passado
    }

        let title;
        if(planet.title_with_underline) //SE A PROPRIEDADE FOR VERDADEIRA
            title=<h4><u>{planet.name}</u></h4>//COLOCA O TITULO SUBLINHADO
        else
            title=title=<h4>{planet.name}</h4>

        if (redirect)
        return<Navigate to='/'/>

            return (
                <div className="divs">
                    <h2  className="title">Lista de Planetas</h2>
                <hr />
                    {title //CJAMA O TITULO BASEADO NA VARIAVEL
}
                    
                    <Desclink description={planet.description} link={planet.link}/>
                    <Greyimg img_url={planet.img_url} gray={planet.gray}/>
                 
                    <h4>Satélites</h4>
                    <SForm addSatellites={addSatellites} />
                    <ul>
                        {satellites.map((satellite, index)=> //muda cada elemento do array
                        //transforma cada um em uma linha com o nome baseado no objeto do elemento do array
                        <li key={index}>{satellite.name}</li>)} 
                    </ul>
            
                    <hr/>
                    <button type='button' className='button voltar' onClick={goToPlanet}>Voltar</button> {//botao para voltar usando o useNavigate
                    }
                </div>
            ) 
        
    }





export default Planet;