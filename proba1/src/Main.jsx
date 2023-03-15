import React from 'react';
import Home from './Home';
import About from './About';

class Main extends React.Component {
  render() {
    const currentPage = this.props.currentPage === 'home' ? <Home /> : <About />;

    return (
      <main>
        {currentPage}
      </main>
    );
  }
}

export default Main;
