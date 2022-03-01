import './assets/App.css';
import { Component } from 'react';
import FormularioCadastro from "./components/FormularioCadastro";
import ListaNotas from "./components/ListaNotas";

class App extends Component {
  constructor(_) {
    super();
    this.state = {notas: []};
  }
  componentDidMount() {
    document.title = 'CEEP :: Meu App';
  }
  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {notas: novoArrayNotas};
    this.setState(novoEstado);
  }
  render() {
    return (
      <section className='conteudo'>
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
