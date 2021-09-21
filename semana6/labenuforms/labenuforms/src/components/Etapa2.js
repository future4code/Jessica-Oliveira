import React from "react";

export default class Etapa2 extends React.Component {
  state = {
    curso: " ",
    unidadeEnsino: " ",
  };

  onChangeCurso = (event) => {
    this.setState({ curso: event.target.value });
  };

  onChangeUnidadeEnsino = (event) => {
    this.setState({ unidadeEnsino: event.target.value });
  };

  render() {
    return (
      <div>
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <div>
          <p>5. Qual curso?</p>
          <input
            name={"curso"}
            onChange={this.onChangeCurso}
            value={this.state.curso}
          />
        </div>
        <div>
          <p>6. Qual a unidade de ensino?</p>
          <input
            name={"unidade ensino"}
            onChange={this.onChangeUnidadeEnsino}
            value={this.state.unidadeEnsino}
          />
        </div>
      </div>
    );
  }
}
