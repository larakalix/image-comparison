import { useState } from 'react';
import { PRODUCT } from '../data';

export const useProduct = () => {
  const [product, setProduct] = useState(PRODUCT);

  return {
    product,
  };
};
