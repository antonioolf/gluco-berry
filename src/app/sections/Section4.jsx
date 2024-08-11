import styled from "styled-components";
import Section from "../components/Section";
import sizes from "../utils/sizes";

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: var(--blue-2);
  color: white;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  h3 {
    color: black;
    font-size: 26px;
    font-weight: 800;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    line-height: 28px;
  }

  li {
    font-size: 18px;
    font-weight: 400;
  }

  .productBoxContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
    }
  }
`;

const BonusStyled = styled.div`
  display: flex;
  margin-top: 60px;
  text-align: start;

  & > div {
    flex: 1;
  }

  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: ${() => sizes.mediaLaptop}px) {
    flex-direction: column;
  }

  p {
    margin: 20px 0;
  }
  li {
    margin: 5px 0;
  }
`;

function Section4() {
  return (
    <SectionStyled>
      <h1>About GlucoBerry™ </h1>
      <BonusStyled>
        <div className="productBoxContainer">
          <img
            src="bottle-ing-presentation-removebg-preview.png"
            alt="bottle"
          />
        </div>

        <div>
          <p>
            A study from Johns Hopkins University found something surprising
            about how your body regulates blood sugar.
          </p>
          <p>
            Focusing on insulin is NOT the one-and-only, magical solution to
            supporting healthy blood sugar.
          </p>
          <p>
            See, when you have excess sugar in your bloodstream, it's insulin's
            job to taxi that sugar away. But when insulin "drops off" that
            excess sugar, it's still inside your body.
          </p>
          <p>In fact, it's in your kidneys.</p>
          <p>
            There's a Blood Sugar Drain in your kidneys that receives excess
            sugar from your insulin and then flushes it into your urine.
          </p>
          <p>
            This study from Johns Hopkins University discovered that your Blood
            Sugar Drain must be running smoothly to maintain balanced blood
            sugar.
          </p>
          <p>
            But 50% of Americans have too much of a sticky gray protein that
            clogs up their Blood Sugar Drain.
          </p>
          <p>
            When insulin delivers excess sugar to your Blood Sugar Drain, this
            clog of gray protein stops that sugar from draining away. When
            excess sugar can't drain away, it ends up right back in your
            bloodstream.
          </p>
          <p>
            Here's what this new discovery means for everyday folks who are
            concerned about their blood sugar:
          </p>
          <p>If you want to support healthy blood sugar…</p>
          <p>You MUST keep your Blood Sugar Drain flowing smoothly.</p>
        </div>
      </BonusStyled>
    </SectionStyled>
  );
}

export default Section4;
