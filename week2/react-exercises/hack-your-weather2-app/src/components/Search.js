  
import React from 'react';

const Search = ({ handelSearch }) => {
	return (
		<div className="search">
			<input type="text" onChange={handelSearch} placeholder="Search City..." />
		</div>
	);
};

export default Search;