import React, { Component } from "react";
import { Chip } from "primereact/chip";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="copyright">
          <h5>Desenvolvedores</h5>
        </div>
        <div className="flex align-items-center flex-wrap">
          <Chip
            label="Gustavo Criado"
            image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Rodrigo Cunha"
            image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Anderson Oliveira"
            image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
            className="mr-2 mb-2 custom-chip"
          />
          <Chip
            label="Daniel Luiz"
            image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
            className="mr-2 mb-2 custom-chip"
          />
        </div>
      </div>
    );
  }
}

export default Footer;
