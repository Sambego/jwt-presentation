import React from "react";
import ReactDOM from "react-dom";

import Deck from "./components/Deck";
import Slide from "./components/Slide";
import Title from "./slides/Title";
import Subtitle from "./slides/Subtitle";
import Text from "./components/Text";
import Summary from "./slides/Summary";
import Scheme from "./slides/Scheme";
import About from "./slides/About";
import Poes from "./slides/Poes";
import Poes2 from "./slides/Poes/Poes2";
import SPASummary from  './slides/SPASummary';
import Code from  './slides/Code';
import Compare from './slides/Compare';
import AlgSummary from './slides/AlgSummary';
import JWTPlayground from  './slides/JWTPlayground';
import JWT from  './slides/jwt';
import Webauthn from './slides/Webauthn';
import FinalSummary from './slides/FinalSummary';
import Questions from "./slides/Questions";
import Thanks from "./slides/Thanks";

import List from "./components/List";

import "./styles/styles.css";

import traditional1 from "./images/traditional/1.svg";
import traditional2 from "./images/traditional/2.svg";
import traditional3 from "./images/traditional/3.svg";
import traditional4 from "./images/traditional/4.svg";
import traditional5 from "./images/traditional/5.svg";
import traditional6 from "./images/traditional/6.svg";
import traditional7 from "./images/traditional/7.svg";

import archTraditional from "./images/traditional-architecture.svg";
import archSPA from "./images/spa-architecture.svg";
import archMulti from "./images/multi-app-architecture.svg";
import flow from "./images/flow.svg";

import spa1 from "./images/spa/1.svg";
import spa2 from "./images/spa/2.svg";
import spa3 from "./images/spa/3.svg";
import spa4 from "./images/spa/4.svg";
import spa5 from "./images/spa/5.svg";
import spa6 from "./images/spa/6.svg";
import spa7 from "./images/spa/7.svg";
import spa8 from "./images/spa/8.svg";

import oidc1 from "./images/oidc/1.svg";
import oidc2 from "./images/oidc/2.svg";
import oidc3 from "./images/oidc/3.svg";
import oidc4 from "./images/oidc/4.svg";
import oidc5 from "./images/oidc/5.svg";
import oidc6 from "./images/oidc/6.svg";
import oidc7 from "./images/oidc/7.svg";
import oidc8 from "./images/oidc/8.svg";
import oidc9 from "./images/oidc/9.svg";
import oidc10 from "./images/oidc/10.svg";

import pkce1 from "./images/pkce/1.svg";
import pkce2 from "./images/pkce/2.svg";
import pkce3 from "./images/pkce/3.svg";
import pkce4 from "./images/pkce/4.svg";

import webauthn1 from "./images/webauthn/1.svg";
import webauthn2 from "./images/webauthn/2.svg";
import webauthn3 from "./images/webauthn/3.svg";
import webauthn4 from "./images/webauthn/4.svg";
import webauthn5 from "./images/webauthn/5.svg";

import header from "./images/header.svg";
import payload from "./images/payload.svg";
import signature from "./images/signature.svg";

