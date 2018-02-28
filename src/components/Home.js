import React from "react";
import Search from './search/searchContainer';
import Header from './header.jsx';
import Footer from './footer.jsx';

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <Header />
        <Search />
        <div id='other-content'>
          <h1>Other Content</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}
