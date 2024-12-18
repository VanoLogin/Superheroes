import PropTypes from "prop-types";
import style from "./style.module.scss";
import HeroDetails from "../HeroDetails/HeroDetails";
import { useState } from "react";

export default function HeroList({ heroes, heroesController }) {
  const [selectedHeroId, setSelectedHeroId] = useState(null);

  const handleHeroClick = (id) => {
    setSelectedHeroId(id);
  };

  const closeHeroDetails = () => {
    setSelectedHeroId(null);
  };

  return (
    <div className="container">
      <h2 className={style.header}>Superheroes</h2>
      <ul className={style.cardList}>
        {heroes.map((hero) => (
          <li
            className={style.card}
            key={hero._id}
            onClick={() => handleHeroClick(hero._id)}
          >
            <img
              className={style.image}
              src={
                hero.image ||
                "https://lh6.googleusercontent.com/proxy/wSb-FphGOKoLEKGRZpKi45xy2ZmDDgrtP96i11RZz702kHmnCD40yOWvNamjENf3DGUrxNYVqAsWqnNrElZbpEFmddD4yt_Frk4eVq-B6Gbn52WoDruNdhrHVxHSaqBfeKGBEyiE_BZ_PBkgB-o4i2XQ_MrHHqgWjTe13oUNynQLW3rJHjKxZN-_wbIpz3wKB70ZP97Mj2KEjLZIEArAza0FX-I0gvWncErLTnbAYsDqPuc"
              }
              alt={hero.nickname}
              width="200"
            />
            <p className={style.name}>{hero.nickname}</p>
          </li>
        ))}
      </ul>

      {selectedHeroId && (
        <HeroDetails
          heroId={selectedHeroId}
          onClose={closeHeroDetails}
          heroesController={heroesController}
        />
      )}
    </div>
  );
}

HeroList.propTypes = {
  heroes: PropTypes.array.isRequired,
  heroesController: PropTypes.object.isRequired,
};
