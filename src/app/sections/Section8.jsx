import styled from 'styled-components'
import Section from '../components/Section'
import sizes from '../utils/sizes'

const SectionStyled = styled(Section)`
  @media (max-width: ${() => sizes.mediaTablet}px) {
    flex-direction: column;
    text-align: center;
  }
  
  background-color: var(--blue-3);

  .left, .right {
    flex: 1;
  }

  .left {
    p {
      margin: 20px 0;
      font-size: var(--font-size-normal);
    }
  }

  .right {
    display: flex;
    justify-content: center;
  }

`

function Section8() {
  return (
    <SectionStyled>
      <div className='left'>
        <h1>Você está seguro</h1>
        <p>Utilizamos uma plataforma muito segura para pagamentos, a Hotmart, reconhecida por sua segurança de ponta. </p>
        <p>Além disso, você tem 7 dias de garantia para solicitar o reembolso, independente do motivo</p>
      </div>
      <div className='right'>
        <img src="garantia-7-dias.png.png" alt="" />
      </div>
    </SectionStyled>
  )
}

export default Section8