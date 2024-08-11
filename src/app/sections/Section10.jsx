import { useState } from "react";
import styled from "styled-components";
import Section from "../components/Section";

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: white;
  color: var(--dark-background);
  align-items: center;

  h1,
  h2 {
    margin-bottom: 20px;
  }

  .faqContainer {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const FoldableStyled = styled.div`
  a {
    display: block;
    color: var(--blue-1);
    text-decoration: none;
    padding: 20px;

    border-top: 1px solid #e8e8f6;
    border-left: 1px solid #e8e8f6;
    border-right: 1px solid #e8e8f6;

    border-bottom: ${(props) => (props.active ? "none" : "1px solid #e8e8f6;")};
    margin-bottom: ${(props) => (props.active ? "0px" : "20px")};

    border-radius: ${(props) => (props.active ? "5px 5px 0 0" : "5px")};

    font-size: var(--font-size-small);
    font-weight: 600;

    &:hover {
      color: var(--blue-4);
    }
  }

  p {
    padding: 0 20px 20px 20px;
    display: ${(props) => (props.active ? "block" : "none")};
    border-left: 1px solid #e8e8f6;
    border-right: 1px solid #e8e8f6;
    border-bottom: 1px solid #e8e8f6;
    border-radius: 0 0 5px 5px;
    font-size: 16px;
    margin-bottom: 20px;
    transition: height 1s;
    line-height: 2rem;
  }
`;

const Foldable = (props) => {
  const [active, setActive] = useState(props.initialActive || false);

  return (
    <FoldableStyled active={active}>
      <a
        onClick={(e) => {
          setActive(!active);
          e.preventDefault();
        }}
        href="#"
      >
        {props.title}
      </a>
      <p>{props.description}</p>
    </FoldableStyled>
  );
};

function Section10() {
  return (
    <SectionStyled>
      <h1>Frequently Asked Questions</h1>

      <div className="faqContainer">
        <Foldable
          initialActive={true}
          title={`What if I'm not happy – can I get my money back?`}
          description="Absolutely. If you're not satisfied, we'll gladly give you a full refund. Simply contact our support team, and we'll refund you 100%. That's how confident we are that you'll love your supply of GlucoBerry™."
        />

        <Foldable
          initialActive={true}
          title="How do I know that GlucoBerry™ is pure & safe?"
          description="Maqui Berry is a natural berry that grows in South America, where it's a common ingredient in many foods, and eaten regularly by hundreds of millions of people. Since its discovery as a health supplement, it's gone through extensive testing to help ensure us of its safety. Adding Maqui Berry to your diet is just as healthy as adding more blueberries to your diet. The other ingredients in GlucoBerry™ have also been tested and proven to be safe. They've each been used for years. Each batch of GlucoBerry™ is rigorously tested for purity and to ensure/protect against toxins and contaminants. Our manufacturing facility is regularly audited by the FDA for safety and purity. Like I've mentioned, we go above and beyond to guarantee that what you see on the label is exactly what you get in the bottle."
        />

        <Foldable
          initialActive={true}
          title={`How do I take GlucoBerry™?`}
          description="Just swallow one capsule with food every day. I recommend taking it in the morning to help you enjoy the positive effects throughout your day."
        />

        <Foldable
          initialActive={true}
          title={`How long should I take it before seeing noticeable results?`}
          description="Everyone's body is different, so individual results vary. With some people, Maqui Berry can help them experience increased daily energy within the first few days. With others, the long-term effect of unclogging the Blood Sugar Drain can take anywhere from a few weeks to a few months to become noticeable. For the best results, we recommend taking GlucoBerry™ as directed, eating a healthy diet, and staying active."
        />

        <Foldable
          initialActive={true}
          title={`I've tried other blood sugar health formulas in the past which didn't work – how do I know this is different?`}
          description="GlucoBerry™ isn't like other formulas. It's not just about fixing insulin resistance or your pancreas. Those approaches are fine and do work for some people, but they don't address the problem of the Blood Sugar Drain in your kidneys getting clogged. When that happens, it doesn't matter how great your pancreas or insulin work. The sugar they remove from your bloodstream just gets clogged in your kidneys, and they recycle it right back into your blood.
            Only GlucoBerry™ targets those clogs to help your body finally DRAIN your excess sugar.
            To put it simply, GlucoBerry™ couldn't be more different from other formulas. It's the first nutritional supplement in history to support your blood sugar by unclogging your Blood Sugar Drain.
            I feel confident in saying that this is the first opportunity you've ever had to use delphinidins to unclog your Blood Sugar Drain."
        />
      </div>
    </SectionStyled>
  );
}

export default Section10;
