import styled from "styled-components";

const StyledMap = styled.div`
  iframe {
    width: 100%;
    height: 350px;
  }

  @media (min-width: 992px) {
    width: 100%;
    .mapContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 50px;
    }

    iframe {
      width: 80%;
      height: 450px;
    }
  }
`;

const Map = () => {
  return (
    <StyledMap>
      <div className="mapContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.7756947796547!2d12.02605491600651!3d57.68629018111437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3a5d0157c63%3A0xdd291fa6017dc04a!2zR3VuZGxhIEfDpXJkc2NhZsOp!5e0!3m2!1ssv!2sse!4v1600092800252!5m2!1ssv!2sse"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
      </div>
    </StyledMap>
  );
};

export default Map;
