import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import Jess from "../src/img/jess.jpeg";
import Itau from "../src/img/itau-logo.png";
import Apple from "../src/img/apple-logo.png";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import Email from "./img/email-icon.png";
import Telefone from "./img/telefone-icon.png";

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem={Jess}
          nome="Jéssica de Oliveira"
          descricao="Profissional com 7 anos de experiência em marketing e negócios digitais. Sólida experiência em gestão de campanhas de marketing e comunicação, bem como em planejamento de posicionamento de marca e réguas de comunicação para reformulação e lançamento de produtos.
          Atuação paralela como ponto focal para disseminação de práticas de inovação e de design de serviço visando trazer mais resultados e integração entre áreas."
        />
        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="small-card-container">
        <div className="email-container">
          <CardPequeno imagem={Email} texto="jessica.oliveira@gmail.com" />
        </div>
        <div className="telefone-container">
          <CardPequeno imagem={Telefone} texto="11 95454-2014" />
        </div>
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem={Itau}
          nome="Itaú Unibanco"
          descricao="Implementação do projeto Seguradora Digital Itaú (VPL + R$300 MM) – através de uma transformação tecnológica e digital, o projeto reestruturou todo o ciclo de vida de seguros, desde a concepção de novos produtos até o pós venda. Interface com + 10 áreas: Marketing, CRM, Produtos, TI, UX/UI, BI, Analytics, Finanças e Jurídico."
        />

        <CardGrande
          imagem={Apple}
          nome="Apple"
          descricao="Elaboração de mailing, atendimento à imprensa, organização de eventos, entrega de press kits, clipping, elaboração de estratégias de divulgação e de parcerias, envio de relatórios diários e semanais para a matriz (Cupertino, EUA), atendimento e resposta à demandas de clientes, monitoramento de ações da concorrência."
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  );
}

export default App;
