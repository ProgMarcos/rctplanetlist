import React, {Fragment, useState, useEffect} from 'react'
import Planet from './planet'
import Form from '../planetout/form/index'

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data;
}

const Planets = ()=> {
    const [planets, setPlanets]=useState([]) //metodo para inicializar, espera um valor inicial

    useEffect(()=> {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })

    }, [])//passando array vazio para o useEffect rodar apenas quando começa o app
    //caso eu passe o state planets por exemplo, ele sempre rodaria quando o planets fosse atualizado
    //porém nesse caso, ele chamaria a api a todo momento


    const removeLast =() => {
        let newPlanets=[...planets] //copia o conteudo da arrat planets para a nova array newplanets
        newPlanets.pop() //tira o ultimo
        setPlanets(newPlanets) //coloca no lugar da antiga array planets
        
    }

    const duplicateLast = () =>{
        let last_planet = planets[planets.length-1]//chamando o ultimo elemento sempre
        setPlanets([...planets, last_planet])
    }

    const addPlanet = new_planet => { //função para adicionar planeta
        setPlanets([...planets, new_planet]) //adiociona o novo planeta baseado no parametro passado
    }

        let gr = false;
        return (
            <Fragment>
                <h2  className="title">Lista de Planetas</h2>
                <hr />
                <div className="divBT">
                <button className="button" onClick={removeLast}>Remover último</button>
                <button className="button" onClick={duplicateLast}>Replicar último planeta</button>
                </div>
                <h3>Adicionar novo Planeta</h3>
                    <Form addPlanet={addPlanet}/> 
                <hr />
                
                {planets.map((planet, index)=> //altera cada item do array planet para:
                
                <Planet name={planet.name} //componente com cada descrição utilizando os dados passados pela props
                 description={planet.description} 
                 img_url={planet.img_url}
                 link={planet.link}
                 id={planet.id}
                 key={index}
                 gray={gr}
                />
                
                )}
                
            </Fragment>
        ) //Devemos utilizar o Fragment pq sempre se deve retornar apenas um unico bloco, poderia ser uma div ou simplesmente o fragment
    }



export default Planets