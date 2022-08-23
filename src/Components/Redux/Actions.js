export const TYPE = {
  getproducts: "GETPRODUCTS",
  getproductid: "GETPRODUCTID",
  addtocart: "ADDTOCART",
  increaseqty: "INCRESEQTY",
  decreaseqty: "DECREASEQTY",
  deleteitem: "DELETEITEM",
  filterData: "FILTERDATA",
  getAddress: "GETADDRESS",
  order: "Orders",
  reset: "RESET",
};

export const resetCart = () => {
  return {
    type: TYPE.reset,
  };
};

export const getOrders = (data) => {
  return {
    type: TYPE.order,
    payload: data,
  };
};

export const filteredProductData = (data) => {
  return {
    type: TYPE.filterData,
    payload: data,
  };
};

export const getProducts = (data) => {
  return {
    type: TYPE.getproducts,
    payload: data,
  };
};

export const getAddress = (address) => {
  return {
    type: TYPE.getAddress,
    payload: address,
  };
};
// export const getProductsFromID = (id) => {
//   return {
//     type: TYPE.getproductid,
//     payload: id,
//   };
// };

export const addToCart = (item) => {
  return {
    type: TYPE.addtocart,
    payload: item,
  };
};

export const IncreaseQuantity = (id) => {
  return {
    type: TYPE.increaseqty,
    payload: id,
  };
};

export const DecreaseQuantity = (id) => {
  return {
    type: TYPE.decreaseqty,
    payload: id,
  };
};

export const DeleteItem = (id) => {
  return {
    type: TYPE.deleteitem,
    payload: id,
  };
};
