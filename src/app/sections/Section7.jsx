import styled from 'styled-components'
import Section from '../components/Section'
import ButtonPrimary from '../components/ButtonPrimary'
import sizes from '../utils/sizes'
import constants from '../utils/constants'

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: var(--blue-2);

  h1, h2 {
    text-align: center;
    margin: 0 auto;
    max-width: 800px;
  }

  h2 {
    margin-top: 20px;
  }

  img {
    width: 100%;
  }

  .stamps {
    width: 400px;
    margin: 0 auto 0 auto;
  }
`

const PlansContainerStyled = styled.div`
  display: flex;
  margin-top: 50px;
  text-align: center;
  justify-content: center;

  @media (max-width: ${() => sizes.mediaTablet}px) {
    flex-direction: column;
  }

  h2 {
    font-size: var(--font-size-medium);
    font-weight: 800;
    line-height: 50px;
  }

  h3 {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
  }

  .plan {
    background-color: white;
    color: black;
    margin: 0 10px;
    border-radius: 20px;
    padding: 40px 20px;

    margin-bottom: 50px;

    ul {
      text-align: center;
      display: flex;
      flex-direction: column;
      
      padding: 30px 0;

      li {
        margin: 10px 0;
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;

        .material-symbols-outlined {
          margin-right: 5px;
          color: var(--blue-2);

          &.block {
            color: var(--red-1);
          }
        }
      }
    }

    .price {
      div {
        font-size: var(--font-size-normal);
      }

      h1 {
        font-size: 60px;
        font-weight: 800;
      }

      a {
        margin-top: 20px;
        display: inline-block;
        font-size: 26px;
        font-weight: 800;
        padding: 15px 25px;
      }
    }
  }
`

function Section7() {
  return (
    <SectionStyled>
      <h1>Qual o valor?</h1>
      <h2>Temos duas opções disponíveis, você escolhe qual material deseja ter acesso!</h2>
      <PlansContainerStyled>
        <div className='plan'>
          <h2>{constants.productName} Essencial</h2>
          <h3>Pagamento Único. Acesso Vitalício.</h3>
          <ul>
            <li><span className="material-symbols-outlined">check_circle</span>+8500 Artes para Mídias Sociais</li>
            <li><span className="material-symbols-outlined">check_circle</span>+Bônus Pack Canva</li>
            <li><span className="material-symbols-outlined">check_circle</span>+1900 Artes para Stories</li>
            <li><span className="material-symbols-outlined">check_circle</span>+950 Artes para Capas de Facebook</li>
            <li><span className="material-symbols-outlined block">block</span>+2200 Artes para Flyers</li>
            <li><span className="material-symbols-outlined block">block</span>+1300 Mockups Editáveis</li>
            <li><span className="material-symbols-outlined block">block</span>+1500 Cartões de Visita</li>
            <li><span className="material-symbols-outlined block">block</span>+45GB de Imagens em Full HD</li>
            <li><span className="material-symbols-outlined block">block</span>+35 Mil Imagens em PNG</li>
            <li><span className="material-symbols-outlined block">block</span>+10GB em Elementos Gráficos</li>
            <li><span className="material-symbols-outlined block">block</span>+4 Bônus Incríveis</li>
            <li><span className="material-symbols-outlined block">block</span> E muito mais...</li>
          </ul>
          <div className="price">
            <div>De <s>R$ 57,00</s> por apenas:</div>
            <h1>R$ 10</h1>
            <div>em até 2x de R$ 5,22</div>
            <ButtonPrimary href="https://pay.hotmart.com/C80389007J">EU QUERO O ESSENCIAL!</ButtonPrimary>
          </div>          
        </div>
        <div className='plan'>
          <h2>{constants.productName} Premium</h2>
          <h3>Pagamento Único. Acesso Vitalício.</h3>
          <ul>
            <li><span className="material-symbols-outlined">check_circle</span>+8500 Artes para Mídias Sociais</li>
            <li><span className="material-symbols-outlined">check_circle</span>+Bônus Pack Canva</li>
            <li><span className="material-symbols-outlined">check_circle</span>+1900 Artes para Stories</li>
            <li><span className="material-symbols-outlined">check_circle</span>+950 Artes para Capas de Facebook</li>
            <li><span className="material-symbols-outlined">check_circle</span>+2200 Artes para Flyers</li>
            <li><span className="material-symbols-outlined">check_circle</span>+1300 Mockups Editáveis</li>
            <li><span className="material-symbols-outlined">check_circle</span>+1500 Cartões de Visita</li>
            <li><span className="material-symbols-outlined">check_circle</span>+45GB de Imagens em Full HD</li>
            <li><span className="material-symbols-outlined">check_circle</span>+35 Mil Imagens em PNG</li>
            <li><span className="material-symbols-outlined">check_circle</span>+10GB em Elementos Gráficos</li>
            <li><span className="material-symbols-outlined">check_circle</span>+4 Bônus Incríveis</li>
            <li><span className="material-symbols-outlined">check_circle</span>E muito mais...</li>
          </ul>
          <div className="price">
            <div><s>De R$ 87,00</s> por apenas:</div>
            <h1>R$ 27</h1>
            <div>em até 5x de R$ 5,88</div>
            <ButtonPrimary href="https://pay.hotmart.com/C80389007J">EU QUERO O PREMIUM!</ButtonPrimary>
          </div>
        </div>
      </PlansContainerStyled>
      <img className='stamps' src="Compra-Segura.png.png" alt="" />
    </SectionStyled>
  )
}

export default Section7