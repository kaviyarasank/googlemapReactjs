import React, { useCallback, useState ,useContext} from 'react';
import "../App.css";
import { useTranslation } from "react-i18next";
import FB from "../assets/fb.png"

import {
  LoginSocialGoogle,
  LoginSocialFacebook,
//   LoginSocialAmazon,
//   LoginSocialGithub,
//   LoginSocialInstagram,
//   LoginSocialLinkedin,
//   LoginSocialMicrosoft,
//   LoginSocialPinterest,
//   LoginSocialTwitter,
//   LoginSocialApple,
//   IResolveParams,
} from 'reactjs-social-login';

import {
  FacebookLoginButton,
  GoogleLoginButton,
//   GithubLoginButton,
//   AmazonLoginButton,
//   InstagramLoginButton,
//   LinkedInLoginButton,
//   MicrosoftLoginButton,
//   TwitterLoginButton,
//   AppleLoginButton,
} from 'react-social-login-buttons';

import SocialButton from "./SocialLogin";
import LocaleContext from './LocaleContext';
import MyComponent from './map';
// import { ReactComponent as PinterestLogo } from './assets/pinterest.svg';

const REDIRECT_URI =
  'https://plenty-planets-beam-42-118-51-2.loca.lt/account/login';
// const REDIRECT_URI = 'http://localhost:3000/account/login'

const Social = () => {
  const [provider, setProvider] = useState('');
  const [profile, setProfile] = useState();
console.log("kkkkkkkkkkkkkkkkkkkkkkkk",provider,profile);
  const onLoginStart = useCallback(() => {
    alert('login start');
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider('');
    alert('logout success');
  }, []);

  const handleSocialLogin = (user) => {
    console.log("faaaaaboookkkkkkk",user);
  };
  
  const handleSocialLoginFailure = (err) => {
    console.error("ffffffffffffffffeeeeeeeeeer",err);
  };
  
  const { t, i18n } = useTranslation();
  const handleChange =(e)=>{
    i18n.changeLanguage(e.target.value)
  }
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  const mapStyles = {
    width: '100%',
    height: '100%'
  };
  return (
    <>
     
      <div className={`App ${provider && profile ? 'hide' : ''}`}>

        <select onChange={handleChange}>
          <option value={"en"}>eng</option>
          <option value={"vn"}>greak</option>
        </select>
        <h1 className="title">Social Login 
      {t("greeting")+" "+ t("name")}
        </h1>

        <div style={{ height: '100vh', width: '100%' }}>
          <MyComponent/>
    </div>
        <div className='socialDiv'>

{/* 
        <SocialButton
      provider="facebook"
      appId="1298478504066314"
      image={FB}
      onLoginSuccess={handleSocialLogin}
      onLoginFailure={handleSocialLoginFailure}
    >
      {t("greeting")+" "+ t("name")}
    </SocialButton> */}

  
    {/* 993197441267-m6tb2365kifbpgj0vdd55vbashjpt76e.apps.googleusercontent.com */}
  

        <LoginSocialFacebook
          appId={"1298478504066314"}
          fieldsProfile={
            'id,first_name,last_name,middle_name,name,name_format,picture,short_name,email,gender'
          }
          onLogoutSuccess={onLogoutSuccess}
          // redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>



        <LoginSocialGoogle
          client_id={"993197441267-m6tb2365kifbpgj0vdd55vbashjpt76e.apps.googleusercontent.com"}
          // redirect_uri={REDIRECT_URI}  
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
          className="google"
        >
          <GoogleLoginButton/>
          {/* <button>google</button> */}
        </LoginSocialGoogle> 
        </div>

        {/* <LoginSocialApple
          client_id={process.env.REACT_APP_APPLE_ID || ''}
          scope={'name email'}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={err => {
            console.log(err);
          }}
        >
          <AppleLoginButton />
        </LoginSocialApple>

        <LoginSocialAmazon
          client_id={process.env.REACT_APP_AMAZON_APP_ID || ''}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          onLoginStart={onLoginStart}
        >
          <AmazonLoginButton />
        </LoginSocialAmazon>

        <LoginSocialInstagram
          client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ''}
          client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>

        <LoginSocialMicrosoft
          client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

        <LoginSocialLinkedin
          client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ''}
          client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>

        <LoginSocialGithub
          client_id={process.env.REACT_APP_GITHUB_APP_ID || ''}
          client_secret={process.env.REACT_APP_GITHUB_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GithubLoginButton />
        </LoginSocialGithub>
        <LoginSocialPinterest
          client_id={process.env.REACT_APP_PINTEREST_APP_ID || ''}
          client_secret={process.env.REACT_APP_PINTEREST_APP_SECRET || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          className="pinterest-btn"
        >
          <div className="content">
            <div className="icon">
            </div>
            <span className="txt">Login With Pinterest</span>
          </div>
        </LoginSocialPinterest>

        <LoginSocialTwitter
          client_id={process.env.REACT_APP_TWITTER_V2_APP_KEY || ''}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter> */}
      </div>
    </>
  );
};

export default Social;