import React, { useState } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody,
    InputGroup, InputGroupText, Input, ModalFooter
} from 'reactstrap';
import { FaUpload } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import logo from '../img/Logo1.png';


function CardProductosEdit() {
    const [modalD, setModalD] = useState(false);
    const toggleD = () => setModalD(!modalD);

    const [modalM, setModalM] = useState(false);
    const toggleM = () => setModalM(!modalM);

    return (
        <div>

            <div className="item" onclick="cargar(this)">
                <div className="contenedor-foto">
                    <img src="https://picsum.photos/id/123/1200/400" alt="" />
                </div>
                <p className="descripcion">Nombre del producto</p>
                <p className="precio">Precio: $00.000</p>
                <div>
                    <button id='btnDetalle' onClick={toggleD} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Detalle
                    </button>
                    {/* Modal de detalle */}
                    <Modal isOpen={modalD} toggle={toggleD}>
                        <div className="logoInicioSesion">
                            <img alt="logo" src={logo} />
                        </div>
                        <ModalHeader toggle={toggleD}>Detalle del Producto</ModalHeader>
                        <ModalBody>
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
                                    Código *
                                </InputGroupText>
                                <Input value="data" disabled />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Descripción *
                                </InputGroupText>
                                <Input value="data" disabled />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Categoría *
                                </InputGroupText>
                                <select className="selecCat" name="select" disabled>
                                    <option value="value1">Value 1</option>
                                    <option value="value2" selected>Value 2</option>
                                    <option value="value3">Value 3</option>
                                </select>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Ingresar imagen
                                </InputGroupText>
                                <Button className="botonColorM" disabled>
                                    <i className="FaUpload"><FaUpload /></i> Subir Imagen
                                </Button>
                            </InputGroup>
                        </ModalBody>
                    </Modal>
                    {/* Fin Modal de detalle */}

                    <button id='btnDetalle' onClick={toggleM} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Modificar
                    </button>
                    {/* Modal de Modificar */}
                    <Modal isOpen={modalM} toggle={toggleM}>
                        <div className="logoInicioSesion">
                            <img alt="logo" src={logo} />
                        </div>
                        <ModalHeader toggle={toggleM}>Modificar Producto</ModalHeader>
                        <ModalBody>
                            <InputGroup>
                                <InputGroupText>
                                    Nombre del producto *
                                </InputGroupText>
                                <Input value="data" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Precio de venta *
                                </InputGroupText>
                                <Input value="data" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Código *
                                </InputGroupText>
                                <Input value="data" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Descripción *
                                </InputGroupText>
                                <Input value="data" />
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Categoría *
                                </InputGroupText>
                                <select className="selecCat" name="select">
                                    <option value="value1">Value 1</option>
                                    <option value="value2" selected>Value 2</option>
                                    <option value="value3">Value 3</option>
                                </select>
                            </InputGroup>
                            <br />
                            <InputGroup>
                                <InputGroupText>
                                    Ingresar imagen
                                </InputGroupText>
                                <Button className="botonColorM">
                                    <i className="FaUpload"><FaUpload /></i> Subir Imagen
                                </Button>
                            </InputGroup>
                        </ModalBody>
                        <ModalFooter className="botonesInicioSes">
                            <Button className="botonColorM">
                                <i className="FiEdit"><FiEdit /></i> Modificar
                            </Button>
                            <Button className="botonColorN" color="danger" onClick={toggleM}>
                                <i className="IoClose"><MdClose /></i> Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                    {/* Fin Modal de Modificar */}
                </div>
            </div>
        </div>
    );
}

export default CardProductosEdit;