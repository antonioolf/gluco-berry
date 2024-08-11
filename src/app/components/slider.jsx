import { useRef, useEffect } from 'react'
import styled from 'styled-components'
import SwiperCore, { Autoplay } from 'swiper'

SwiperCore.use([Autoplay]);

import 'swiper/css'
import 'swiper/css/bundle'

const SliderStyled = styled.div`
  text-align: center;
  margin: 20px 0;
`

const Slider = (props) => {
  if (props.children == null) {
    return <></>
  }

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('progress', (e) => {
      const [swiper, progress] = e.detail;
      // console.log(progress);
    });

    swiperElRef.current.addEventListener('slidechange', (e) => {
      console.log('slide changed');
    });
  }, []);

  return (
    <SliderStyled className="sliderContainer">
      <swiper-container
        ref={swiperElRef}
        slides-per-view={props.slidesPerPiew || 1}
        modules={[Autoplay]}
        navigation="true"
        pagination="true"
        autoplay={{ delay: 1, disableOnInteraction: false }}
      >{
          props.children.map((item, index) => (
            <swiper-slide key={index}>{item}</swiper-slide>
          ))
        }</swiper-container>
    </SliderStyled>
  )
}

export default Slider;