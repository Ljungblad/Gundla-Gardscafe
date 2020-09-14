import groq from "groq";
import client from "../client";
import Layout from "../components/layout";
import PageHeader from "../components/pageheader";
import TextSection from "../components/textSection";

const CafePage = (props) => {
  console.log(props.content.cafe[0].textBlockMenu[0].children[0].text);
  const navigationLinks = props.navigation.navigationLinks.navigation;
  const pageTitle = props.content.cafe[0]._type;
  const headerTextBlock =
    props.content.cafe[0].textBlockHero[0].children[0].text;
  const menuTitle = props.content.cafe[0].titleMenu;
  const menuText = props.content.cafe[0].textBlockMenu[0].children[0].text;
  return (
    <Layout navigationLinks={navigationLinks}>
      <PageHeader title={pageTitle} text={headerTextBlock} />
      <TextSection title={menuTitle} text={menuText} />
    </Layout>
  );
};

const query = groq`{
    "cafe": (*[_type == 'cafe']),
}`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { content: res },
  };
}

export default CafePage;
