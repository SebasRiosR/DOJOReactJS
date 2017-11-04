import React, { Component } from 'react';
import './App.css';
import Usuarios from './Usuarios.js'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      usuarios: [],
      show : ''
    }
    this.buscarUsuarios = this.buscarUsuarios.bind(this);
}
  /*
  buscar(articulo){
    fetch('https://api.mercadolibre.com/sites/MCO/search?q=' + articulo.target.value)
    .then(function(resultado){
      return resultado.json()
    }).then((json)=>{
      this.setState({resultados:json.results})
    });
  }*/

  buscarUsuarios(id){
    let show = '';
    console.log(Usuarios)
    for (let i in Usuarios) {
      if (Usuarios[i].codigo == id.target.value) {

        show = "El usuario con código " + Usuarios[i].codigo + " existe y su nombre es: " + Usuarios[i].nombre;
        break;
      } 
      else {
        show = "Usuario no encontrado";
      }
    }
    this.setState({show : show});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <p> Usuarios </p>
          <input type="text" placeholder="Texto" onChange = {this.buscarUsuarios}/>
          {
            this.state.show
          }
        </div>
      </div>
    );
  }
}

export default App;
