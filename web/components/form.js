import styled from "styled-components";
import Input from "../components/forminput";

const StyledFormSection = styled.section`
  background: #242b18;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    color: #fff;
    padding: 20px;

    .formTopText {
      padding: 50px 0px;

      h3 {
        margin-bottom: 10px;
      }
    }

    .inputStyleTextArea {
      display: flex;
      flex-direction: column;
    }

    .inputStyleTextArea,
    .buttons,
    .formTopText {
      width: 330px;
    }

    label {
      font-family: "Barlow", sans-serif;
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 10px;
    }

    textarea {
      resize: none;
      height: 150px;
      border-radius: none;
      border: none;
      padding: 10px;
      color: #000201;
    }
    .buttons {
      display: flex;
      margin: 30px 0px 60px 0px;
      justify-content: space-between;

      button {
        width: 140px;
        height: 45px;
        border: none;
      }
      .resetBtn {
        color: #fff;
        background: transparent;
        border: 1px solid #fff;
      }
    }
  }
  @media (min-width: 992px) {
    background: #4c5340;
    width: 100%;

    form {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      width: 700px;
      padding: 70px 0px 70px 0px;

      .formTopText {
        width: 100%;
        padding: 0px 0px 15px 0px;
      }

      label {
        font-weight: 400;
        font-size: 18px;
      }
      textarea {
        color: #4c5340;
      }

      .inputStyleTextArea {
        width: 100%;
      }
      .buttons {
        width: 100%;
        justify-content: flex-end;
        margin: 30px 0px 0px 0px;

        button:hover {
          cursor: pointer;

          color: #fff;
          background: transparent;
          border: 1px solid #fff;
        }

        button:first-child {
          margin-right: 25px;

          :hover {
            color: #4c5340;
            background: #fff;
          }
        }
      }
    }
  }
`;

const EventForm = ({ events, eventPageData }) => {
  const formTitle = eventPageData.titleForm;
  const formInfo = eventPageData.textBlockForm[0].children[0].text;

  return (
    <StyledFormSection>
      <form action="https://formspree.io/xaylwjae" method="POST">
        <div className="formTopText">
          <h3>{formTitle}</h3>
          <p>{formInfo}</p>
        </div>
        <Input name="name" type="text" label="Namn" width="330" />
        <Input name="_replyto" type="mail" label="Mail" width="330" />
        <Input
          name="event"
          list="eventsList"
          label="Välj evenemang"
          id="events"
          name="event"
          width="245"
        />
        <datalist id="eventsList">
          {events.map((event, i) => {
            return <option value={event.eventTitle} key={i} />;
          })}
        </datalist>
        <Input
          name="tickets"
          type="number"
          label="Hur många biljetter vill du ha?"
          width="70"
        />
        <div className="inputStyleTextArea">
          <label>Meddelande</label>
          <textarea name="message"></textarea>
        </div>
        <div className="buttons">
          <button className="resetBtn" type="button">
            Återställ
          </button>
          <button type="submit">SKICKA</button>
        </div>
      </form>
    </StyledFormSection>
  );
};

export default EventForm;
