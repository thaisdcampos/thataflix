import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain'
import VideoCardGroup from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';

function App() {
  return (
    <div>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end?"}
      />

      {
        dadosIniciais.categorias.map(categoria => 
          <VideoCardGroup 
            ignoreFirstVideo
            category={categoria}
          />
        )
      }
      
      <Footer />
    </div>
  );
}

export default App;