const headerExample = '{\n  "alg": "HS256",\n  "typ": "JWT"\n}';
const payloadExample = '{\n  \"sub\": \"1234567890\",\n  \"given_name\": \"Sam\",\n  \"family_name\": \"Bellen\",\n  \"preferred_username\": \"Sambego\",\n  \"iat\": 1516239022,\n  "exp": 1552305710\n}';
const signatureExample = 'HMACSHA256(\n  base64UrlEncode(header) + \".\" +\n  base64UrlEncode(payload),\n  ✨your-256-bit-secret✨\n)';
const signatureExample2 = 'HMACSHA256(\n  base64UrlEncode(header) + \".\" +\n  base64UrlEncode(payload),\n  your-super-secret-key\n)';
const signatureExample3 = 'HMACSHA256(\n  base64UrlEncode(header) + \".\" +\n  base64UrlEncode(payload),\n  nPilVwFjcF0v5NL5YT1xsiwRJCGqM1do\n)';
const ReservedClaimsExample = '{\n  \"sub\": 12345678, \n  \"iss\": \"https://sambego.tech\", \n  \"iat\": 1516239022, \n  \"exp\": 1552305710\n}';
const PublicClaimsExample = '{\n  \"family_name\": \"Bellen\", \n  \"given_name\": \"Sam\",\n  \"preferred_username\": \"Sambego\"\n}';
const PrivateClaimsExample = '{\n  \"foo\": \"bar\",\n  \"anything\": \"you want\"\n}';
const jsExample = "const headers = new Headers({\n  \"content-type\": \"application/json\",\n  \"Authorization\", \"Bearer RWA...CFyw7\"\n});\n\nconst request = new Request(\"https://api.sambego.be/cats\", {\n  headers,\n  method: \"GET\"\n});\n\nfetch(request)\n  .then(response => response.json())\n  .then(response => {\n    // 🎉 we made a request to a protected endpoint\n    console.log(response)\n  });";
const accessTokenCode = "{\n  \"iss\": \"https://sambego.eu.auth0.com/\",\n  \"sub\": \"auth0|5b10...ae62\",\n  \"aud\": [\n    \"my-audience\",\n  ],\n  \"iat\": 1554361012,\n  \"exp\": 1554368212,\n  \"azp\": \"gkWZ...Nx9y\",\n  \"scope\": \"openid profile\"\n}";
const idTokenCode = "{\n  \"nickname\": \"sambellen\",\n  \"name\": \"sambellen@gmail.com\",\n  \"picture\": \"https://s.gravatar.com/avatar/...avatars.png\",\n  \"updated_at\": \"2019-04-04T06:56:52.907Z\",\n  \"iss\": \"https://sambego.eu.auth0.com/\",\n  \"sub\": \"auth0|5b10....ae62\",\n  \"aud\": \"gkWZ...kNx9y\",\n  \"iat\": 1554361012,\n  \"exp\": 1554397012,\n}";

const webauthnCode1 = "navigator.credentials.create(createConfig);";
const webauthnCode2 = "const createConfig = {\n  publicKey: {\n    ...\n  }\n}";
const webauthnCode3 = "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n }";
const webauthnCode4 = "{\n  ...\n  // relying party\n  rp: {\n    name: 'Sambego.tech'\n  },\n  ...\n }";
const webauthnCode5 = "{\n  ...\n  // user information\n  user: {\n    id: createRandomUint8Array(),\n    name: 'Sam Bellen',\n    displayName: 'Sambego'\n  },\n  ...\n }";
const webauthnCode6 = "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: {  \n    // optional, can also be 'cross-platform'\n    authenticatorAttachment: 'platform',\n    // optional, can also be 'require ' and 'discouraged'\n    userVerification: 'preferred'\n  },\n  ...\n }";
const webauthnCode7 = "{\n  ...\n  // information about the attestation, to prove the user's identity\n  // can also be 'indirect' and 'non ' to remove identifying information\n  attestation: 'direct',\n  ...\n }";
const webauthnCode8 = "navigator.credentials.get(getConfig);";
const webauthnCode9 = "const getConfig = {\n  publicKey: {\n    ...\n  }\n}";
const webauthnCode10 = "{\n  ...\n  // random, cryptographically secure, at least 16 bytes\n  challenge: createRandomUint8Array().buffer,\n  ...\n}";
const webauthnCode11 = "{\n  ...\n  // The allowed credentials\n  allowCredentials: [\n    {\n      id: credentials.rawId,\n      type: 'public-key'\n    }\n  ],\n  ...\n}";
const webauthnCode12 = "{\n  ...\n  // information about the allowed authenticator device\n  authenticatorSelection: { \n    // optional, can also be 'required' and 'discouraged'\n    userVerification: 'preferred' \n  }\n  ...\n}";

console.log('----------------');
console.log('Checking what\'s under the hood? Let me make it easy for you!');
console.log('The source of this presentation can be found at: https://github.com/sambego/jwt-presentation');
console.log('Yes I know, it\'s all a bit of a hack :)');
console.log('Want to create your own presentations using React components? Check here: https://sambego.github.io/diorama-demo');
console.log('Got more questions? Contact me at https://twitter.com/sambego');
console.log('----------------');

