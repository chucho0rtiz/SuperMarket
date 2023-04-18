import NavBar from '../components/NavBar';
import Carrusel from "../components/Carrusel";
import Footer from '../components/Footer';


function Contactenos() {


    return (
        <div>
            <NavBar />
            <Carrusel />
            <div className='contenidoInicio'>
                <div className='contenidoTituloInicio'>
                    <h3>Contactenos</h3>
                </div>
                <div className='contenidoParrafoInicio'>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                        <input type="Nombre" class="form-control" id="exampleFormControlInput1" placeholder="Mario Roldan" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Celular</label>
                        <input type="Celular" class="form-control" id="exampleFormControlInput1" placeholder="1012021020" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Dudas/Quejas/Recomendaciones</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Mi comentario es..." rows="3"></textarea>
                    </div>
                    <div class="mb-3">
                        <input type="button" class="form-control botonColorM" id="exampleFormControlInput1" value="Enviar" />
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );

}

export default Contactenos; 