import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import PageHeader from "../components/pageheader";
import Image from "../components/image";
import TextSection from "../components/textSection";
import Map from "../components/map";

const FindUsPage = (props) => {
  console.log(props.content.findUs[0].textBlockParking[0]);

  //GLOBAL PROPS
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;

  //TEXT
  const pageTitle = props.content.findUs[0].titleFindUs;
  const headerTextBlock =
    props.content.findUs[0].textBlockHero[0].children[0].text;
  const publicTransportTitle = props.content.findUs[0].titlePublicTransport;
  const publicTransportText =
    props.content.findUs[0].textBlockPublicTransport[0].children[0].text;
  const bikeTitle = props.content.findUs[0].titleBike;
  const bikeText = props.content.findUs[0].textBlockBike[0].children[0].text;
  const parkingTitle = props.content.findUs[0].titleParking;
  const parkingText =
    props.content.findUs[0].textBlockParking[0].children[0].text;
  const welcomeTitle = props.content.findUs[0].titlePublicTransport;

  //IMAGES
  const headerImg = urlBuild(props.content.findUs[0].imageHero.asset._ref);
  const headerAltText = props.content.findUs[0].imageHero.alt;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader
        title={pageTitle || "Titel"}
        text={headerTextBlock || "Text"}
      />
      <Image url={headerImg} alt={headerAltText} />
      <TextSection title={publicTransportTitle} text={publicTransportText} />
      <TextSection title={bikeTitle} text={bikeText} />
      <TextSection title={parkingTitle} text={parkingText} />
      <Map />
    </Layout>
  );
};

const query = groq`{
    "findUs": (*[_type == 'findUs']),
}`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { content: res },
  };
}

export default FindUsPage;
