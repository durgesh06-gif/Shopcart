import { useEffect, useReducer, useState } from "react";

const initialState = {
  products: [],
  loading: true,
};

function productReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

function Productabmin() {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const [searcht, setTerm] = useState("");

  const fetchPro = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data.products });
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchPro();
  }, []);

  const filteredProducts = state.products.filter((p) =>
    p.title.toLowerCase().includes(searcht.toLowerCase())
  );

  return (
    <>
      <div className="container my-3">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searcht}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </div>

      {!state.loading ? (
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {filteredProducts.map((p) => (
              <div className="col" key={p.id}>
                <div className="card h-100">
                  <img
                    src={p.images && p.images[0]}
                    className="card-img-top"
                    alt={p.title}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title">{p.title}</h5>
                      <p className="card-text">{p.description}</p>
                    </div>
                    <button
                      className="btn btn-danger mt-3"
                      onClick={() =>
                        dispatch({ type: "DELETE_PRODUCT", payload: p.id })
                      }
                    >
                      Delete Product
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center mt-5">.....loading</p>
      )}
    </>
  );
}

export default Productabmin;
