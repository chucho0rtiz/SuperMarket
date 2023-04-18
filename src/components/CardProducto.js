
function CardProducto() {
    return (
        <div>

            <div className="item" onclick="cargar(this)">
                <div className="contenedor-foto">
                    <img src="https://picsum.photos/id/123/1200/400" alt="" />
                </div>
                <p className="descripcion">Nombre del producto</p>
                <p className="precio">Precio: $00.000</p>
                <div>
                    <button id='btnDetalle' className="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button>
                    <button id='btnComprar' className="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;