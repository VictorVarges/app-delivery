const bulkInsert = (idSale, array) => {
  const result = array.map((el) => {
    const myObj = {
      saleId: idSale,
      productId: el.id,
      quantity: el.quantity,
    };
    return myObj;
  });
  
  return result;
};

module.exports = {
  bulkInsert,
};
