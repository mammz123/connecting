import React from 'react';
import { useHistory } from 'react-router-dom';


const BackButton = () => {
  const history = useHistory();

  const handleBackClick = () => {
    history.goBack();
  };

  return (
    <button className="back-button" onClick={handleBackClick}>
      Go Back
    </button>
  );
};

export default BackButton;
