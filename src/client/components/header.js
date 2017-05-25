import React from 'react';
import SearchBar from './search_bar'

class Header extends React.Component {
   render() {
      return (
         <div className="header">
            <div className="logo">
              <h2>Music Search Engine</h2>
            </div>
            <SearchBar />
         </div>
      );
   }
}

export default Header;
