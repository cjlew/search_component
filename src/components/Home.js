import React from "react";
import Search from './search/searchContainer';
import Header from './header.jsx';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Header />
        <Search />
      </div>
    );
  }
}
