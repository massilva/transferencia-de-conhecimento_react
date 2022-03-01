import "./estilo.css";
import React, { Component } from "react";
import CardNota from "../CardNota";

class ListaNotas extends Component {
    render() {
        return (
            <ul className="lista-notas">
                {this.props.notas.map((nota, idx) => {
                    return (
                        <li className="lista-notas_item" key={idx}><CardNota titulo={nota.titulo} texto={nota.texto} /></li>
                    );
                })}
            </ul>
        );
    }
}

export default ListaNotas;
