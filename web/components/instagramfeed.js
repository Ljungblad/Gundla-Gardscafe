import styled from "styled-components";

const StyledImage = styled.div`
  width: 100vw;

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
`;

const InstagramFeed = (props) => {
  const url = props.instagramData.graphql.user.edge_owner_to_timeline_media.edges.slice(
    0,
    6
  );
  const instagramUrl = `https://www.instagram.com/${url[0].node.owner.username}`;

  return (
    <StyledImage>
      <div className="feedWrapper">
        <h3>INSTAGRAM</h3>
        <div className="instsgramFeedContainer">
          {url.map((item, i) => (
            <div className="instagramImgWrapper" key={i}>
              <a href={instagramUrl}>
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
