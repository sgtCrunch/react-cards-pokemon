import { useEffect, useState } from "react";
import {v1 as uuid} from "uuid";
import axios from "axios";

const useAxios = (url, options = {}) => {
  const [cards, setCards] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // after the first render, fetch our data
  useEffect(() => {
    const addCard = async (name = "") => {
      try {
        const res = await axios.get(url+name, options);
        setCards(cards => [...cards, { ...res.data, id: uuid() }]);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { cards, addCard, error, isLoading };
};

export default useAxios;