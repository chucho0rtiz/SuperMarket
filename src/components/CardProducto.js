import React, { useState } from 'react';
import {
    Modal, ModalHeader, ModalBody,
    InputGroup, InputGroupText, Input
} from 'reactstrap';
import logo from '../img/Logo1.png';

function CardProducto() {
    const [modalD, setModalD] = useState(false);
    const toggleD = () => setModalD(!modalD);
    return (
        <div>

            <div className="item" onclick="cargar(this)">
                <div className="contenedor-foto">
                    <img src="https://picsum.photos/id/123/1200/400" alt="" />
                </div>
                <p className="descripcion">Nombre del producto</p>
                <p className="precio">Precio: $00.000</p>
                <div>
                    {/* <button id='btnDetalle' className="btn btn-outline-success my-2 my-sm-0" type="submit">Detalle</button> */}
                    <button id='btnDetalle' onClick={toggleD} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Detalle
                    </button>
                    {/* Modal de detalle */}
                    <Modal isOpen={modalD} toggle={toggleD} size="lg">
                        <div className="">
                            <img alt="logo" src={logo} />
                        </div>
                        <ModalHeader toggle={toggleD}>Detalle del Producto</ModalHeader>
                        <ModalBody>
                            {/* <div className="contenedor-foto">
                                <img src="https://picsum.photos/id/123/1200/400" alt="" />
                            </div> */}
                            <div class="d-flex flex-row mb-2">
                                <div class="p-2">
                                    <img src="https://picsum.photos/id/123/1200/400" alt="" width={280} height={280} />
                                </div>
                                <div class="p-2">
                                    <InputGroup>
                                        <InputGroupText>
                                            Nombre del producto *
                                        </InputGroupText>
                                        <Input value="data" disabled />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupText>
                                            Precio de venta *
                                        </InputGroupText>
                                        <Input value="data" disabled />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupText>
                                            Cantidad *
                                        </InputGroupText>
                                        <Input value="0" disabled />
                                    </InputGroup>
                                    <br />
                                    <InputGroup>
                                        <InputGroupText>
                                            Descripción *
                                        </InputGroupText>
                                        <Input value="data" disabled />
                                    </InputGroup>
                                </div>
                            </div>
                        </ModalBody>
                    </Modal>
                    {/* Fin Modal de detalle */}
                    <button id='btnComprar' className="btn btn-outline-success my-2 my-sm-0" type="submit">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;