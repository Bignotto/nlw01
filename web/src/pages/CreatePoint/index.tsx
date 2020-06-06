/*
CREATEPOINT
*/

import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "./styles.css";
import logo from "../../assets/logo.svg";

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="logo" />
        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>
      <form>
        <h1>
          Cadastro de <br />
          Ponto de Coleta
        </h1>
        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>
          <div className="field">
            <label htmlFor="name">Nome da Entidade:</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field-group">
            <div className="field">
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" name="telefone" id="telefone" />
            </div>
            <div className="field">
              <label htmlFor="email">E-mail:</label>
              <input type="email" name="email" id="email" />
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Apnte o endereço no mapa:</span>
          </legend>
          <Map center={[-22.4869163, -47.4697054]} zoom={15}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </Map>
          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">
                <select name="uf" id="uf">
                  <option value="0">Selecione o Estado</option>
                </select>
              </label>
            </div>
            <div className="field">
              <label htmlFor="city">
                <select name="city" id="city">
                  <option value="0">Selecione a Cidade</option>
                </select>
              </label>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <legend>
            <h2>Items</h2>
            <span>Selecione um ou mais itens abaixo:</span>
          </legend>
          <ul className="items-grid">
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
            <li>
              <img src="http://localhost:3333/uploads/oleo.svg" alt="temp" />
              <span>Óleo de Cozinha</span>
            </li>
          </ul>
        </fieldset>
        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
