import styled from 'styled-components'
import Section from '../components/Section'
import Slider from "../components/slider"

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: black;
  color: white;
  text-align: center;

  /* h1 {
    font-size: var(--font-size-big);
  } */

  h3 {
    font-size: var(--font-size-normal);
    font-weight: 500;
    line-height: 30px;
  }

  .sliderContainer {
    margin: 20px auto;
    width: 100%;

    img {
      border-radius: 20px;
      width: 90%;
    }
  }
  
`

function Section3() {
  return (
    <SectionStyled>
      <h1>Artes de muita qualidade</h1>
      <h3>São artes editáveis, você consegue <b>modificar do jeito que desejar</b>. 
      <br />Separadas em diversas áreas e categorias. Veja uma prévia:</h3>
      <Slider slidesPerPiew={3}>
        <img src="slide2/1.jpg" alt="" />
        <img src="slide2/2.jpg" alt="" />
        <img src="slide2/3.jpg" alt="" />
        <img src="slide2/4.jpg" alt="" />
        <img src="slide2/5.jpg" alt="" />
        <img src="slide2/6.jpg" alt="" />
        <img src="slide2/7.jpg" alt="" />
        <img src="slide2/8.jpg" alt="" />
        <img src="slide2/9.jpg" alt="" />
        <img src="slide2/10.jpg" alt="" />
        <img src="slide2/11.jpg" alt="" />
        <img src="slide2/12.jpg" alt="" />
        <img src="slide2/13.jpg" alt="" />
        <img src="slide2/14.jpg" alt="" />
      </Slider>
    </SectionStyled>
  )
}

export default Section3