ReactDOM.render(
  <Deck>
      <Title />
      <About />
      <Poes />
      <Summary />
      <Subtitle
        text="Traditional authentication"
        background="#fac863"
        color="#fff"
        note="What do I mean with traditional web apps? Server side generated pages, where each page change causes a refresh in the browser.Typically made in php, .net, ruby on rails, …"
      />
      <Scheme
        src={traditional1}
        note="A user visits your web app, and wants to access a protected page"
      />
      <Scheme
        src={traditional2}
        note="The web app is going to ask the user to prove it is allowed to access that page. Typically this is done trough a login page / form"
      />
      <Scheme
        src={traditional3}
        note="The user fills in a form. Usually this is a username / email and password "
      />
      <Scheme
        src={traditional4}
        note="The browser will send those user credential to the server, to prove it is allowed to access that page"
      />
      <Scheme
        src={traditional5}
        note="When the server determines that the user credentials are good enough, it will allow the user to visit the protected page."
      />
      <Scheme
        src={traditional6}
        note="It will not only send back the requested page, it will also send back a cookie for later visits. This cookie will usually contain a session token. The server has a list of all valid sessions, and with each visit it will check that list if the token inside the cookie is still valid."
      />
      <Scheme
        src={traditional7}
        note="The next time the user tries to visit a protected page, the browser will send that cookie with the request."
      />
      <Scheme
        src={traditional5}
        note="The server sees this cookie and will check if the session token inside the cookie is still valid. If so, it will grant access to the page without the user having to log in again."
      />
      <Subtitle
        text={(<span>
                  Traditional web apps
                  <br />
                  VS
                  <br />
                  Single page applications
              </span>
          )}
      />

      <Subtitle text="Traditional architecture" />
      <Scheme
        src={archTraditional}
        note="With these serverside rendered and generated pages, we usually have 1 app, running on one server or cluster of servers with one domain. The web app and backend are on the same domain. The cookie set by the"
      />
      <Subtitle text="Single page architecture" />
      <Scheme
        src={archSPA}
        note="Single page apps often run on a separate domain, and communicate with multiple servers trough public APIs. Think about microservices where each app domain has it’s own service and potentially server. We don’t want to login every time our SPA connects to a different server / API server will almost always be read again by that same server."
      />
      <Subtitle text="Multi architecture" />
      <Scheme
        src={archMulti}
        note="Mobile apps and desktop apps don’t use cookies to save data clientside. We want to authenticate all apps in the same way."
      />

      <Subtitle text="What are some of the problems with the traditional cookie based approach?" />
      <Subtitle text="Cookies don’t like CORS" />
      <Subtitle text="Cookies require state" note="The server needs to keep a list of all valid sessions, so it can check if the session token inside the cookie is still valid. In an ideal scenario we would our APIs to be stateless" />
      <Subtitle text="Cookies don’t flow" />
      <Scheme
        src={flow}
        note="Take this example. We request some data from our main API, which in terms needs to get some data from another API. The first server might know who we are, but that does not mean the second one knows."
      />
      <Subtitle text="So what’s the solution?" />

      <Subtitle
        text="Token based authentication"
      />

      <Subtitle
        text="What the #&$* is a token?"
        background="#69c"
        color="#fff"
        note="A token is any unique string that can be used as an identifier. Oauth does not specify what format a token should be. OIDC does specify that the ID token should be a JWT, but since it is just a layer on top of OAuth, the type of the access token and refresh token are free too choose"
      />
      <Subtitle text="A unique identifier representing something" />

      <Subtitle text="There are different kinds of tokens" />
      <Subtitle text="Access token" />
      <Subtitle text="ID Token" />
      <Subtitle text="Refresh Token" />

      <Subtitle text="Often an opaque string in the form of a UUID" />
      <Subtitle text="Can be XML (SAML)" />
      <Subtitle text={(<span>JSON Web <span style={{color: "#69c"}}>Token</span></span>)} />
      <Subtitle text={<span>At <span style={{color: '#EB5424'}}>Auth0</span> we use JWTs as much as possible!</span>} />

      <Subtitle text={(<span style={{textTransform: 'none'}}><span style={{color: "#ec5f67"}}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span style={{color: "#C594C5"}}>eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQmVsbGVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiU2FtYmVnbyIsImlhdCI6MTUxNjIzOTAyMn0</span>.<span style={{color: "#69c"}}>8dgxpiPlESmjugv2GynQiY9a5LrGvWVKW5RI6eoch9A</span></span>)} style={{maxWidth: "80vw", wordWrap: "break-word", textAlign: "left"}} />
      <Subtitle text="A JSON Web token is made out of 3 different parts" />
      <Subtitle text={(<span style={{textTransform: 'none'}}><span style={{color: "#ec5f67"}}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span style={{color: "#C594C5", opacity: ".1"}}>eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQmVsbGVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiU2FtYmVnbyIsImlhdCI6MTUxNjIzOTAyMn0</span>.<span style={{color: "#69c", opacity: ".1"}}>8dgxpiPlESmjugv2GynQiY9a5LrGvWVKW5RI6eoch9A</span></span>)} style={{maxWidth: "80vw", wordWrap: "break-word", textAlign: "left"}} />
      <Code title="Header" code={headerExample}/>
      <Subtitle text={(<span style={{textTransform: 'none'}}><span style={{color: "#ec5f67", opacity: ".1"}}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span style={{color: "#C594C5"}}>eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQmVsbGVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiU2FtYmVnbyIsImlhdCI6MTUxNjIzOTAyMn0</span>.<span style={{color: "#69c", opacity: ".1"}}>8dgxpiPlESmjugv2GynQiY9a5LrGvWVKW5RI6eoch9A</span></span>)} style={{maxWidth: "80vw", wordWrap: "break-word", textAlign: "left"}} />
      <Code title="Payload" code={payloadExample} note="The payload contains claims. A claim is a key value pair of information which can be useful to the SPA" />
      <Code title="Reserved claims" code={ReservedClaimsExample} />
      <Code title="Public claims" code={PublicClaimsExample} note="Claims registered with IANA -> https://www.iana.org/assignments/jwt/jwt.xhtml#claims Meant for api interoperability. eg: family_nam, given_name (not first_name), "/>
      <Code title="Private claims" code={PrivateClaimsExample} />
      <Subtitle text={(<span style={{textTransform: 'none'}}><span style={{color: "#ec5f67", opacity: ".1"}}>eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9</span>.<span style={{color: "#C594C5", opacity: ".1"}}>eyJzdWIiOiIxMjM0NTY3ODkwIiwiZ2l2ZW5fbmFtZSI6IlNhbSIsImZhbWlseV9uYW1lIjoiQmVsbGVuIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiU2FtYmVnbyIsImlhdCI6MTUxNjIzOTAyMn0</span>.<span style={{color: "#69c"}}>8dgxpiPlESmjugv2GynQiY9a5LrGvWVKW5RI6eoch9A</span></span>)} style={{maxWidth: "80vw", wordWrap: "break-word", textAlign: "left"}} />
      <Code title="Signature" code={signatureExample} />
      <Subtitle text="JWTs can be verified!"/>
      <Code title="Signature" code={signatureExample2} />
      <Code title="Signature" code={signatureExample3} note="Usually the secret will look like this, a random, unique generated 256bit string. This key is used by the server issuing the JWT to generate the signature. Anybody (any server) who knows the secret key can now verify if the signature is valid or not. Demo: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IlNhbWJlZ28ifQ.hCBl313U03yirP8Om7njFCuA7yDn9bZJ8nf9bddEtyQ. Secret: “secret”"/>

      <JWTPlayground />

      <Subtitle text="Some real world examples"/>
      <Subtitle text="Access token" />
      <Code title="Access Token" code={accessTokenCode} />
      <Subtitle text="ID Token" />
      <Code title="ID Token" code={idTokenCode} />

      <Code code={"const header = {...};\nconst payload = {...};\nconst secret = 'secret';\nconst signature = \n  CryptoJS.HmacSHA256(`${btoa(header)}.${btoa(payload)}`, secret)\n    .toString(CryptoJS.enc.Base64);\n\nconst JWT = `${btoa(header)}.${btoa(payload).${signature};`"} />

      <Subtitle text="Asymetric alogrithms" note="Use a private and public key combination to sign and verigy a JWT" />
      <AlgSummary />

      <Subtitle text="Sharing keys" note="Sometimes you want to share secrets between parties, when using an alorithm wich uses a private, public key, you can share the public key with a JWK" />
      <Subtitle text="JWK" note="JSON Web Key" />
      <Code code={'{\n  \"keys\": [\n    {\n      \"alg\": \"RS256\",\n      \"kty\": \"RSA\",\n      \"use\": \"sig\",\n      \"x5c\": [\n        \"MIIDAzC...8JufiAw==\"\n      ],\n      \"n\": \"qJdLkrX...SE4havw\",\n      \"e\": \"AQAB\",\n      \"kid\": \"NDZDOTV...E1NDgxNg\",\n      \"x5t\": \"NDZDOTV...E1NDgxNg\"\n    }\n  ]\n}'} />

      <Subtitle style={{fontSize: '33px'}} text={<a style={{color: 'black'}} href="https://sambego.eu.auth0.com/.well-known/openid-configuration">https://sambego.eu.auth0.com/.well-known/openid-configuration</a>} />
      <Subtitle style={{fontSize: '40px'}} text={<a style={{color: 'black'}} href="https://sambego.eu.auth0.com/.well-known/jwks.json">https://sambego.eu.auth0.com/.well-known/jwks.json</a>} />

      <Subtitle text="JW*" />
      <Subtitle text={<span>JWT<span style={{color: '#e7e9e9'}}>oken</span></span>} note="JSON Web Token" />
      <Subtitle text={<span>JWK<span style={{color: '#e7e9e9'}}>ey</span></span>} note="JSON Web Key" />
      <Subtitle text={<span>JWS<span style={{color: '#e7e9e9'}}>ignature</span></span>} note="JSON Web Signature" />
      <Subtitle text={<span>JWE<span style={{color: '#e7e9e9'}}>encryption</span></span>} note="JSON Web Encryption" />

      <Subtitle text="Let's make a little comparison"/>
      <Compare title="Header" code={headerExample} img={header} />
      <Compare title="Payload" code={payloadExample} img={payload} />
      <Compare title="Signature" code={signatureExample} img={signature} />

      <Subtitle text="Let's see it in action" note="Demo in insomnia. Expired JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImlhdCI6MTUzOTYwNjk3NDQzMCwiZXhwIjoxLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1iZWdvIn0.SydhBwpSQJhjtGZ9dafuu1Vl8cvqBtsEHH2BHEn_oSY Invalid signature: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImlhdCI6MTUzOTYwNjk3NDQzMCwiZXhwIjoxNTcxMTQyOTc0NDMwLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1iZWdvIn0.BcOa0Bt0Az1f-RWAT9CFyw7pUb2dMIMDRb5vgjjNKBU Valid JWT: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCIsImlhdCI6MTUzOTYwNjk3NDQzMCwiZXhwIjoxNTcxMTQyOTc0NDMwLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJzYW1iZWdvIn0.yZK3swRZOI3Ed2X1iz5np-CQyXG9qNTy_5gCcu2tyU0" />

      <JWT />

      <Subtitle text="Are there downsides to JSON Web Tokens?"/>
      <Subtitle text="Invalidation of tokens is a bit harder"/>
      <Subtitle text="Leaked secrets / keys can be a headache"/>
      <Subtitle text="Don't put sensitive data in your JWT!"/>

      <Subtitle
        text="Token based authentication"
        background="#ec5f67"
        color="#fff"
        note="What do I mean with traditional web apps? Server side rendered apps, where each page change causes a refresh in the browser.Typically made in php, .net, ruby on rails, …"
      />

      <Scheme
        src={spa1}
        note="A user visits your web app, and wants to access a protected page"
      />
      <Scheme
        src={spa2}
        note="The web app is going to ask the user to prove it is allowed to access that page. Typically this is done trough a login page / form"
      />
      <Scheme
        src={spa3}
        note="The user fills in a form. Usually this is a username / email and password. Can be something else like a social login authentication token, sso token, …"
      />
      <Scheme
        src={spa4}
        note="The browser will send those user credential to the server, to prove it is allowed to access that page"
      />
      <Scheme
        src={spa5}
        note="The server will send back an access token, which should be send by all requests in the future"
      />
      <Scheme
        src={spa6}
        note="The SPA should save this token in memory. In the past, people would just advice to save this token in a local cookie, or localstorage, but this can cause some security problems if these tokens get stolen by some malicious code. (XSS, cross site scripting can steal the tokens). npm, composer, Nuget: you don’t know what you’re pulling in. For now we store it in memory, and we’ll see later how we can persist this token."
      />
      <Scheme
        src={spa7}
        note="So, we are authenticated, let’s now request some data from our API"
      />
      <Scheme
        src={spa8}
        note="So, we are authenticated, let’s now request some data from our API"
      />

      <Code code={jsExample} />

      <Subtitle text="OAuth" note="Who’s ever heard of OAuth? Eg, Google, Facebook, twitter, …" />
      <Slide><Text style={{maxWidth: '80vw'}}>OAuth 2.0 is a protocol that allows a user to <span style={{fontWeight: 'bold'}}>grant limited access to their resources</span> on one site, to another site, without having to expose their credentials.</Text></Slide>
      <Subtitle text="OpenId Connect" note="And what about OIDC. OIDC is OAuth with an extra identity layer on top. Example is It’s me, Auth0, Google, amazon, …"/>
      <Slide><Text style={{maxWidth: '80vw'}}><span style={{fontWeight: 'bold'}}>OIDC was created as an identity layer for OAuth 2.0</span> because while OAuth provides a solid standard for user Authentication, developers needed a standard way of expressing user identity.</Text></Slide>

      <Scheme
        src={oidc1}
        note="Let’s see a simple ODIC example. I’m using a separate Authorization server. This is a common practice and separates the authorization from all other logic. Eg accounts.google.com -> gmail, youtube, …"
      />
      <Scheme
        src={oidc2}
      />
      <Scheme
        src={oidc3}
        note="When the credentials check out, the authentication server will return an access token"
      />
      <Scheme
        src={oidc4}
        note="Not only will the authorization server return an access token, it will also return an id token. This id token gives us some more information about the authorised user. It will also return a refresh token."
      />
      <Scheme
        src={oidc5}
        note="We save the tokens in memory and when we send along the access token any time we want to request data from a protected api endpoint"
      />
      <Scheme
        src={oidc6}
        note="The server will send back your requested information"
      />
      <Subtitle text="Will the user have to login with every visit?" note="Like I said before, we’re only storing the tokens in memory. This is for security reasons. Of course this will cause a bad user experience. Here’s a solution to persist the tokens after login."/>
      <Subtitle text="The login flow remains the same" note="User sends credentials, server checks these and returns tokens if valid"/>
      <Scheme
        src={oidc7}
        note="Asside from the tokens, the auth server will also set a cookie with a session token"
      />
      <Subtitle text="With each next visit we will request the tokens again, silently" note="" />
      <Scheme
        src={oidc8}
        note="When we have a session cookie saved, we will do a silent request in an iframe to the auth server"
      />
      <Scheme
        src={oidc9}
      />
      <Scheme
        src={oidc10}
        note="If the silent auth request returns tokens, we can use these to access protected resources"
      />

      <Subtitle text="OAuth Implicit Flow" />
      <Subtitle text="IETF published a new best practices document" note="The internet engineering taskforce" />
      <Subtitle text="Authorization code with Proof Key for Code Exchange (PKCE) Flow" />

      <Scheme
        src={pkce1}
      />
      <Scheme
        src={pkce2}
      />
      <Scheme
        src={pkce3}
      />
      <Scheme
        src={pkce4}
      />

      <Subtitle text="A note about Access Tokens as JWTs" />
      <Slide><Text style={{maxWidth: '80vw'}}>OAuth and Open ID Connect do not specify what format an access token should be, <br/><strong>they do not have to be JWTs</strong>. <br/><br/><a href="https://datatracker.ietf.org/doc/draft-ietf-oauth-access-token-jwt/?include_text=1" target="_blank" style={{color: 'black'}}>There's an IETF draft to standardise this</a>.</Text></Slide>
      <Slide><Text style={{maxWidth: '80vw'}}><strong>ID Tokens are always JWTs</strong>, per the OIDC spec.</Text></Slide>

      <Subtitle text="A note about Refresh tokens and SPAs" />
      <Slide><Text style={{maxWidth: '80vw'}}>Using refresh tokens in the front-end should be avoided, <strong>unless a system of refresh token rotation or sender-constrains is in place</strong>.</Text></Slide>

      <Subtitle text="Does this approach solve CORS?" note="Yes, the only server which needs to use the session cookie is the auth server" />
      <Subtitle text="Does this approach solve flow?" note="Yes, tokens can be passed from server to server. As long as all our servers can verify our tokens we can assure the user is allowed to access the API / resource" />
      <Subtitle text="Does this approach solve keeping state?" note="If we would save the tokens on the frontend we would not have to keep state on our servers, but unfortunately this can cause some security vulnerabilities.With this approach our auth server will still need to keep a list of sessions." />

      <Subtitle
        text="Future of authentication"
        background="#f99157"
        color="#fff"
        note="We talked a bit of the past and present of authenticating, but are there new technologies, ways to authenticate on the horizon?"
      />
      <Subtitle text="Web Authentication API" />
      <Subtitle text="Web Authn" />
      <Subtitle text={(<span>No more passwords<sup>*</sup> 🎉</span>)} note="Using the webauthn api we can register and authenticate using authentication devices instead of passwords. At the moment most browsers have only implemented half of the specs, but are working on it. It can already be used as a 2nd factor auth."/>
      <Subtitle text="That’s not new, we’ve had passwordless login for a while now!" note="Eg slack, True, passwordless is becoming more and more common. With passwordless you register using a email and password. When you want to log in, you receive an email / sms with a link containing a single use token (otp) to login in. This works well, but is nog as seamless as we would like." />
      <Subtitle text="Loggin in with an authenticator device" />

      <Scheme
        src={webauthn1}
        note="The user wants to acces a protected resource"
      />
      <Scheme
        src={webauthn2}
        note="The auth server will return a challenge"
      />
      <Scheme
        src={webauthn3}
        note="The auth server will return a challenge to the browser. The connected authentication device will create a private/public key pair and sign this challenge using the private key"
      />
      <Scheme
        src={webauthn4}
        note="Once the auth device signed the challenge it will return the signed challenge"
      />
      <Scheme
        src={webauthn5}
        note="We send this response to our auth server where it will deduce the public key from the response. We can then save that public key with our user details. From now on we can validate each new response with this public key."
      />

      <Webauthn />
      <Subtitle text="Who has an authenticator device?" note="You sure? Who owns a phone or laptop with a fingerprint scanner or face id?"/>
      <Webauthn platform/>

      <Subtitle text="Register a new credential" />
      <Code code={webauthnCode1}/>
      <Code code={webauthnCode2}/>
      <Code code={webauthnCode3}/>
      <Code code={webauthnCode4}/>
      <Code code={webauthnCode5}/>
      <Code code={webauthnCode6}/>


      <Subtitle text="Use a previously registered credential" />
      <Code code={webauthnCode8}/>
      <Code code={webauthnCode9}/>
      <Code code={webauthnCode10}/>
      <Code code={webauthnCode11}/>
      <Code code={webauthnCode12}/>

      <Subtitle text={<a href="https://webauthn.me" style={{color: 'black'}} target="_blank">https://webauthn.me</a>} />

      <FinalSummary />

      <Subtitle text={<List>
        <li><a href="https://jwt.io" target="_blank" style={{display: 'block', color: 'black'}}>https://jwt.io</a></li>
        <li><a href="https://webauthn.me" target="_blank" style={{display: 'block', color: 'black'}}>https://webauthn.me</a></li>
        <li><a href="https://auth0.com/blog/oauth2-implicit-grant-and-spa/" target="_blank" style={{display: 'block', color: 'black'}}>https://auth0.com/blog/oauth2-implicit-grant-and-spa/</a></li>
        <li><a href="https://auth0.com/blog" target="_blank" style={{display: 'block', color: 'black'}}>https://auth0.com/blog</a></li>
      </List>} />

      <Subtitle text={<a href="https://jwt.sambego.tech" style={{color: 'black'}} target="_blank">https://jwt.sambego.tech</a>} />

      <Thanks />
      <Questions />
      <Poes2 />
    </Deck>,
    document.getElementById("app")
);
