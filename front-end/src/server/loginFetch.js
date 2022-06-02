const loginUser = (email, password) => {
  const optionsFetch = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  };

  fetch('http://localhost:3001/login', optionsFetch)
    .then((res) => res.json());
};

module.exports = loginUser;
