import React from "react";
import Search from './search/searchContainer';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Search />
      </div>
    );
  }
}
