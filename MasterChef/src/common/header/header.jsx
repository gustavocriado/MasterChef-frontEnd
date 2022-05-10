import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./header.css";

import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.items = [
      {
        label: "Home",
        icon: "pi pi-fw pi-home",
      },
      { label: "Minhas Receitas", icon: "pi pi-fw pi-pencil" },
      {
        label: "Perfil",
        icon: "pi pi-fw pi-user",
      },
      {
        label: "Sair",
        icon: "pi pi-fw pi-power-off",
        url: "/login",
      },
    ];
  }

  render() {
    const start = (
      <img
        alt="logo"
        src="showcase/images/logo.png"
        onError={(e) =>
          (e.target.src =
            "https://cdn-icons-png.flaticon.com/512/1980/1980654.png")
        }
        height="40"
        className="mr-2"
      ></img>
    );
    const end = <InputText placeholder="Search" type="text" />;
    return (
      <div>
        <div className="card">
          <Menubar model={this.items} start={start} end={end} />
        </div>
      </div>
    );
  }
}

export default Header;
