import PropTypes from 'prop-types';
import React, { useState } from 'react';
import deliveryContext from './deliveryContext';

export default function Provider({ children }) {
  const [nameUser, setNameUser] = useState('');

  const myContext = {
    nameUser,
    setNameUser,
  };

  return (
    <deliveryContext.Provider value={ myContext }>
      { children }
    </deliveryContext.Provider>
  );
}
Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
