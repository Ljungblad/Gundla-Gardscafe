import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const Form = ({ events }) => {
  console.log(events[0].eventTitle);
  return (
    <StyledForm action='https://formspree.io/xaylwjae' method='POST'>
      <label>Namn</label>
      <input type='text' name='name' />
      <label>Mail</label>
      <input type='mail' name='name' />
      <label for='myBrowser'>Vilket evenemang vill du anmäla dig till?</label>
      <input list='events' id='myEvent' name='myEvent' />
      <datalist id='events'>
        {events.map((event, i) => {
          return <option value={event.eventTitle} key={i} />;
        })}
      </datalist>
      <input type='submit' value='Send' />
    </StyledForm>
  );
};

export default Form;
