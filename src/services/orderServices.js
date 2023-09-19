import http from "./httpService";

export const getNumberOfOrders = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/orders/number-of-orders", config);
};

export const getNumberOfOrdersBetween = (token, data) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return http.post("/orders/number-of-orders-between", data, config);
};

export const makeOrder = (token, data) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return http.post("/orders/make-order", data, config);
};

export const getAllOrders = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/orders/", config);
};

export const getOrderById = (token, orderId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/orders/" + orderId, config);
};

export const deleteOrderById = (token, orderId) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.delete("/orders/" + orderId, config);
};
