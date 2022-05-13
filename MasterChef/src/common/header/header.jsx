import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import "./header.css";

import React, { Component } from "react";
import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { useSearch } from "../../hooks/useSearch";

const Header = () => {
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      url: "/",
    },
    {
      label: "Sair",
      icon: "pi pi-fw pi-power-off",
      url: "/login",
    },
  ];

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

  const { search, setSearch } = useSearch();
  const end = (
    <InputText
      placeholder="Tipo"
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>
    </div>
  );
};

export default Header;
