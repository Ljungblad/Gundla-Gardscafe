import groq from "groq";
import client from "../client";
import urlBuild from "../imageBuilder";
import Layout from "../components/layout";
import InstagramFeed from "../components/instagramfeed";
import PageHeader from "../components/pageheader";
import Image from "../components/image";
import TextSection from "../components/textSection";
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
      <Image url={imageHero} alt={heroAltText} width="100" />
      <SingleTextSection
        title=""
        text={headerTextBlock}
        textColor="#FFFFFF"
        backgroundColor="#242B18"
      />
      <Image url={secondImg} alt={secondAltText} width="50" />
      <TextSection
        title={titleCafe}
        text={cafeTextBlock}
        link="/cafe"
        linkType="text"
        backgroundColor="#FFFFFF"
        textColor="#000201"
        width="50"
        height="410"
        align="center"
      />
      <Image url={thirdImg} alt={thirdAltText} width="100" />
      <TextSection
        title={titleFind}
        text={findTextBlock}
        link="/findus"
        linkType="text"
        backgroundColor="#F3F1E7"
        textColor="#000201"
        width="50"
        height="410"
        align="center"
      />
      <TextSection
        title={titleCatering}
        text={cateringTextBlock}
        link="/catering"
        linkType="arrow"
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="50"
        height="410"
        align="center"
      />
      <Image url={fourthImg} alt={fourthAltText} width="50" />
      <TextSection
        title={titleEvent}
        text={eventTextBlock}
        link="/event"
        linkType="text"
        backgroundColor="#F3F1E7"
        textColor="#000201"
        width="50"
        align="center"
      />
      <TextSection
        title={titleRent}
        text={rentTextBlock}
        link="/rent"
        linkType="arrow"
        backgroundColor="#C05B3D"
        textColor="#FFFFFF"
        width="100"
        height="280"
        align="left"
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

  return {
    props: { content: res.home[0] },
  };
}

export default Index;
