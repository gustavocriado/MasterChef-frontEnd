import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import Dialog from "../dialog/dialog";
import "./home.css";
export class Home extends Component {
  render() {
    const tamanho = 4;
    const header = (
      <Image
        src="https://aldeiaconteudo.com.br/wp-content/uploads/2019/06/ciclo-de-vida-do-meme-aldeia-marketing-de-conteudo.jpg"
        template="Preview Content"
        alt="Image Text"
        preview
      />
    );

    const footer = <Dialog />;
    let rows = [];
    for (let i = 0; i < tamanho; i++) {
      rows.push(
        <Card
          title="Advanced Card"
          subTitle="Subtitle"
          header={header}
          footer={footer}
          className="teste"
        >
          <p className="m-0" style={{ lineHeight: "1.5" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </Card>
      );
    }
    return (
      <>
        <Header />
        <div className="divmae">
          <div className="pablo">
            <div className="rael">{rows}</div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Home;
