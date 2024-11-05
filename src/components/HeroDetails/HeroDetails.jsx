import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import EditHero from "../EditForm/EditHero.jsx";
import styles from "./style.module.scss";
import { getHeroById, deleteHero } from "../../services/heroService";

export default function HeroDetails({ heroId, onClose, fetchHeroes }) {
  const [hero, setHero] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  useEffect(() => {
    const fetchHeroDetails = async () => {
      try {
        const response = await getHeroById(heroId);
        setHero(response);
      } catch (error) {
        console.error("Error fetching hero details:", error);
      }
    };

    fetchHeroDetails();
  }, [heroId]);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleEditClose = () => {
    setIsEditModalOpen(false);
  };

  const handleHeroUpdated = (updatedHero) => {
    setHero(updatedHero);
    fetchHeroes();
  };

  if (!hero) {
    return <p>Loading...</p>;
  }

  const deleteHeroById = async (heroId) => {
    try {
      await deleteHero(heroId);
      fetchHeroes();
      onClose();
    } catch (error) {
      console.error("Error deleting hero:", error);
    }
  };

  return (
    <Modal modalTitle={hero.nickname} onClose={onClose}>
      <div className={styles.details}>
        <img src={hero.images} alt={hero.nickname} className={styles.image} />
        <div className={styles.wrapper}>
          <p>
            <span>Nickname:</span> {hero.nickname}
          </p>
          <p>
            <span>Real name:</span> {hero.realName}
          </p>
          <p>
            <span>Description:</span> {hero.originDescription}
          </p>
          <p>
            <span>Superpowers:</span> {hero.superpowers}
          </p>
          <p>
            <span>Catch phrase:</span> {hero.catchPhrase}
          </p>
        </div>
        <button className={styles.editBtn} onClick={handleEditClick}>
          Edit
        </button>
        <button
          className={styles.deleteBtn}
          onClick={() => deleteHeroById(heroId)}
        >
          Delete
        </button>
        {isEditModalOpen && (
          <EditHero
            hero={hero}
            onClose={handleEditClose}
            onHeroUpdated={handleHeroUpdated}
          />
        )}
      </div>
    </Modal>
  );
}

HeroDetails.propTypes = {
  heroId: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  fetchHeroes: PropTypes.func.isRequired,
};
