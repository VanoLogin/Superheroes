import axios from "axios";

axios.defaults.baseURL = "https://backend-superheroes.onrender.com/superheroes";

export const getHeroes = async (page, perPage) => {
  const params = { page, perPage };
  const response = await axios.get("/", {
    params,
  });
  return response.data;
};

export const getAllHeroes = async () => {
  const response = await axios.get();
  return response.data;
};

export const getHeroById = async (id) => {
  const response = await axios.get(id);
  return response.data;
};

export const createHero = async (heroData) => {
  const response = await axios.post("/", heroData);
  return response.data.data;
};

export const updateHero = async (id, heroData) => {
  const response = await axios.patch(id, heroData);
  return response.data.data;
};

export const deleteHero = async (id) => {
  const response = await axios.delete(id);
  return response.data;
};
