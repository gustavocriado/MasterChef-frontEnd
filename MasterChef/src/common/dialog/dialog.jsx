import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "./dialog.css";

const DialogDemo = (props) => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [displayBasic2, setDisplayBasic2] = useState(false);
  const [displayModal, setDisplayModal] = useState(false);
  const [displayMaximizable, setDisplayMaximizable] = useState(false);
  const [displayPosition, setDisplayPosition] = useState(false);
  const [displayResponsive, setDisplayResponsive] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
    displayBasic2: setDisplayBasic2,
    displayModal: setDisplayModal,
    displayMaximizable: setDisplayMaximizable,
    displayPosition: setDisplayPosition,
    displayResponsive: setDisplayResponsive,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Pronto"
          icon="pi pi-check"
          onClick={() => onHide(name)}
          autoFocus
        />
      </div>
    );
  };

  return (
    <div className="dialog-demo">
      <div className="card">
        <Button
          label="Ver Receita"
          icon="pi pi-external-link"
          onClick={() => onClick("displayBasic2")}
        />
        <Dialog
          header="Receita"
          visible={displayBasic2}
          style={{ width: "50vw" }}
          footer={renderFooter("displayBasic2")}
          onHide={() => onHide("displayBasic2")}
        >
          <h5>Ingredientes</h5>
          <br />
          {props.ingredients.map((ingredient) => {
            return <p>{ingredient.item}</p>;
          })}
          <br />
          <h5>Metodo de preparação</h5>
          <br />
          {props.methodOfPreparation.map((method) => {
            return <p>{method.item}</p>;
          })}
          <br />
          <br />
        </Dialog>
      </div>
    </div>
  );
};

export default DialogDemo;
