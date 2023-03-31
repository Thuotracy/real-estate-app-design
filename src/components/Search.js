import React from 'react';

// import components
import CountryDropdown from './CountryDropdown';
import PropertyDropdown from './PropertyDropdown';
import PriceRangeDropdown from './PrinceRangeDropdown';

// import icons
import { RiSearch2Line } from 'react-icons/ri';

const Search = () => {
  return (
    <div>
      <CountryDropdown />
      <PropertyDropdown />
      <PriceRangeDropdown />
      <button>
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;