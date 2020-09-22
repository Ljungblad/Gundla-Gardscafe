import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import InstagramFeed from "../components/instagramfeed";
import PageHeader from "../components/pageheader";
import Image from "../components/image";
import TextSection from "../components/textSection";
import LinkedTextSection from "../components/linkedTextSection";
import SingleTextSection from "../components/singletextsection";

const Index = (props) => {
  const [instaData, setInstaData] = React.useState("");
  React.useEffect(() => {
    fetch("https://www.instagram.com/gundlagardscafe/?__a=1")
      .then((resp) => resp.json())
      .then((json) => setInstaData(json));
  }, [0]);

  let instaGrid = [];
  if (instaData) {
    instaGrid = instaData.graphql.user.edge_owner_to_timeline_media.edges;
  }

  //GLOBAL PROPS
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;

  //TEXT
  const pageTitle = props.content.titleHome;
  const pageSlogan = props.content.sloganHome;
  const headerTextBlock = props.content.textBlockHero[0].children[0].text;
  const titleCafe = props.content.headerCafe;
  const cafeTextBlock = props.content.textBlockCafe[0].children[0].text;
  const titleFind = props.content.headerFind;
  const findTextBlock = props.content.textBlockFind[0].children[0].text;
  const titleCatering = props.content.headerCatering;
  const cateringTextBlock = props.content.textBlockCatering[0].children[0].text;
  const titleEvent = props.content.headerEvent;
  const eventTextBlock = props.content.textBlockEvent[0].children[0].text;
  const titleRent = props.content.headerRent;
  const rentTextBlock = props.content.textBlockRent[0].children[0].text;

  //IMAGES
  const imageHero = urlBuild(props.content.imageHero.asset._ref);
  const heroAltText = props.content.imageHero.asset.alt;
  const secondImg = urlBuild(props.content.secondImage.asset._ref);
  const secondAltText = props.content.secondImage.asset.alt;
  const thirdImg = urlBuild(props.content.thirdImage.asset._ref);
  const thirdAltText = props.content.thirdImage.asset.alt;
  const fourthImg = urlBuild(props.content.fourthImage.asset._ref);
  const fourthAltText = props.content.fourthImage.asset.alt;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader title={pageTitle} text={pageSlogan} />
      <Image url={imageHero} alt={heroAltText} />
      <SingleTextSection title="" text={headerTextBlock} />
      <Image url={secondImg} alt={secondAltText} />
      <LinkedTextSection
        title={titleCafe}
        text={cafeTextBlock}
        link="/cafe"
        linkType="text"
        backgroundColor="#FFFFFF"
        textColor="#000201, 100 %"
        width="50"
      />
      <Image url={thirdImg} alt={thirdAltText} />
      <LinkedTextSection
        title={titleFind}
        text={findTextBlock}
        link="/findus"
        linkType="text"
        backgroundColor="#F3F1E7"
        textColor="#000201"
        width="50"
      />
      <LinkedTextSection
        title={titleCatering}
        text={cateringTextBlock}
        link="/catering"
        linkType="arrow"
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="50"
      />
      <Image url={fourthImg} alt={fourthAltText} />
      <LinkedTextSection
        title={titleEvent}
        text={eventTextBlock}
        link="/event"
        linkType="text"
        backgroundColor="#F3F1E7"
        textColor="#000201"
        width="50"
      />
      <LinkedTextSection
        title={titleRent}
        text={rentTextBlock}
        link="/rent"
        linkType="arrow"
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="100"
      />
      <InstagramFeed instagramData={instaGrid} />
    </Layout>
  );
};

const query = groq`{
  "home": (*[_type == 'home']),
}`;

export async function getStaticProps() {
  const res = await client.fetch(query);
  // const resInsta = await fetch(
  //   'https://www.instagram.com/gundlagardscafe/?__a=1'
  // );
  // const InstagramJson = await resInsta.json();

  return {
    props: { content: res.home[0] }, // will be passed to the page component as props
  };
}

export default Index;
