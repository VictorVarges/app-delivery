const bulkInsert = (idSale, array) => {
  const result = array.map((el) => {
    const myObj = {
      // eslint-disable-next-line camelcase
      sale_id: idSale,
      // eslint-disable-next-line camelcase
      product_id: el.id,
      quantity: el.quantity,
    };
    return myObj;
  });
  
  return result;
};

module.exports = {
  bulkInsert,
};
