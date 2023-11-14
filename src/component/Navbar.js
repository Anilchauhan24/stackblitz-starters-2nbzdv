import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          style={{
            display: 'flex',
            backgroundColor: 'tomato',
            fontweight: '800',
            width: '90vw',
            height: '10vh',
          }}
        >
          <h1>Dummy Blog</h1>
          <ul
            style={{
              display: 'flex',
              textAlign: 'center',
              listStyle: 'none',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            <li>
              {' '}
              <Link to="/">Home</Link>
            </li>
            <li> Home</li>
            <li> Home</li>
            <li> Home</li>
          </ul>
          <div
            style={{
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: 'black',
              justifyContent: 'center',
              marginTop: '15px',
              marginLeft: '14px',
            }}
          ></div>
        </nav>
        <hr style={{ width: '85vw' }} />
      </div>
    );
  }
}
