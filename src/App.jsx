import { useEffect, useState } from "react";
import HeroForm from "./components/HeroForm/HeroForm.jsx";
import Modal from "./components/Modal/Modal.jsx";
import HeroList from "./components/HeroList/HeroList.jsx";
import { getHeroes } from "./services/heroService.js";
import Pagination from "./components/Pagination/Pagination";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);

  const findHeroIndexById = (heroId) =>
    heroes.findIndex(({ _id }) => heroId === _id);

  const updateHeroById = (heroId, updatedHero) => {
    const index = findHeroIndexById(heroId);

    if (index !== -1) {
      setHeroes((prev) => {
        prev.splice(index, 1, updatedHero);
        return prev;
      });
    }
  };

  const deleteHeroById = (heroId) => {
    const index = findHeroIndexById(heroId);
    if (index !== -1) {
      setHeroes((prev) => {
        prev.splice(index, 1);
        return prev;
      });
    }
  };

  const addNewHero = (newHero) => {
    setHeroes([newHero, ...heroes]);
  };

  const heroesController = {
    updateHeroById,
    deleteHeroById,
    addNewHero,
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchHeroes = async () => {
    try {
      const response = await getHeroes(page);
      setHeroes(response.data);
      setTotalPages(response.totalPages); // Устанавливаем общее количество страниц из ответа
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, [page]); // Перезапрашиваем данные, когда меняется текущая страница

  const handleHeroAdded = (newHero) => {
    heroesController.addNewHero(newHero);
    closeModal();
  };

  const handlePageChange = (newPage) => {
    setPage(newPage); // Обновляем текущую страницу
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
        <HeroList
          heroes={heroes}
          fetchHeroes={fetchHeroes}
          heroesController={heroesController}
        />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
