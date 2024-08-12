import styled from "styled-components";
import Section from "../components/Section";

const FooterStyled = styled(Section)`
  background-color: var(--dark-background);
  align-items: center;
  justify-content: space-around;
  padding-top: 20px;
  padding-bottom: 20px;

  img {
    width: 165px;
  }

  .links {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      color: white;
      font-size: 20px;
      font-weight: 800;
    }

    a {
      color: white;
      font-size: 20px;
      margin-bottom: 10px;
      font-weight: 800;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

function Footer() {
  return (
    <footer>
      <FooterStyled>
        <div className="links">
          <a href="/">MD/PROCESS®</a>
        </div>
        <div className="links">
          <a href="terms-conditions">Terms & Conditions</a>
          <a href="privacy-policy">Privacy Policy</a>
        </div>
      </FooterStyled>
    </footer>
  );
}

export default Footer;
