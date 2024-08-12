import styled from "styled-components";
import Section from "../components/Section";
import constants from "../utils/constants";

const BuyButton = styled.a`
  display: flex;
  align-items: center;
  font-size: var(--font-size-normal);
  font-weight: 800;
  border-radius: 200px;
  padding: 10px 20px;
  color: white;
  border: solid 2px white;
  text-decoration: none;
  &:hover {
    background-color: var(--blue-1);
    color: white;
  }

  & .icon {
    margin-left: 10px;
  }
`;

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
`;

function Section9() {
  return (
    <SectionStyled>
      <h1>Buy on the official website</h1>
      <BuyButton href={constants.affiliateLink}>
        Shop Now
        <span className="icon material-symbols-outlined">shopping_cart</span>
      </BuyButton>
    </SectionStyled>
  );
}

export default Section9;
