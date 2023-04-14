import '../styles/StylePro.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

function Productos() {
    return (
        <div>
            <NavBar />

            <img id='img' src='https://picsum.photos/id/123/1200/400'></img>

            <div id='div1'>
                <input id='buscador' class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"></input>
                <button id='boton_buscar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>                
            </div>

    <section class="contenido">
        <div class="mostrador" id="mostrador">
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion" id>Nombre del producto </p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
            </div>
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
            </div> 
            <div class="fila">
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
                <div class="item" onclick="cargar(this)">
                    <div class="contenedor-foto">
                        <img src="https://picsum.photos/id/123/1200/400" alt="" />
                    </div>
                    <p class="descripcion">Nombre del producto</p>
                    <p class="precio">Precio: $x.xxx</p>
                    <div>
                    <button id='btnDetalle' class="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' class="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                    </div>
                </div>
            </div> 
        </div>
    </section>


            <Footer />
        </div>
    );
}



export default Productos;