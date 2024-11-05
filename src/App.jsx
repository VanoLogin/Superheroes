import { useEffect, useState } from "react";
import HeroForm from "./components/HeroForm/HeroForm.jsx";
import Modal from "./components/Modal/Modal.jsx";
import HeroList from "./components/HeroList/HeroList.jsx";
import { getAllHeroes } from "./services/heroService.js";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroes, setHeroes] = useState([]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchHeroes = async () => {
    try {
      const data = await getAllHeroes();
      setHeroes(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);

  const handleHeroAdded = () => {
    fetchHeroes();
    closeModal();
  };

  return (
    <>
      <div className="header">
        <h2>Superhero database</h2>
        <button className="button-hero" onClick={openModal}>
          Add superhero
        </button>
      </div>

      <div className="container">
        {isModalOpen && (
          <Modal modalTitle="New Superhero" onClose={closeModal}>
            <HeroForm onSuccess={handleHeroAdded} />
          </Modal>
        )}
        <HeroList heroes={heroes} fetchHeroes={fetchHeroes} />
      </div>
    </>
  );
}
