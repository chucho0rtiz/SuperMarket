import '../styles/StylePro.css';
import React, { useState } from 'react';
import NavBarHome from '../components/NavBarHome';
import Footer from '../components/Footer';
import CardProductosEdit from '../components/CardProductosEdit';
import {
    Button, Modal, ModalHeader, ModalBody,
    InputGroup, InputGroupText, Input, ModalFooter
} from 'reactstrap';
import { FaUpload } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import logo from '../img/Logo1.png';

function GestionarProductos() {
    const [modalC, setModalC] = useState(false);
    const toggleC = () => setModalC(!modalC);
    return (
        <div>
            <NavBarHome />

            {/* <img id='img' src='https://picsum.photos/id/123/1200/400' alt='' /> */}

            <div id='div1' class="input-group">
                <input id="Crear" type="button" onClick={toggleC} className="form-control mr-sm-2 botonColorM" aria-label="Crear" value="Crear Producto" />
                {/* <button id='Crear' onClick={toggleC} className="btn btn-outline-success my-2 my-sm-0" type="submit">
                    Modificar
                </button> */}
                {/* Modal de Modificar */}
                <Modal isOpen={modalC} toggle={toggleC}>
                    <div className="logoInicioSesion">
                        <img alt="logo" src={logo} />
                    </div>
                    <ModalHeader toggle={toggleC}>Crear Producto</ModalHeader>
                    <ModalBody>
                        <InputGroup>
                            <InputGroupText>
                                Nombre del producto *
                            </InputGroupText>
                            <Input />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupText>
                                Precio de venta *
                            </InputGroupText>
                            <Input />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupText>
                                Código *
                            </InputGroupText>
                            <Input />
                        </InputGroup>
                        <br />
                        <InputGroup>
                            <InputGroupText>
                                Descripción *
                            </InputGroupText>
                            <Input />
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
                            <i className="FiEdit"><FiEdit /></i> Crear
                        </Button>
                        <Button className="botonColorN" color="danger" onClick={toggleC}>
                            <i className="IoClose"><MdClose /></i> Cancelar
                        </Button>
                    </ModalFooter>
                </Modal>
                {/* Fin Modal de Modificar */}
            </div>
            <section className="contenido">
                <div className="mostrador" id="mostrador">
                    <div className="fila">
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                    </div>
                    <div className="fila">
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                    </div>
                    <div className="fila">
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                    </div>
                    <div className="fila">
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                        <CardProductosEdit />
                    </div>
                </div>
            </section>


            <Footer />
        </div>
    );
}

export default GestionarProductos;