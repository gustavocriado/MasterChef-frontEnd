import React from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import { Card } from "primereact/card";
import { Image } from "primereact/image";
import Dialog from "../dialog/dialog";
import "./home.css";
import { useSearch } from "../../hooks/useSearch";

export const Home = () => {
  const { user } = useSearch();

  let rows = [];
  for (let i = 0; i < user.length; i++) {
    const footer = (
      <Dialog
        ingredients={user[i].ingredients}
        methodOfPreparation={user[i].methodOfPreparation}
      />
    );

    const header = (
      <Image
        src={
          user[i]?.medias[0]?.url ??
          "https://www.ferramentastenace.com.br/wp-content/uploads/2017/11/sem-foto.jpg"
        }
        template="Preview Content"
        alt="Image Text"
        preview
      />
    );

    rows.push(
      <div className="teste">
        <Card
          title={user[i].title}
          subTitle={user[i].title}
          header={header}
          footer={footer}
        >
          <div className="pzinho">
            <p className="m-0" style={{ lineHeight: "1.5" }}>
              {user[i].moreInformations ??
                "hey esta com fome? então se liga nessa receita mil grau feita pelo nosso parceiro Thomas Turbano Pinto,essa receita é muito respeitada em diversos locais do mundo, dando uma atenção maior para a oficina cismas turbo"}
            </p>
          </div>
        </Card>
      </div>
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
};

export default Home;
