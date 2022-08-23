import { TYPE } from "./Actions";

const initaialstate = {
  products: [],
  cart: [],
  filter: [],
  clientAddress: {},
  orders: [],
};

const FindItem = (arr, id) => {
  return arr.find((el) => el.id === +id);
};

const reducer = (state = initaialstate, actions) => {
  if (actions.type === TYPE.reset) {
    return {
      ...state,
      cart: [],
      clientAddress: {},
    };
  }

  if (actions.type === TYPE.getproducts) {
    return {
      ...state,
      products: actions.payload,
      filter: actions.payload,
    };
  }

  if (actions.type === TYPE.addtocart) {
    // const samelem = state.cart.find((el) => el.id === +actions.payload.id);

    const find = FindItem(state.cart, actions.payload.id);

    if (find) {
      //   const findIndex = state.cart.findIndex(
      //     (el) => el.id === +actions.payload.id
      //   );

      return {
        ...state,
        cart: state.cart.map((el) =>
          el.id === +actions.payload.id ? { ...el, qty: el.qty + 1 } : { ...el }
        ),
      };
    } else {
      return {
        ...state,
        cart: [...state.cart, { ...actions.payload, qty: 1 }],
      };
    }
  }

  if (actions.type === TYPE.increaseqty) {
    // const Findelem = state.cart.find((el) => el.id === +actions.payload);
    const find = FindItem(state.cart, actions.payload);

    if (find) {
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.id === +actions.payload ? { ...el, qty: el.qty + 1 } : { ...el }
        ),
      };
    }
  }

  if (actions.type === TYPE.decreaseqty) {
    // const Findelem = state.cart.find((el) => el.id === +actions.payload);
    const find = FindItem(state.cart, actions.payload);
    if (find) {
      return {
        ...state,
        cart: state.cart.map((el) =>
          el.id === +actions.payload
            ? { ...el, qty: el.qty === 1 ? 1 : el.qty - 1 }
            : { ...el }
        ),
      };
    }
  }

  if (actions.type === TYPE.deleteitem) {
    const find = FindItem(state.cart, actions.payload);

    return {
      ...state,
      cart: state.cart.filter((el) => el.id !== find.id),
    };
  }

  if (actions.type === TYPE.filterData) {
    return {
      ...state,
      filter: actions.payload,
    };
  }

  if (actions.type === TYPE.getAddress) {
    console.log(actions.payload);
    return {
      ...state,
      clientAddress: actions.payload,
    };
  }
  if (actions.type === TYPE.order) {
    return {
      ...state,
      orders: [...state.orders, actions.payload],
    };
  }

  return state;
};

export default reducer;
