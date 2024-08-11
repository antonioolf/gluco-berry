import styled from 'styled-components'
import Section from '../components/Section'
import Slider from '../components/slider'
import sizes from '../utils/sizes'
import constants from '../utils/constants'

const SectionStyled = styled(Section)`
  background-color: var(--dark-background);
  color: white;
  flex-direction: column;
  align-items: center;
  padding-bottom: 60px;

  .titlesContainer {
    text-align: center;

    h1 {
      margin-bottom: 20px;
    }

    h2 {
      margin-bottom: 25px;
      font-size: var(--font-size-normal);
    }
  }

  .listsContainer {
    display: flex;
    justify-content: space-around;
    width: 100%;

    @media (max-width: ${() => sizes.mediaTablet}px) {
      flex-direction: column;
    }

    li {
      width: 100%;
      font-size: var(--font-size-normal);
      margin: 5px 0;
      display: flex;
      align-items: center;
      float: left;

      .material-symbols-outlined {
        margin-right: 5px;
        color: var(--blue-1);
        font-weight: bold;
      }
    }
  }

  .sliderContainer {
    width: 100%;
  }
`

const FeaturesStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: ${() => sizes.mediaTablet}px) {
    grid-template-columns: 1fr;
  }

  .item {
    border: solid 3px var(--blue-1);
    border-radius: 20px;
    padding: 30px 10px;
    display: flex;
    .icon {
      font-size: 50px;
      font-weight: bold;
      display: flex;
      width: 10%;
      height: 100%;
      color: var(--blue-1);
    }

    .icon + div {
      width: 90%;
      padding-left: 20px;
      line-height: 27px;

      h2 {
        color: var(--blue-1);
        font-weight: bold;
        font-size: 26px;
        margin-bottom: 20px;
      }

      p {
        font-size: 18px;
      }
    }
  }

`

function Section2() {
  return (
    <SectionStyled>
      <div className='titlesContainer'>
        <h1>E o que tem no {constants.productName}?</h1>
        <h2>Veja tudo que você vai receber:</h2>
      </div>
      <div className='listsContainer'>
        <ul>
          <li><span className="material-symbols-outlined">check</span> <span>+8500 Artes para <b>Mídias Sociais</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+1900 Artes para <b>Stories</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+950 Artes para <b>Capas de Facebook</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+2200 Artes para <b>Flyers</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+1300 <b>Mockups Editáveis</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+1500 <b>Cartões de Visita</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+45GB de <b>Imagens em Full HD</b></span></li> 
          <li><span className="material-symbols-outlined">check</span> <span>+35 Mil <b>Imagens em PNG</b></span></li> 
        </ul>
        <ul>
          <li><span className="material-symbols-outlined">check</span> <span>+480 <b>Efeitos de Texto</b></span></li>
          <li><span className="material-symbols-outlined">check</span> <span>Várias <b>Letras 3D</b> Incríveis</span></li>
          <li><span className="material-symbols-outlined">check</span> <span>+5000 <b>Ícones e Emojis Premium</b></span></li>
          <li><span className="material-symbols-outlined">check</span> <span>+10GB em <b>Elementos Gráficos</b></span></li>
          <li><span className="material-symbols-outlined">check</span> <span>Gradientes, Ações, Brushes, Efeitos...</span></li>
          <li><span className="material-symbols-outlined">check</span> <span>Modelos de <b>Cardápios</b> Editáveis</span></li>
          <li><span className="material-symbols-outlined">check</span> <span><b>+4 Bônus Exclusivos</b></span></li>
          <li><span className="material-symbols-outlined">check</span> <span>E <b>muito</b> mais...</span></li>
        </ul>
      </div>
      <Slider>
        <img src="slide1/1.png" alt="" />
        <img src="slide1/2.png" alt="" />
        <img src="slide1/3.png" alt="" />
        <img src="slide1/4.png" alt="" />
        <img src="slide1/5.png" alt="" />
        <img src="slide1/6.png" alt="" />
        <img src="slide1/7.png" alt="" />
        <img src="slide1/8.png" alt="" />
        <img src="slide1/9.png" alt="" />
        <img src="slide1/10.png" alt="" />
        <img src="slide1/11.png" alt="" />
        <img src="slide1/12.png" alt="" />
        <img src="slide1/13.png" alt="" />
      </Slider>
      <FeaturesStyled>
        <div className='item'>
          <span className="icon material-symbols-outlined">edit_square</span>
          <div>
            <h2>Artes Editáveis</h2>
            <p>As artes são editáveis, você adapta conforme a sua necessidade.</p>
          </div>
        </div>
        <div className='item'>
          <span className="icon material-symbols-outlined">query_stats</span>
          <div>
            <h2>100% Organizado</h2>
            <p>Você poderá visualizar todas as artes da categoria e decidir se quer baixar todas de uma vez ou de forma individual.</p>
          </div>
        </div>
        <div className='item'>
          <span className="icon material-symbols-outlined">all_inclusive</span>
          <div>
            <h2>Acesso Vitalício</h2>
            <p>Acesso ilimitado por um valor único e extremamente acessível.</p>
          </div>
        </div>
        <div className='item'>
          <span className="icon material-symbols-outlined">group</span>
          <div>
            <h2>Iniciante ou Profissional</h2>
            <p>É só saber as ferramentas básicas do programa que você conseguirá utilizar.</p>
          </div>
        </div>
      </FeaturesStyled>
    </SectionStyled>
  )
}

export default Section2