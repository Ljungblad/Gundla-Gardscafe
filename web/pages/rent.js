import Layout from '../components/layout';
import groq from 'groq';
import client from '../client';
import TextSection from '../components/textSection';
import LinkedTextSection from '../components/linkedTextSection';
import Image from '../components/image';
import PageHeader from '../components/pageheader';
import urlBuild from '../imageBuilder';

const Rent = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const rentPageData = props.rentData.rent[0];
  console.log(rentPageData);

  // IMAGES
  const firstImage = props.rentData.firstImage;
  const secondImage = props.rentData.secondImage;
  const thirdImage = props.rentData.thirdImage;
  const fourthImage = props.rentData.fourthImage;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}></Layout>
  );
};

const query = groq`{
    "rent": *[_type == 'rent'],
    
  }`;

export async function getStaticProps() {
  const res = await client.fetch(query);

  return {
    props: { rentData: res },
  };
}

export default Rent;
