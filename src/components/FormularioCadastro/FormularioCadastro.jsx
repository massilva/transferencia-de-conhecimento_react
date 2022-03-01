import "./estilo.css";
import React, { Component } from "react";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props);
        this.titulo = '';
        this.texto = '';
    }
    _handleMudacaoTitulo(event) {
        event.stopPropagation();
        this.titulo = event.target.value;
    }
    _handleMudacaoTexto(event) {
        event.stopPropagation();
        this.texto = event.target.value;
    }
    _criarNota(event) {
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
        event.stopPropagation();
    }
    render() {
        return (
            <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
                <input
                    id="titulo"
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudacaoTitulo.bind(this)}
                    />
                <textarea
                    className="form-cadastro_input"
                    placeholder="Escreva a sua nota"
                    rows={15}
                    onChange={this._handleMudacaoTexto.bind(this)}
                    />
                <br/>
                <button className="form-cadastro_submit">Salvar Nota</button>
            </form>
        );
    }
}

export default FormularioCadastro;
