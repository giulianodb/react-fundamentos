import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import './App.css'
import Familia from "./components/basicos/Familia";
import FamiliaCurso from "./components/basicos/FamiliaCurso";
import FamiliaMembroCurso from "./components/basicos/FamiliaMembroCurso";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";


function App(props) {

    const familia = [{nome:"Pedro", sobrenome:"Silva"},{nome:"Luana", sobrenome:"Boganika"}]

  return (
    <div className="App">
      <div className="Cards">


      <Card titulo="# 8 - Condicioal" color="#982895">

            <ParOuImpar numero={21}></ParOuImpar>
            
            <UsuarioInfo usuario={{nome: 'Fernando'}}></UsuarioInfo>
            <UsuarioInfo usuario={{email: 'email@com'}}></UsuarioInfo>

</Card>

      <Card titulo="# 7 - desafio" color="#FF432E">

<TabelaProdutos></TabelaProdutos>
</Card>


      <Card titulo="# 6 - repetção" color="#FF4C65">

        <ListaAlunos></ListaAlunos>
        </Card>


        
        <Card titulo="# 5 - Família Curso" color="#00C8F8">
            <FamiliaCurso sobrenome="Ferreira" >
                <FamiliaMembroCurso nome="Pedro"/>
                <FamiliaMembroCurso nome="Maria"/>
            </FamiliaCurso>
        </Card>

        <Card titulo="# 5 - Família" color="#00C8F8">
            <Familia lista={familia} > </Familia>
        </Card>

        <Card titulo="Desafio Aleatório" color="#FA6900">
          <Aleatorio max={5} min={1} />
          <Aleatorio max={5} min={1} />
          <Aleatorio max={5} min={1} />
        </Card>

        <Card titulo="Primeiro comp" color="#E94C6F">
          <Primeiro></Primeiro>
        </Card>

        <Card titulo="Com com Param" color="#588C73">
          <ComParametro
            titulo="Situação Aluno"
            aluno="Maria "
            nota={5.0}
          ></ComParametro>
        </Card>

        <Card titulo="Fragmento" color="#E8B7">
          <Fragmento></Fragmento>
        </Card>
      </div>
    </div>
  );
}

export default App;
