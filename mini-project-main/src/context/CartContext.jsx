import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { CART_ACTIONS, cartReducer } from "./cartReducer";

const CartContext = createContext(null);

const STORAGE_KEY = "mini_cart_v1";
const initialState = { items: [] };

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // hydrate once
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed?.items) {
        dispatch({ type: CART_ACTIONS.HYDRATE, payload: parsed });
      }
    } catch {
      // ignore
    }
  }, []);

  // persist on change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      // ignore
    }
  }, [state]);

  const actions = useMemo(() => {
    return {
      addToCart: (product) => dispatch({ type: CART_ACTIONS.ADD, payload: product }),
      removeFromCart: (id) => dispatch({ type: CART_ACTIONS.REMOVE, payload: id }),
      changeQty: (id, qty) => dispatch({ type: CART_ACTIONS.CHANGE_QTY, payload: { id, qty } }),
      clearCart: () => dispatch({ type: CART_ACTIONS.CLEAR }),
    };
  }, []);

  const totals = useMemo(() => {
    const totalItems = state.items.reduce((sum, x) => sum + x.qty, 0);
    const totalPrice = state.items.reduce((sum, x) => sum + x.qty * x.price, 0);
    return { totalItems, totalPrice };
  }, [state.items]);

  const value = useMemo(() => ({ state, ...actions, ...totals }), [state, actions, totals]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
}
