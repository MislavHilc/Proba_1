import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <button onClick={this.props.onClick}>{this.props.buttonText}</button>
      </header>
    );
  }
}

export default Header;
