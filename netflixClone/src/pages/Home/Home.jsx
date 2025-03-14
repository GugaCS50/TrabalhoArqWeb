import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpeg'
import hero_title from '../../assets/penta_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import TitleCardsPopular from '../../components/TitleCards/TitleCardsPopular'
import TitleCardsNowPlaying from '../../components/TitleCards/TitleCardsNowPlaying'
import TitleCardsTopRated from '../../components/TitleCards/TitleCardsTopRated'
import TitleCardsTrending from '../../components/TitleCards/TitleCardsTrending'
import TitleCardsSimilar from '../../components/TitleCards/TitleCardsSimilar'

const Home = () => {
  return (
    <div className='Home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt='' className='banner_img'/>
        <div className="hero_caption">
          <img src={hero_title} alt='' className='caption_img'/>
          <p>O documentário mostra os bastidores da seleção brasileira que conquistou a Copa do Mundo de 2002, com imagens inéditas e entrevistas com os jogadores.</p>
          <div className="hero_btns">
            <button className='btn'><img src={play_icon} alt=''/>Assistir</button>
            <button className='btn dark_btn'><img src={info_icon} alt=''/>Sobre</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more_cards">
        <TitleCardsSimilar title={"Baseado no que você assiste"}/>
        <TitleCardsNowPlaying title={"Em Cartaz"}/>
        <TitleCardsTopRated title={"Bem Avaliados"}/>
        <TitleCardsPopular title={"Populares"}/>
        <TitleCardsTrending title={"Tendências"}/>
      </div>
    </div>
  )
}

export default Home
