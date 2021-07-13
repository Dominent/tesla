import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";
import tesla from "../images/tesla_red.png";
import vector2 from "../images/Vector2.png";
import ArrowDropDownCircleOutlinedIcon from "@material-ui/icons/ArrowDropDownCircleOutlined";

function Home({ cars, setChosen }) {
  return (
    <>
      <div className="landing__header">
        <div className="landing__header__left">
          <h3>Save the environment</h3>
          <h1>Tesla's recipe for better living</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            pariatur dicta voluptatibus eaque dolorum iure ipsa. Praesentium,
            sunt. Nulla mollitia tenetur deleniti obcaecati ut quidem eveniet
            cum quas assumenda totam?
          </p>
          <button>Know More</button>
          <h5>30 days free trial</h5>
        </div>
        <img src={vector2} alt="vector" id="landing__header__right__vector" />
        <div className="landing__header__right">
          <img src={tesla} alt="car" />
        </div>
        <ArrowDropDownCircleOutlinedIcon />
      </div>

      <div>
        <ul className="cars__list">
          {cars.map((car) => (
            <div className="car__card" key={car.id}>
              <Link to={"/car/" + car.id}>
                <li>{car.name}</li>
                <img
                  src={car.image.url}
                  alt={car.image.fileName}
                  onClick={() => setChosen(car)}
                />
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;
