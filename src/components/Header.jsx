import { useContext } from "react";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/basketContext";

const Header = () => {
  const { basket } = useContext(BasketContext);

  //* toplam ürün miktarını hesaplama
  const total = basket.reduce((total, i) => total + i.amount, 0);
  return (
    <header className="d-flex justify-content-between align-items-center fs-2 p-4 sticky-top bg-dark">
      <Link to={"/"}>
        <h2>Context Store</h2>
      </Link>

      <Link to={"/basket"}>
        <i className="bi-basket text-light"></i>
        <span className="badge bg-danger mx-3 fs-7+">{total}</span>
      </Link>
    </header>
  );
};

export default Header;
