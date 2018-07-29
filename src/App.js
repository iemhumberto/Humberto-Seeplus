import React, { Component } from 'react';
import Buscador from './componentes/Buscador';
import Resultado from './componentes/Resultado';
import Autor from './componentes/Autor';
import Descripcion from './componentes/Descripcion';


const seeplus = <img style={{'width':'60px'}} src={'http://res.cloudinary.com/cristiansam/image/upload/v1532829991/seeplus.svg'} alt="icon seeplus" />;

class App extends Component {
  state = {
    termino: '',
    imagenes : [],
    pagina: ''
  }

  scroll  = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
        // Leer el state de la pagina actual
        let pagina = this.state.pagina;

        //Leer si la página es 1, ya no ir hacia atrás

        if(pagina === 1) return null;
        //Restar uno a la pagina actual
        pagina -= 1;
        //Agregar el cambio al state
        this.setState({
          pagina
        }, () => {
          this.consultarApi();
          this.scroll();
        });

        //console.log(pagina);

  }
  paginaSiguiente = () => {
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    //Sumar uno a la pagina actual
    pagina += 1;
    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });

    //console.log(pagina);
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=9149255-84e2095a1c14de028c408b326&q=${termino}&per_page=30&page=${pagina}`;

    console.log(url);

    fetch(url)
    .then(respuesta => respuesta.json() )
    .then(resultado => this.setState({ imagenes : resultado.hits }) ) 
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
      <div className="jumbotron">
      <p  style={{'fontSize':'4em', 'color':'grey', 'fontWeight':'bold', 'marginBottom':'30px'}} className="lead text-center">See {seeplus}</p>
      <Descripcion />
      <Buscador
      datosBusqueda={this.datosBusqueda}
      />
      </div>
      <div className="row justify-content-center">
      <Resultado 
      imagenes={this.state.imagenes}
      paginaAnterior={this.paginaAnterior}
      paginaSiguiente={this.paginaSiguiente}
       />
      </div>
      <Autor />

      </div>
    );
  }
}

export default App;
