import styled from "styled-components";

const StyledImage = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  border: 2px solid black;

  .instagramImgWrapper {
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

  return (
    <StyledImage>
      {url.map((item, i) => (
        <div className="instagramImgWrapper" key={i}>
          <img src={item.node.display_url} key={i}></img>
        </div>
      ))}
    </StyledImage>
  );
};

export default InstagramFeed;
