import { InfoOutlined, PlayArrow } from "@mui/icons-material";

import "./featured.scss";
import img01 from "../../assets/img/featured-01.png";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movie" ? "Movies" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}

      <img
        src="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        alt=""
      />
      <div className="info">
        <img src={img01} alt="" />
        <span className="desc">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit et id
          rem facere deleniti tempore. Itaque voluptas deserunt impedit
          repudiandae, id vero autem est unde accusantium veniam, illum fugit!
          Corrupti?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
