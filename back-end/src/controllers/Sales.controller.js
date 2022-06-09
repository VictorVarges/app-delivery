const service = require('../services/index');

const getSales = async (_req, res) => {
  try {
    const sales = await service.getSales();

    if (sales === null) return res.status(404).json({ message: 'Not Found' });

    return res.status(200).json(sales);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createSales = async (req, res) => {
  const { user: { email, name, role }, mySeller, myAdress, myAdressNumber, totalCart } = req.body;

  const mySale = {
    email, name, role, mySeller, myAdress, myAdressNumber, totalCart,
  };

  try {
    const sale = await service.createSale(mySale);

    if (!sale) return res.status(400).json({ message: 'Bad Request' });

    return res.status(201).json(sale);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  try {
    const sale = await service.getSaleById(id);
    if (sale === null) return res.status(404).json({ message: 'Not Found' });
    return res.status(200).json(sale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getSales,
  createSales,
  getSaleById,
};
