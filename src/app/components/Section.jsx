import styled from "styled-components";
import sizes from "../utils/sizes";

const Section = styled.section`
  display: flex;
  color: white;

  h1 {
    font-size: var(--font-size-big);
    font-weight: 800;
  }

  h2 {
    font-size: var(--font-size-normal);
    font-weight: 500;
  }

  li {
    font-size: var(--font-size-normal);
    display: block;
    float: left;
  }

  @media (max-width: ${() => sizes.mediaMobile}px) {
    background-color: grey;
    padding: 15px 15px;
  }
  @media (min-width: ${() => sizes.mediaMobile}px) {
    background-color: blue;
    padding: 30px 30px;
  }
  @media (min-width: ${() => sizes.mediaTablet}px) {
    background-color: green;
    padding: 60px 10px;
  }
  @media (min-width: ${() => sizes.mediaLaptop}px) {
    background-color: orange;
    padding: 60px 10px;
  }
  @media (min-width: ${() => sizes.mediaLaptopL}px) {
    background-color: brown;
    padding: 60px 240px;
  }
  @media (min-width: ${() => sizes.mediaDesktop}px) {
    background-color: purple;
    padding: 60px 25px;
  }
`;

export default Section;
