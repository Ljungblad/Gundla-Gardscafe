import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import groq from 'groq';
import client from '../client';
import urlBuild from '../imageBuilder';
import Image from '../components/image';

const Event = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const eventData = props.eventData.event[0];
  const pageDesc = props.eventData.event[0].textBlockEvent[0].children[0].text;
  const firstImageUrl = urlBuild(eventData.firstImage.asset._ref);

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader
        title={eventData.titleEvent || 'Page title'}
        text={pageDesc || 'Page description'}
      />
      <Image url={firstImageUrl} alt='e' />
    </Layout>
  );
};

const query = groq`{
    "event": (*[_type == 'event']),
  }`;

export async function getStaticProps(context) {
  const res = await client.fetch(query);

  return {
    props: { eventData: res },
  };
}

export default Event;
