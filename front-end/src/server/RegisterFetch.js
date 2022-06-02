const RegisterUser = (email, password) => {
  const optionsFetch = {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  };

  fetch('http://localhost:3001/register', optionsFetch)
    .then((res) => res.json());
};

module.exports = RegisterUser;