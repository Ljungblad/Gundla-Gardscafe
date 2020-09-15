import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background: #000;
  color: #fff;
  padding: 20px;

  input {
    margin-bottom: 30px;
    height: 40px;
    border-radius: 0px;
    border: none;
  }

  label {
    margin-bottom: 10px;
  }

  .eventList {
    width: 235px;
    overflow: hidden;
  }
  .ticketList {
    width: 70px;
    overflow: hidden;
  }

  textarea {
    resize: none;
    height: 150px;
    border-radius: none;
    border: none;
  }
  .buttons {
    display: flex;
    margin-top: 30px;
    justify-content: space-between;

    button {
      width: 160px;
      height: 40px;
      border: none;
      text-transform: uppercase;
    }
  }
  .buttons :nth-child(1) {
    color: #fff;
    background: #000;
    border: 1px solid #fff;
  }
`;

const Form = ({ events }) => {
  console.log(events[0].eventTitle);
  return (
    <StyledForm action='https://formspree.io/xaylwjae' method='POST'>
      <label htmlFor='name'>Namn</label>
      <input type='text' name='name' />
      <label htmlFor='_replyto'>Mail</label>
      <input type='mail' name='_replyto' />
      <label htmlFor='event'>Vilket evenemang vill du anmäla dig till?</label>
      <input className='eventList' list='eventsList' id='events' name='event' />
      <datalist id='eventsList'>
        {events.map((event, i) => {
          return <option value={event.eventTitle} key={i} />;
        })}
      </datalist>
      <label htmlFor='tickets'>Hur många biljetter vill du ha?</label>
      <input className='ticketList' type='number' name='amount of tickets' />
      <label>Meddelande</label>
      <textarea name='message'></textarea>
      <div className='buttons'>
        <button type='button'>Återställ</button>
        <button type='submit'>Skicka</button>
      </div>
    </StyledForm>
  );
};

export default Form;
