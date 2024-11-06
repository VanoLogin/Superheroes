import axios from "axios";

const API_URL = "https://backend-superheroes.onrender.com/superheroes";

export const getHeroes = async (page, perPage) => {
  try {
    const response = await axios.get(
      `${API_URL}?page=${page}&perPage=${perPage}`
    );
    return response.data;
  } catch (error) {
    console.error("Error loading heroes:", error);
    throw error;
  }
};
export const getAllHeroes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error loading heroes:", error);
    throw error;
  }
};

export const getHeroById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error loading hero data with ID ${id}:`, error);
    throw error;
  }
};

export const createHero = async (heroData) => {
  try {
    console.log(heroData);
    const response = await axios.post(API_URL, heroData);
    return response.data;
  } catch (error) {
    console.error("Error creating hero:", error);
    throw error.massage;
  }
};

export const updateHero = async (id, heroData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, heroData);
    return response.data;
  } catch (error) {
    console.error(`Error updating hero with ID ${id}:`, error);
    throw error;
  }
};

export const deleteHero = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting hero with ID ${id}:`, error);
    throw error;
  }
};
