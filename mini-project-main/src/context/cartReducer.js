export const CART_ACTIONS = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  CHANGE_QTY: "CHANGE_QTY",
  CLEAR: "CLEAR",
  HYDRATE: "HYDRATE",
};

export function cartReducer(state, action) {
  switch (action.type) {
    case CART_ACTIONS.HYDRATE: {
      return action.payload;
    }

    case CART_ACTIONS.ADD: {
      const item = action.payload;
      const existing = state.items.find((x) => x.id === item.id);

      if (existing) {
        return {
          ...state,
          items: state.items.map((x) =>
            x.id === item.id ? { ...x, qty: x.qty + 1 } : x
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...item, qty: 1 }],
      };
    }

    case CART_ACTIONS.REMOVE: {
      const id = action.payload;
      return { ...state, items: state.items.filter((x) => x.id !== id) };
    }

    case CART_ACTIONS.CHANGE_QTY: {
      const { id, qty } = action.payload;
      if (qty <= 0) {
        return { ...state, items: state.items.filter((x) => x.id !== id) };
      }
      return {
        ...state,
        items: state.items.map((x) => (x.id === id ? { ...x, qty } : x)),
      };
    }

    case CART_ACTIONS.CLEAR: {
      return { ...state, items: [] };
    }

    default:
      return state;
  }
}
