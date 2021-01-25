import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

function Nav() { //Navigation bar

  return (
    <div>
      <nav>
        <ul>
          <Link to= "/About">
          <li>About</li>
          </Link>
          <Link to= "/Home">
          <li>Home</li>
          </Link>
          <Link to= "/ContactPage">
          <li>Contact  Page</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
