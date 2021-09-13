import { render } from "@testing-library/react";
import React from "react";

export default class Etapa1 extends React.Component {
  state = {
    nome: " ",
    idade: " ",
    email: " ",
  };

  onChangeNome = (event) => {
    this.setState({ nome: event.target.value });
  };

  onChangeIdade = (event) => {
    this.setState({ idade: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <div>
          <p>1. Qual o seu nome?</p>
          <input
            name={"nome"}
            onChange={this.onChangeNome}
            value={this.state.nome}
          />
        </div>
        <div>
          <p>2. Qual sua idade?</p>
          <input
            name={"idade"}
            onChange={this.onChangeIdade}
            value={this.state.idade}
          />
        </div>
        <div>
          <p>3. Qual seu email?</p>
          <input
            name={"email"}
            onChange={this.onChangeEmail}
            value={this.state.email}
          />
        </div>
        <div>
          <p>Qual a sua escolaridade?</p>
          <select>
            <option>Ensino médio incompleto</option>
            <option>Ensino médio completo</option>
            <option>Ensino superior incompleto</option>
            <option>Ensino superior completo</option>
          </select>
        </div>
      </div>
    );
  }
}
