import { useContext } from "react";
import { BasketContext } from "../context/basketContext";

const Checkout = () => {
  const context = useContext(BasketContext);
  console.log(context);
  return (
    <div>
      {/* Sepette ürün yoksa */}
      {context.basket.length === 0 && (
        <h3 className="text-center my-5">
          First you need to add a few products!
        </h3>
      )}
      {/* Sepette ürün varsa */}
      {context.basket.length > 0 && <h3 className="p-2">Total</h3>}

      {context.basket?.map((i) => (
        <div className="d-flex justify-content-between align-items-center p-3 gap-3">
          <img
            className="object-fit-contain rounded"
            src={i.image}
            height={100}
          />
          <h4>{i.title.slice(0, 15) + "..."}</h4>
          <h3>$ {(i.price * i.amount).toFixed(2)}</h3>
          <p>amount : {i.amount}</p>
          <button className="bg-dark text-light fs-6" onClick={() => context.addToBasket(i)}n>+</button>
          <button className="bg-dark text-light fs-6" onClick={()=> context.removeFromBasket(i.id)}>-</button>
        </div>
      ))}
    </div>
  );
};

export default Checkout;
