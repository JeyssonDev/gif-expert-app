import { useEffect } from 'react';
import { useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const newImages = await getGifs(category);
        setImages(newImages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [category]);

  return {
    images,
    isLoading,
  };
};
