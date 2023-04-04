import React, { useContext } from 'react';

// import context
import { HouseContext } from './HouseContext';

// import components
import House from './House';

// import link
import { link } from 'react-router-dom';

// import icons
import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {
  const {} = useContext(HouseContext);
  return <div>HouseList</div>;
};

export default HouseList;