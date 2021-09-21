import React from "react";

export default class Etapa3 extends React.Component {
  state = {
    terminouGraduacao: "",
    cursoComplementar: "",
  };

  onChangeTerminouGraduacao = (event) => {
    this.setState({ terminouGraduacao: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <div>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input
            name={"finalizou graduacao"}
            onChange={this.onChangeTerminouGraduacao}
            value={this.state.terminouGraduacao}
          />
        </div>
        <div>
          <p>6. Você fez algum curso complementar?</p>
          <select>
            <option>Nenhum</option>
            <option>Curso técnico</option>
            <option>Curso de inglês</option>
          </select>
        </div>
      </div>
    );
  }
}
