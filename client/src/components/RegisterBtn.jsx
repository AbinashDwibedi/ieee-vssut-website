import React from 'react';
import { Link } from 'react-router-dom';

function RegisterButton (){
  return (
    <Link
      to="/induction"  // Link to the registration page
      className="register-btn mx-auto w-fit block "
      id='Registerbtn'
    >
      Register Now
    </Link>
  );
};

export default RegisterButton;
