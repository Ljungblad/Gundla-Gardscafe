import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import groq from 'groq';
import client from '../client';
import urlBuild from '../imageBuilder';
import Image from '../components/image';
import LinkedTextSection from '../components/linkedTextSection';

const Event = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const eventPageData = props.eventData.event[0];
  const events = props.eventData.addEvents;
  const pageDesc = props.eventData.event[0].textBlockEvent[0].children[0].text;
  const firstImageUrl = urlBuild(eventPageData.firstImage.asset._ref);

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader
        title={eventPageData.titleEvent || 'Page title'}
        text={pageDesc || 'Page description'}
      />
      <Image url={firstImageUrl} alt='e' />

      {events.map((event, i) => {
        const title = event.eventTitle;
        const email = event.email;
        const eventInfo = event.textBlockHero[0].children[0].text;

        return (
          <LinkedTextSection
            key={i}
            title={title}
            text={eventInfo}
            link={`mailto:${email}`}
          />
        );
      })}
    </Layout>
  );
};

const query = groq`{
    "event": *[_type == 'event'],
    "addEvents": *[_type == 'addEvents'],
  }`;

export async function getStaticProps(context) {
  const res = await client.fetch(query);

  return {
    props: { eventData: res },
  };
}

export default Event;
