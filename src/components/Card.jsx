import { useContext } from "react";
import { BasketContext } from "../context/basketContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS dosyasını ekleyin

const Card = ({ item }) => {
  const context = useContext(BasketContext);

  const addToBasketHandler = (item) => {
    context.addToBasket(item);
    toast.success('Added to basket ', {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  };

  return (
    <div className="card py-2 shadow" style={{ width: "250px" }}>
      <div className="d-flex justify-content-center">
        <img className="object-fit-contain" src={item.image} height={120} alt={item.title} />
      </div>

      <div className="card-body d-flex flex-column justify-content-between">
        <h4>{item.title.slice(0, 30) + "..."}</h4>
        <p className="text-success fs-5">$ {item.price}</p>
        <p>{item.category}</p>
        <button className="bg-dark text-white w-100" onClick={() => addToBasketHandler(item)}>
          Add to basket
        </button>
      </div>
    </div>
  );
};

export default Card;
