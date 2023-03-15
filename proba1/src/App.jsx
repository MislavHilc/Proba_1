import React from 'react';
import Header from './Header';
import Main from './Main';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 'home'
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    const newPage = this.state.currentPage === 'home' ? 'about' : 'home';
    this.setState({ currentPage: newPage });
  }

  render() {
    return (
      <div>
        <Header onClick={this.handleButtonClick} buttonText={this.state.currentPage === 'home' ? 'About' : 'Home'} />
        <Main currentPage={this.state.currentPage} />
      </div>
    );
  }
}

export default App;
