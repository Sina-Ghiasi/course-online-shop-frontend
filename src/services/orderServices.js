import http from "./httpService";

export const getNumberOfOrders = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return http.get("/orders/number-of-orders", config);
};

export const getNumberOfOrdersBetween = (token, lt, gt) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  return http.post("/orders/number-of-orders-between", { lt, gt }, config);
};
