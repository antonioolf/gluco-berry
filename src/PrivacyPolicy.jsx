import Footer from "./app/sections/Footer";
import GlobalStyle from "./app/components/GlobalStyle";
import styled from "styled-components";
import Section from "./app/components/Section";

const SectionStyled = styled(Section)`
  flex-direction: column;
  background-color: white;
  color: var(--dark-background);

  h1 {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    font-size: 18px;
    line-height: 26px;
    font-weight: 500;
    line-height: 30px;
  }
`;

function PrivacyPolicySection() {
  return (
    <SectionStyled>
      <h1>Privacy Policy</h1>
      <p>
        Last updated: 11 January , 2024 PRIVACY POLICY for bloodsugarberry.com
        At bloodsugarberry.com we are committed to safeguarding and preserving
        the privacy of our visitors. This Privacy Policy explains what happens
        to any personal data that you provide to us, or that we collect from you
        whilst you visit our site. We do update this Policy from time to time so
        please do review this Policy regularly. Information We Collect In
        running and maintaining our website we may collect and process the
        following data about you: Information about your use of our site
        including details of your visits such as pages viewed and the resources
        that you access. Such information includes traffic data, location data
        and other communication data. Information provided voluntarily by you.
        For example, when you register for information or make a purchase.
        Information that you provide when you communicate with us by any means.
        Use of Cookies Cookies provide information regarding the computer used
        by a visitor. We may use cookies where appropriate to gather information
        about your computer fin order to assist us in improving our website. We
        may gather information about your general internet use by using the
        cookie. Where used, these cookies are downloaded to your computer and
        stored on the computer’s hard drive. Such information will not identify
        you personally. It is statistical data. This statistical data does not
        identify any personal details whatsoever You can adjust the settings on
        your computer to decline any cookies if you wish. This can easily be
        done by activating the reject cookies setting on your computer. Our
        advertisers may also use cookies, over which we have no control. Such
        cookies (if used) would be downloaded once you click on advertisements
        on our website. Use of Your Information We use the information that we
        collect from you to provide our services to you. If you purchase a
        product, an order confirmation will be sent from
        Support@TheMDProcess.com to the email address provided at purchase. In
        addition to this we may use the information for one or more of the
        following purposes: To provide information to you that you request from
        us relating to our products or services. To provide information to you
        relating to other products that may be of interest to you. Such
        additional information will only be provided where you have consented to
        receive such information. To inform you of any changes to our website,
        services or goods and products. If you have previously purchased goods
        or services from us we may provide to you details of similar goods or
        services, or other goods and services, that you may be interested in.
        Where your consent has been provided in advance we may allow selected
        third parties to use your data to enable them to provide you with
        information regarding unrelated goods and services which we believe may
        interest you. Where such consent has been provided it can be withdrawn
        by you at any time. Storing Your Personal Data In operating our website
        it may become necessary to transfer data that we collect from you to
        locations outside of the European Union for processing and storing. By
        providing your personal data to us, you agree to this transfer, storing
        or processing. We do our utmost to ensure that all reasonable steps are
        taken to make sure that your data is treated stored securely.
        Unfortunately the sending of information via the internet is not totally
        secure and on occasion such information can be intercepted. We cannot
        guarantee the security of data that you choose to send us
        electronically, Sending such information is entirely at your own risk.
        Disclosing Your Information We will not disclose your personal
        information to any other party other than in accordance with this
        Privacy Policy and in the circumstances detailed below: In the event
        that we sell any or all of our business to the buyer. Where we are
        legally required by law to disclose your personal information. To
        further fraud protection and reduce the risk of fraud. Third Party Links
        On occasion we include links to third parties on this website. Where we
        provide a link it does not mean that we endorse or approve that site’s
        policy towards visitor privacy. You should review their privacy policy
        before sending them any personal data. Contacting Us Please do not
        hesitate to contact us regarding any matter relating to this Privacy
        Policy at Support@TheMDProcess.com
      </p>
    </SectionStyled>
  );
}

function PrivacyPolicy() {
  return (
    <main>
      <GlobalStyle />

      <PrivacyPolicySection />
      <Footer />
    </main>
  );
}

export default PrivacyPolicy;
