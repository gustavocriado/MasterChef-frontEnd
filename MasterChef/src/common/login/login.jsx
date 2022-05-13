import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";

import React, { useState } from "react";
import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { useNavigate } from 'react-router-dom'
import { classNames } from "primereact/utils";
import { Link } from "react-router-dom";
import "./login.css";
import "../index.css";
import axios from "axios";

export const Login = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [value1, setValue1] = useState("");
  const navigate = useNavigate()
  
  const LoginHandle = async (e) => {
    var email = formik.values.email;
    var password = value1;
    
    const model = JSON.stringify({email,password });

     const response = await axios.post("https://receitasfiap-auth.herokuapp.com/Access/v1/Login",model,
     {
       headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3000'},
     }
     );
     
     if(response?.data.authenticated === true){
       setShowMessage(true)
       formik.resetForm();
     }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      date: null,
      country: null,
      accept: false,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      if (!data.password) {
        errors.password = "Password is required.";
      }

      if (!data.accept) {
        errors.accept = "You need to agree to the terms and conditions.";
      }

      return errors;
    },
    onSubmit: (data) => {
      setFormData(data);
      setShowMessage(true);

      formik.resetForm();
    },
  });

  const isFormFieldValid = (email) =>
    !!(formik.touched[email] && formik.errors[email]);
  const getFormErrorMessage = (email) => {
    return (
      isFormFieldValid(email) && (
        <small className="p-error">{formik.errors[email]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => navigate('/')} //direcionar de volta para a home
      />
    </div>
  );
  return (
    <div className="form-demo">
      <Dialog
        visible={showMessage}
        onHide={() => setShowMessage(false)}
        position="top"
        footer={dialogFooter}
        showHeader={false}
        breakpoints={{ "960px": "80vw" }}
        style={{ width: "30vw" }}
      >
        <div className="flex align-items-center flex-column pt-6 px-3">
          <i
            className="pi pi-check-circle"
            style={{ fontSize: "5rem", color: "var(--green-500)" }}
          ></i>
          <h5>Login feito com sucesso</h5>
          <p style={{ lineHeight: 1.5, textIndent: "1rem" }}>
            Seja muito bem vindo ao nosso site de receitas profissionais
          </p>
        </div>
      </Dialog>

      <div className="flex justify-content-center">
        <div className="card">
          <h5 className="text-center">Login</h5>
          <form onSubmit={formik.handleSubmit} className="p-fluid">
            <div className="field">
              <span className="p-float-label p-input-icon-right">
                <i className="pi pi-envelope" />
                <InputText
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("email"),
                  })}
                />
                <label
                  htmlFor="email"
                  className={classNames({
                    "p-error": isFormFieldValid("email"),
                  })}
                >
                  Email
                </label>
              </span>
              {getFormErrorMessage("email")}
            </div>
            <div className="field">
              <span className="p-float-label">
                <Password
                  value={value1}
                  onChange={(e) => setValue1(e.target.value)}
                  feedback={false}
                  toggleMask
                />
                <label htmlFor="Senha">Senha</label>
              </span>
              {getFormErrorMessage("password")}
            </div>
            <div className="field-checkbox">
              <div className="boxcheck-label">
                <Checkbox
                  inputId="accept"
                  name="accept"
                  checked={formik.values.accept}
                  onChange={formik.handleChange}
                  className={classNames({
                    "p-invalid": isFormFieldValid("accept"),
                  })}
                />
                <label
                  htmlFor="accept"
                  className={classNames({
                    "p-error": isFormFieldValid("accept"),
                  })}
                >
                  <span className="spantext">Lembre-me</span>
                </label>
              </div>

              <div className="linkbutton">
                <Link to="/singup" className="p-button-link">
                  Cadastre-se
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              label="Entrar"
              className="mt-2"
              onClick={() => LoginHandle(true)}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
