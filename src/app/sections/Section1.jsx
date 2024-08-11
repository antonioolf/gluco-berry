import styled from "styled-components";
import Section from "../components/Section";
import ButtonOutline from "../components/ButtonOutline";
import sizes from "../utils/sizes";
import constants from "../utils/constants";

const SectionStyled = styled(Section)`
  & .offer {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .icon {
      color: green;
    }

    margin-bottom: 20px;
    & h3 {
      display: flex;
      margin: 10px 0;
    }
  }

  @media (max-width: ${() => sizes.mediaTablet}px) {
    flex-direction: column-reverse;
  }

  @media (min-width: ${() => sizes.mediaLaptopL}px) {
    padding-top: 120px;
  }

  background-color: white;
  padding-bottom: 110px;

  .text {
    flex: 1.1;
    color: var(--dark-background);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    b {
      color: var(--blue-1);
    }

    .paragraphContainer {
      margin: 30px 0 50px 0;
      p {
        font-size: var(--font-size-normal);
        margin: 20px 0;
        line-height: 30px;
      }
    }

    & > a {
      display: flex;
      align-items: center;

      & .icon {
        margin-left: 5px;
        font-weight: bolder;
      }
    }
  }

  .imgContainer {
    flex: 1;

    img {
      width: 95%;
    }
  }
`;

function Section1() {
  return (
    <SectionStyled>
      <div className="text">
        <h1>Is Your Blood Sugar Drain Blocked?</h1>

        <div className="paragraphContainer">
          <p>
            Support healthy blood sugar with <b>GlucoBerry™</b>, formulated
            using the latest Ivy League research, and backed by real-world
            results.
          </p>
          <div className="offer">
            <h3>
              <span className="icon material-symbols-outlined">check</span> Up
              to 34% OFF
            </h3>
            <h3>
              <span className="icon material-symbols-outlined">check</span>
              180-Day Money-Back Guarantee
            </h3>
            <h3>
              <span className="icon material-symbols-outlined">check</span>
              One-time payment.
            </h3>
          </div>
          <b>limited time special offer!</b>
        </div>

        <ButtonOutline href={constants.affiliateLink}>
          Access official website
          <span className="icon material-symbols-outlined">shopping_cart</span>
        </ButtonOutline>
      </div>
      <div className="imgContainer">
        <img src="hero.png" alt="Gluco Berry" />
      </div>
    </SectionStyled>
  );
}

export default Section1;
