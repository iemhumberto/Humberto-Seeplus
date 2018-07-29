import React from 'react';


// Compenente funcional
// Usar posteriormente previewURL o webformatURL 
const Imagen = (props) => {

    const  { largeImageURL, likes, tags, views, previewURL } = props.imagen;

    return(
        <div className="col-12 col-sm-6 col-sm-4 col-lg-3">
          <div className="card">
            <img src={previewURL}  alt={tags} className="card-img-top" />
              <div className="card-body">
               <p className="card-text">{likes} Me gusta</p>
               <p className="card-text">{views} Vistas</p>
               <a href={largeImageURL} target="_blank" className="btn btn-primary btn-block">Ver imagen</a>
              </div>
          </div>
        </div>
    );
}

export default Imagen;