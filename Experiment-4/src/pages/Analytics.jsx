import { useContext, useMemo } from "react";
import { AppContext } from "../context/AppContext";

const Analytics = () => {
  const { favorites, dispatch } = useContext(AppContext);

  const totalFavorites = useMemo(() => {
    return favorites.length;
  }, [favorites]);

  return (
    <>
      <h1>Analytics Dashboard</h1>

      <div className="button-group">
        <button
          onClick={() =>
            dispatch({ type: "ADD_FAVORITE", payload: "Project 1" })
          }
        >
          Add Favorite
        </button>

        <button
          onClick={() =>
            dispatch({ type: "REMOVE_FAVORITE", payload: "Project 1" })
          }
        >
          Remove Favorite
        </button>

        <button onClick={() => dispatch({ type: "CLEAR_FAVORITES" })}>
          Clear All
        </button>
      </div>

      <div className="card analytics-card">
        <h3>Total Favorites</h3>
        <p className="big-number">{totalFavorites}</p>
      </div>
    </>
  );
};

export default Analytics;