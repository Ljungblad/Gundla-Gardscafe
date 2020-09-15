import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import groq from 'groq';
import client from '../client';
import urlBuild from '../imageBuilder';
import Image from '../components/image';
import TextSection from '../components/textSection';
import Form from '../components/form';

const Event = (props) => {
  const navigationData = props.globalProps.navigation;
  const footerData = props.globalProps.footer;
  const eventPageData = props.eventData.event[0];
  const events = props.eventData.addEvents;
  const pageDesc = props.eventData.event[0].textBlockEvent[0].children[0].text;
  const firstImageUrl = urlBuild(eventPageData.firstImage.asset._ref);
  const secondImageUrl = urlBuild(eventPageData.secondImage.asset._ref);
  const bookText = eventPageData.textBlockBooking[0].children[0].text;

  return (
    <Layout navigationLinks={navigationData} footerData={footerData}>
      <PageHeader
        title={eventPageData.titleEvent || 'Page title'}
        text={pageDesc || 'Page description'}
      />
      <Image url={firstImageUrl} alt='e' />

      {events.map((event, i) => {
        const title = event.eventTitle;
        const eventInfo = event.textBlockHero[0].children[0].text;
        return <TextSection key={i} title={title} text={eventInfo} />;
      })}
      <TextSection title={bookText} />
      <Image url={secondImageUrl} alt='e' />
      <Form events={events}/>
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
