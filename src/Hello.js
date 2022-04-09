import React from "react";


//Componente de classe
//sempre precisa extender o componente react.component e utilizar o render
class HelloWorld extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

//Componente de função
// const HelloWorld = () => {
//     return <h1>Hello World!</h1>;
// }

export default HelloWorld;