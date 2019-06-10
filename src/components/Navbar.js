import React, { Component } from 'react';
import '../styles/components/Navbar.scss';

class Navbar extends Component {

  state = { scrolled: false }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    // Mobile View has its own style.
    if (window.innerWidth < 768 ) return;
    if (document.documentElement.scrollTop < 55) {
      this.setState({ scrolled: true });
    }
  }

  render() {
    return (
      <div className="c-navbar">
        <div className="c-navbar_contents">
          <div className="c-navbar_contents__img">Logo</div>

          <div className="c-navbar_contents_buttons">
            <div>Button 1</div>
            <div>Button 2</div>
          </div>

        </div>
      </div>
    );
  }
}

export default Navbar;