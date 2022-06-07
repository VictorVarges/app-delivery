addToCart = (param, myProducts, setMyProducts) => {
  const resultOne = myProducts.find((el) => el.id === param.id);

  if (resultOne) {
    const resultTwo = myProducts.map((el) => {
      if (el.id === resultOne.id) {
        el.quantity += 1;
      }
      return el;
    });
    setMyProducts([...resultTwo]);
  } else {
    setMyProducts((prev) => ([...prev, param]));
  }
};

removeToCart = (param, myProducts, setMyProducts) => {
  try {
    const resultOne = myProducts.find((el) => el.id === param.id);

    if (resultOne) {
      const resultTwo = myProducts.map((el, index) => {
        if (el.id === resultOne.id) {
          if (el.quantity <= 1) {
            const result = myProducts.splice(index, 1);

            return result;
          }
          el.quantity -= 1;
        }
        return el;
      });

      setMyProducts([...resultTwo]);
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  addToCart,
  removeToCart,
};
