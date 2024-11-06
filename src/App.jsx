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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const fetchHeroes = async () => {
    try {
      const response = await getHeroes(page);
      setHeroes(response.data.data);
      setTotalPages(response.data.totalPages); // Устанавливаем общее количество страниц из ответа
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, [page]); // Перезапрашиваем данные, когда меняется текущая страница

  const handleHeroAdded = () => {
    fetchHeroes();
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
        <HeroList heroes={heroes} fetchHeroes={fetchHeroes} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}
