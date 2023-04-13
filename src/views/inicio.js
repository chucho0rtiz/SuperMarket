import '../styles/Style.css';
import NavBar from '../components/NavBar';
import Carrusel from "../components/Carrusel";
import Footer from '../components/Footer';


function Inicio() {


    return (
        <div>
            <NavBar />
            <Carrusel />
            <div className='contenido'>
                <div className='contenidoTitulo'>
                    <h3>About Your Shop</h3>
                </div>
                <div className='contenidoParrafo'>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Sed ut perspiciatis
                        unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                        beatae vitae dicta sunt explicabo.  Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Sed ut
                        perspiciatis unde omnis  explicabo.   Sed ut perspiciatis unde omnis iste natus error
                        sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
                        illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  Sed ut
                        perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo.  Sed ut perspiciatis unde omnis iste
                        natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                        ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt e
                        xplicabo.  Sed ut perspiciatis unde omnis  explicabo.
                    </p>
                </div>
            </div>
            <Footer />
        </div >
    );

}

export default Inicio; 