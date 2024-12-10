import { useState } from 'react';
import { searchIcon } from '../../assets';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const onSearch = () => {
    console.log('searching...');    
  };
  
  const onEnter = (e) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  }

  return (
    <div className="flex items-center gap-[15px] rounded-[40px] bg-whiteV3 my-[5px] pl-[25px] pr-[43px]">
      <button onClick={onSearch}>
        <img src={searchIcon} alt="searchIcon" />
      </button>
      <input
        className="text-coolBlue text-[15px] w-[152px]"
        type="text"
        value={searchText}
        placeholder="Search for something"
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={onEnter}
      />
    </div>
  );
};

export default Search;
