import Layout from "../components/layout";

const Index = (props) => {
  return <Layout instagramData={props.data}></Layout>;
};

export async function getStaticProps() {
  const res = await fetch("https://www.instagram.com/gundlacafeinsta/?__a=1");
  const data = await res.json();
  return { props: { data } };
}

export default Index;
