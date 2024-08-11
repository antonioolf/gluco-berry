import styled from 'styled-components'
import Section from '../components/Section'
import Slider from '../components/slider'
import constants from '../utils/constants'

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: var(--dark-background);

  h1, h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .sliderContainer {
    margin: 20px auto;
    width: 100%;

    .comment {
      background-color: white;
      color: var(--dark-background);
      min-height: 140px;
      margin: 10px;
      border-radius: 10px;
      text-align: start;

      span {
        padding: 15px 0;
        border-bottom: solid 1px #e1e8ed;
        width: 100%;
        display: block;        
        text-indent: 15px;
        font-weight: bold;
      }

      p {
        padding: 20px;
      }
    }
  }
`

function Section6() {
  return (
    <SectionStyled>
      <h1>O que os clientes dizem?</h1>
      <h2>Veja depoimentos reais de nossos clientes satisfeitos:</h2>

      <Slider slidesPerPiew={3}>
        <div className="comment">
          <span>Fernanda Almeida</span>
          <p>Tudo bem organizado como dizem, me surpreendi por esse valor, é realmente muito bom.</p> 
        </div>
        <div className="comment">
          <span>Otávio Dias</span>
          <p>As artes são muito boas, o {constants.productName} tá me ajudando muito mesmo, por esse valor, tá de graça!</p> 
        </div>
        <div className="comment">
          <span>Guilherme Costa</span>
          <p>Quem não comprar, está perdendo tempo! É um valor muito baixo pra todo esse conteúdo de qualidade!</p> 
        </div>
        <div className="comment">
          <span>Pedro Alves Barbosa</span>
          <p>É muito arquivo mesmo, fiquei surpreso quando recebi o acesso.</p> 
        </div>
        <div className="comment">
          <span>José Oliveira</span>
          <p>Trabalho incrível, tudo muito organizado e de bom gosto.</p> 
        </div>
        <div className="comment">
          <span>Júlio Gomes</span>
          <p>É ótimo! Não esperava ver tanta coisa por esse valor. Estão de parabéns.</p> 
        </div>
        <div className="comment">
          <span>Julian Silva</span>
          <p>Está me ajudando muito, utilizo todo dia para facilitar na criação das artes por aqui.</p> 
        </div>
        <div className="comment">
          <span>Fernanda Almeida</span>
          <p>Tudo bem organizado como dizem, me surpreendi por esse valor, é realmente muito bom.</p> 
        </div>
        <div className="comment">
          <span>Otávio Dias</span>
          <p>As artes são muito boas, o {constants.productName} tá me ajudando muito mesmo, por esse valor, tá de graça!</p> 
        </div>
        <div className="comment">
          <span>Guilherme Costa</span>
          <p>Quem não comprar, está perdendo tempo! É um valor muito baixo pra todo esse conteúdo de qualidade!</p> 
        </div>
        <div className="comment">
          <span>Pedro Alves Barbosa</span>
          <p>É muito arquivo mesmo, fiquei surpreso quando recebi o acesso.</p> 
        </div>
        <div className="comment">
          <span>José Oliveira</span>
          <p>Trabalho incrível, tudo muito organizado e de bom gosto.</p> 
        </div>
        <div className="comment">
          <span>Júlio Gomes</span>
          <p>É ótimo! Não esperava ver tanta coisa por esse valor. Estão de parabéns.</p> 
        </div>
      </Slider>
    </SectionStyled>
  )
}

export default Section6