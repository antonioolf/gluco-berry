import styled from 'styled-components'
import Section from '../components/Section'

const SectionStyled = styled(Section)`
  flex-direction: column;
  display: flex;
  align-items: center;
  text-align: center;

  background-color: var(--blue-2); 

  h1 {
    margin-bottom: 20px;
  }

  p {
    max-width: 900px;
    font-size: var(--font-size-normal);
    font-weight: 500;
    line-height: 30px;
  }

`

function Section9() {
  return (
    <SectionStyled>
      <h1>Acesso Imediato</h1>
      <p>Você vai receber o acesso imediatamente após a compra. Em nossa área de membros todo o conteúdo já está liberado e você poderá baixar os arquivos através do Google Drive de forma compactada ou somente o arquivo único que desejar de forma descompactada.</p>
    </SectionStyled>
  )
}

export default Section9