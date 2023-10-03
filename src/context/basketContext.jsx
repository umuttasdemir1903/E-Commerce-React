import { createContext, useState } from "react";

/*
 * Context API
 * Uygulamada birden çok bileşenin ihtiyacı olan verileri
 * Bileşenlerden bağımsız şekilde konumlanan merkezlerde yönetmeye yarar.
 * Verileri ve verileri değiştirmeye yarayan foknksiyonları tutarız.
 * Context tuttuğumuz bu değişkenleri herhabgi bir bileşene doğrudan aktarabilir.
 * Merkezi State Yönetme Aracı.
 *
 */

//! Context yapısnın temelini oluşturma.
export const BasketContext = createContext();

//! Sağlayıcı ve onun tuttuğu verileri tanımlama.
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  //* sepete ekleme fonksiyonu
  const addToBasket = (product) => {
    //* Sepette bu üründen daha önce eklenmiş mi kontrol edeceğiz
    const found = basket.find((i) => i.id === product.id);
    if (found) {
      //* olan ürünün miktarını arttırır
      const updated = { ...found, amount: found.amount + 1 };

      //* dizideki ürünü günceller.
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //* state'i günceller
      setBasket(newBasket);
    } else {
      //* sepete ürün ekler
      setBasket(basket.concat({ ...product, amount: +1 }));
    }
  };

  //* sepetten ürün kaldırma
  const removeFromBasket = (delete_id) => {
    const found = basket.find((i) => i.id === delete_id);
    if (found.amount > 1) {
      //* miktarı bir azaltcıaz
      //* olan ürünün miktarını arttırır
      const updated = { ...found, amount: found.amount - 1 };

      //* dizideki ürünü günceller.
      const newBasket = basket.map((i) => (i.id === updated.id ? updated : i));

      //* state'i günceller
      setBasket(newBasket);
    } else {
      //* ürünü sepetten çıkar
     const filtered = basket.filter((i)=> i.id !== delete_id)
     setBasket(filtered)
    }
  };

  //* tuttuğumuz verileri uygulamaya aktar.

  return (
    //* tuttuğumuz verileri uygulamaya aktarır.
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {/* children şuan app(bütün uygulama) */}
      {children}
    </BasketContext.Provider>
  );
}
