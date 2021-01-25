import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useLocation } from 'react-router-dom';

const ContactDetails = (props) => {

const location = useLocation(); //Accesses location of data
var user = location.state.data;
console.log(location);

    return (
    <div>
      <center><h1>Contact Details</h1></center>
        <div class="card">
          <img src = "https://pbs.twimg.com/media/Efso_-yUwAAJpRV.jpg" width = '152px' height= '152px' alt="Avatar"></img>
            <div class="container">
              <h5 class="card-text"> phone: {user.phone}</h5>
              <h5 class="card-text"> email: {user.email}</h5>
              <h5 class="card-text"> website: {user.website}</h5>

            </div>
        </div>
    </div>


  );
}

export default ContactDetails;
