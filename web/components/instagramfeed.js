import styled from "styled-components";

const StyledImage = styled.div`
  h3 {
    margin: 45px 0 10px 20px;
  }

  .instsgramFeedContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 45px;
  }

  .instagramImgWrapper {
    margin: 10px 10px 10px 10px;
    width: 150px;
    height: 150px;
    object-fit: center;
    object-position: center;
    overflow: hidden;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 992px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .instsgramFeedContainer {
      width: 690px;

      .instagramImgWrapper {
        width: 200px;
        height: 200px;
      }
    }
  }
`;

const InstagramFeed = (props) => {
  const url = props.instagramData.slice(0, 6);

  return (
    <StyledImage>
      <div className="feedWrapper">
        <h3>INSTAGRAM</h3>
        <div className="instsgramFeedContainer">
          {url &&
            url.map((item, i) => (
              <div className="instagramImgWrapper" key={i}>
                <a href="https://www.instagram.com/gundlagardscafe/?__a=1">
                  <img
                    src={item.node.display_url}
                    key={i}
                    alt="instagram picture"
                    loading="lazy"
                  ></img>
                </a>
              </div>
            ))}
        </div>
      </div>
    </StyledImage>
  );
};

export default InstagramFeed;
