import React, { Component } from "react";
import { Chip } from "primereact/chip";
import "./footer.css";

export class Footer extends Component {
  render() {
    return (
      <div className="flex align-items-center flex-wrap">
        <Chip
          label="Onyama Limba"
          image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
          className="mr-2 mb-2 custom-chip"
        />
        <Chip
          label="Onyama Limba"
          image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
          className="mr-2 mb-2 custom-chip"
        />
        <Chip
          label="Onyama Limba"
          image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
          className="mr-2 mb-2 custom-chip"
        />
        <Chip
          label="Onyama Limba"
          image="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
          className="mr-2 mb-2 custom-chip"
        />
      </div>
    );
  }
}

export default Footer;
