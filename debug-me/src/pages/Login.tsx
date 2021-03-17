import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/pages/login.css';
import GoogleLogin from 'react-google-login';
import TwitterLogin from 'react-twitter-login';
import TokenContext from '../contexts/TokenContext';
// import { Container } from './styles';
import logo from '../assets/login.png';
import useService from '../hooks/useService';
import LoginService from '../services/LoginService';
import { Token } from '../models/Token';

const Login: React.FC = (props) => {

  const {token, setToken} = useContext(TokenContext);
  const loginService = useService(LoginService);

  const handleLogin = async (googleData: any) => {
    loginService.googleLogin(googleData.tokenId).subscribe(res => {
      const { token, expires_at } = res as Token;
      sessionStorage.setItem('token', token);
      if(setToken) setToken(token);
    });
  }

  return (
    <div className="container mt-5">
      <div className="card mx-auto my-auto" style={{height: '90vh'}}>
        <div className="card-header">
          <img alt="Logo" src={logo} />
        </div>
        <div className="card-body">
          <div className="mx-auto mt-5">
            <GoogleLogin
              clientId='245156008257-jbfr84rq6gqqnj11k7qktu9s9fje6ct8.apps.googleusercontent.com'
              buttonText="Log in with Google"
              onSuccess={handleLogin}
              onFailure={handleLogin}
              cookiePolicy={'single_host_origin'}
              render={renderProps => (
                <button className="btn btn-secondary" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                  <div className="row">
                    <div className="col-1">
                      <i className="fa fa-google fa-lg" style={{color: 'white'}}></i>
                    </div>
                    <div className="col">
                      <span>Login with Google</span>
                    </div>
                  </div>
                </button>
              )}
            />
          </div>
          <div className="mx-auto mt-1">
            <TwitterLogin
              authCallback={() => {}}
              consumerKey={""}
              consumerSecret={""}
            >
              <div className="btn btn-primary">
                <div className="row">
                  <div className="col-1">
                    <i className="fa fa-twitter fa-lg" style={{color: 'white'}}></i>
                  </div>
                  <div className="col">
                    <span>Login with Twitter</span>
                  </div>
                </div>
              </div>
            </TwitterLogin>
          </div>
        </div>
      </div>  	
	  </div>
  );
}

export default Login;