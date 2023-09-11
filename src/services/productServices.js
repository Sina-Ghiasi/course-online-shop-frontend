import http from "./httpService";

export const getAllProducts = () => {
  return http.get("/products/");
};

export const getProductById = (productId) => {
  return http.get("/products/" + productId);
};

export const deleteProductById = (token, productId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.delete("/products/" + productId, config);
};

export const createProduct = (token, product) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.post("/products/create-product", product, config);
};

export const updateProduct = (token, product) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.post("/products/update-product", product, config);
};
