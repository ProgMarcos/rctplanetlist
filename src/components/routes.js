import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsScreen from "../screens/planets";
import PlanetScreen from "../screens/planet";
import NotFound from "../screens/notfound";

const RoutesEx =()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PlanetsScreen />}/> 
                <Route exact path='/planet/:id' element={<PlanetScreen />}/> 
                <Route exact path='*' element={<NotFound />}/>
            </Routes>
        </BrowserRouter>
    )//quando o path for /, chama o componente Planet Screen
    //rota com * sempre deixar em ultimo, pois é a de erro
    //*signifca que a rota sera chamada com qualquer condição do path
}
export default RoutesEx