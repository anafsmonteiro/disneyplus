import './App.css'
import Banner from './componentes/Banner';
import Header from './componentes/Header';
import Studios from './componentes/Studios';

function App() {
  return (
    <div className="App">
   <Header />
   <Banner />
   <Studios />
   <sectio className='novidades'>
    <h3 className='titulo-sessao'>Novidades no Disney+</h3>
    <img src='https://th.bing.com/th/id/R.90bc203bb0ddd55ca9cafa2c583552ba?rik=2nWDSb2T2kx4qg&riu=http%3a%2f%2fwww.loucademiadecinema.com.br%2fwp-content%2fuploads%2f2019%2f06%2fthe-lion-king-5ccd83f34dede.jpg&ehk=DFny5y8nZPkbWS5lS9S386sxSzRUgZ62tFsMRY1BMHQ%3d&risl=&pid=ImgRaw&r=0' alt='img' className=''/>
   </sectio>
    </div>
  );
}

export default App;
