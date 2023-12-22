import logo from './logo.svg';
import './App.css';
import conoceLogo from './imagenes/logo-conoce.png';
import Testimonio from './componentes/Testimonio';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Cot from './paginas/Cot';
import Gal from './paginas/Gal';
import Cuy from './paginas/Cuy';
import Plat from './paginas/Plat';
import Altar from './paginas/Altar';
import Tayos from './paginas/Tayos';
import NotFound from './paginas/NotFound'
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState, useEffect } from 'react';
import Formulario from './componentes/Formulario';





function App() {
const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
    }
  const reiniciarContador = () => {
    setNumClics(0);
    }
//    
    
      useEffect(() => {
       console.log('despues del render que se ejecute aplicando el contador')
    },[setNumClics]);
//
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={
   <div className="App">
         
      <div className='Conoce-logo-contenedor'>
                <img className='Conoce-logo' alt='logo'
        src={conoceLogo}/>
        <br/>
        <h3> Somos una empresa ecológica, con alianzas nacionales para ofrecerte el mejor viaje de tu vida, proveemos de distinos sitios de alojamiento 5 estrellas, nuestra flota de vehiculos te asistirá y acompañara en todo momento, nuestros selecto grupo de guías ASEGUIM y turisticos con certificaciones internacionales, harán de tu estancia en nuestro país una experiencia única con momentos inolvidables </h3>
      </div>

      <div className='paisajes'>
        <h2 class="Titul" id="title1">Los mejores sitios de temporada</h2>
        <br/>
        <table>
            <thead>
              <tr>
                <th>Costa</th><th>Sierra</th><th>Oriente</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td estilo="costa"><img className='img' 
                src="https://as1.ftcdn.net/v2/jpg/04/82/08/08/1000_F_482080893_C37gTatNwSofYSFJDlBZEIRwTXEf8Kn9.jpg" alt=""/> <br/> <a href='/Gal'><h3> Galapagos </h3></a> </td>
              <td estilo="sierra"><img className='img' 
                src="https://www.comecuamex.com/wp-content/uploads/2021/04/cotopaxi-1200x600-1-768x475.jpg" alt=""/> <br/> <a href='/Cot'> <h3>Volcán Cotopaxi </h3></a></td>
              <td estilo="oriente"><img className='img'
                src="https://atlasviajes.com.ec/wp-content/uploads/2019/06/reserva-cuyaveno-jamu-tres-dias-lodge-atlas-viajes-agencia-de-turismo-quito-ecuador.jpg" alt=""/><br/> <a href='/Cuy'> <h3>Cuyabeno </h3> </a></td>
              </tr>
              <tr>
              <td estilo="costa"><img className='img' 
                src="https://hosteriadelparque.com/wp-content/uploads/2017/08/Isla-de-la-plata-1.jpeg" alt=""/> <br/> <a href='/Plat'> <h3>Isla de la Plata </h3></a></td>
              <td estilo="sierra"><img className='img'
                src="https://tourcenter.ec/wp-content/uploads/2020/12/Altar-2-768x592.jpeg" alt=""/> <br/>  <a href='/Altar'> <h3>El Altar </h3> </a></td>
              <td estilo="oriente"><img className='img'
                src="https://assets.isu.pub/document-structure/230519230405-4fce61a1a52b3f4c3b9ecdd2b9f97183/v1/e96b62f96ba793f4154980a13b56dea0.jpeg" alt=""/> <br/> <a href='/Tayos'> <h3>Cueva de los Tayos </h3> </a></td>
            </tr>
            </tbody>
        </table>
      </div>
      <br/>
     
      <div className='contenedor-contador'>
      <br/>
          <h3> Permitenos conocer tus requerimientos ¿Cuantas personas viajaran contigo?:</h3>

          <Formulario />        
         
          <Contador numClics={numClics} />
          <br/>
          <Boton 
            texto='Agregar personas'
            esBotonDeClic={true}
            manejarClic={manejarClic}/>
          <Boton 
            texto='Enviar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador}/>



</div>



      <div>
        <h1> Comentarios de nuestras visitas destacadas </h1>
        <Testimonio 
        nombre='Megan Fox'
        pais='Estados Unidos'
        imagen='Megan'
        cargo='Modelo'
        lugar='El Altar'
        testimonio='Delighted to get to know Ecuador throught Conoce mi Ecuador, I have decided to visit this beautiful destination once a year, but my visit will be with Conoce mi Ecuador, Everyone his workers are funy and always can help us'
        />
        <Testimonio 
        nombre='Jim Carrey'
        pais='Estados Unidos'
        imagen='Jim'
        cargo='Actor'
        lugar='Cotopaxi'
        testimonio='I am convinced that everyone should come to see Ecuador, it is simply great, I have been visiting different places in the world for a long time and I have been impressed, I should have come to film one of my movies here, the people love me and I love them ( Jim makes one of his funny gestures and shakes our hands)'
        />
        <Testimonio 
        nombre='Selena Gomez'
        pais='Estados Unidos - Latina'
        imagen='Selena'
        cargo='Cantante'
        lugar='La Cueva de los Tayos'
        testimonio='Deseo filmar mi próximo álbum discográfico en alguno de estos paraisos, con Conoce Ecuador pude desarrollar las ideas para mis buevas producciones, ademas de venir con mi pareja, invite a mis amigos a esta experiencia maravillosa en este pais latino lleno de gran biodiversidad, lo recomiendo¡'
        />
      </div>

  </div>
  } />
  <Route path="/Cot" element={<Cot />}/> 
  <Route path="/Gal" element={<Gal />}/> 
  <Route path="/Cuy" element={<Cuy />}/>
  <Route path="/Plat" element={<Plat />}/>
  <Route path="/Altar" element={<Altar />}/>
  <Route path="/Tayos" element={<Tayos />}/>
  <Route path='*' element={<NotFound />}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App;
