import ReactPlayer from "react-player";
import Loader from "./Loader";

const Trailer = ({ trailer }) => {
  console.log(trailer);
  const published = trailer.published_at.slice(0, 10);
  const revPublished = published.split("-").reverse().join(".");
  return (
    <div className="grid md:grid-cols-1 mt-5">
      <div>
        <p>
          <span className="m-8 font-bold text-2xl">{trailer.name}</span>
        </p>
        <span className="m-8 font-semibold text-xl">{revPublished}</span>
      </div>
      <div></div>
      <div className="mt-4">
        {trailer.id ? (
          <ReactPlayer
            className={"rounded"}
            width={"800px"}
            height={"50vh"}
            light
            playing
            controls
            url={`https://www.youtube.com/watch?v=${trailer.key}`}
          />
        ) : (
          <>
            <Loader />
          </>
        )}
      </div>
    </div>
  );
};

export default Trailer;
