const BASE_URL = 'https://dulces-petalos.jakala.es/api';

/**
 * Fetches a list of products from the API.
 * @returns {Promise<Array>} List of products
 */
export const fetchProducts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/product`);
    if (!response.ok) {
      throw new Error(`Error fetching products: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error; // Re-lanza el error para que pueda manejarse en los componentes
  }
};

/**
 * Fetches the details of a specific product by its ID.
 * @param {string} id Product ID
 * @returns {Promise<Object>} Product details
 */
export const fetchProductById = async id => {
  try {
    const response = await fetch(`${BASE_URL}/product/${id}`);
    if (!response.ok) {
      throw new Error(`Error fetching product ${id}: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
