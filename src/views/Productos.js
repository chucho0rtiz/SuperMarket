import '../styles/StylePro.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import CardProducto from '../components/CardProducto';
function Productos() {
    return (
        <div>
            <NavBar />

            <img id='img' src='https://picsum.photos/id/123/1200/400' alt='' />

            <div id='div1' class="input-group">
                <input id="buscador" type="search" className="form-control mr-sm-2" placeholder="Buscar" aria-label="Search" />
                <button id='remitonumero' className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
            </div>
            <section className="contenido">
                <div className="mostrador" id="mostrador">
                    <div className="fila">
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                    </div>
                    <div className="fila">
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                    </div>
                    <div className="fila">
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                    </div>
                    <div className="fila">
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                        <CardProducto />
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}



export default Productos;