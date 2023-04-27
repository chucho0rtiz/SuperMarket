import Carrusel from "../components/Carrusel";

function Contactenos() {
    return (
        <div>
            <Carrusel />
            <div className='contenidoInicio'>
                <div className='contenidoTituloInicio'>
                    <h3>Contactenos</h3>
                </div>
                <div className='contenidoParrafoInicio'>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Nombre</label>
                        <input type="Nombre" className="form-control" id="exampleFormControlInput1" placeholder="Mario Roldan" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Celular</label>
                        <input type="Celular" className="form-control" id="exampleFormControlInput1" placeholder="1012021020" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Dudas/Quejas/Recomendaciones</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Mi comentario es..." rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <input type="button" className="form-control botonColorM" id="exampleFormControlInput1" value="Enviar" />
                    </div>
                </div>
            </div>
        </div >
    );

}

export default Contactenos; 